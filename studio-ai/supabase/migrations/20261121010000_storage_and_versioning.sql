-- Lumpli 0.2 — Storage privado e operações de versionamento executadas pelo backend.
--
-- Princípio: mutações que exigem validação (hash de arquivos, esquema do documento, contrato de identidade)
-- passam pela API, que valida com os esquemas compartilhados e chama estas funções. As funções recebem o
-- usuário (p_user) e conferem a permissão dele na organização; só a service role pode executá-las.
-- Leituras continuam diretas e protegidas por RLS.

-- ---------------------------------------------------------------------------
-- Fecha os caminhos de escrita direta que dispensariam validação
-- ---------------------------------------------------------------------------
drop policy if exists assets_insert on public.assets;
drop policy if exists versions_insert on public.layout_versions;
drop policy if exists docs_write on public.graphic_documents;
drop policy if exists docs_update on public.graphic_documents;
drop policy if exists approvals_insert on public.approvals;

create or replace function public.can_edit_org_as(p_user uuid, org uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from organization_members m
                 where m.organization_id = org and m.user_id = p_user and m.role in ('owner', 'editor'));
$$;

create or replace function public.assert_can_edit_project(p_user uuid, p_project uuid) returns uuid
language plpgsql stable security definer set search_path = public as $$
declare v_org uuid;
begin
  select organization_id into v_org from projects where id = p_project and deleted_at is null;
  if v_org is null then raise exception 'projeto não encontrado' using errcode = 'LP404'; end if;
  if not can_edit_org_as(p_user, v_org) then raise exception 'sem permissão de edição' using errcode = 'LP403'; end if;
  return v_org;
end $$;

create or replace function public.content_hash(p jsonb) returns text
language sql immutable as $$ select encode(sha256(convert_to(p::text, 'UTF8')), 'hex') $$;

-- ---------------------------------------------------------------------------
-- Recursos: registrados somente depois que a API leu os bytes e calculou o SHA-256
-- ---------------------------------------------------------------------------
create or replace function public.register_asset(
  p_user uuid, p_project uuid, p_kind text, p_storage_path text, p_mime text, p_size bigint,
  p_sha256 text, p_width int, p_height int, p_rights boolean,
  p_derived_from uuid default null, p_derivation text default null
) returns uuid
language plpgsql security definer set search_path = public as $$
declare v_org uuid; v_id uuid;
begin
  v_org := assert_can_edit_project(p_user, p_project);
  if p_storage_path not like v_org::text || '/' || p_project::text || '/%' then
    raise exception 'caminho de armazenamento fora do projeto' using errcode = 'LP422';
  end if;
  if p_kind <> 'export' and not p_rights then
    raise exception 'confirme o direito de uso do arquivo' using errcode = 'LP422';
  end if;
  insert into assets (project_id, kind, storage_path, mime_type, size_bytes, sha256, width, height,
                      usage_rights_confirmed, derived_from_asset_id, derivation, created_by)
  values (p_project, p_kind, p_storage_path, p_mime, p_size, p_sha256, p_width, p_height,
          p_rights, p_derived_from, p_derivation, p_user)
  returning id into v_id;
  insert into audit_logs (organization_id, project_id, actor_user_id, action, target_type, target_id, details)
  values (v_org, p_project, p_user, 'asset.registered', 'asset', v_id::text,
          jsonb_build_object('kind', p_kind, 'sha256', p_sha256, 'size', p_size));
  return v_id;
end $$;

-- ---------------------------------------------------------------------------
-- Documentos e revisões
-- ---------------------------------------------------------------------------
create or replace function public.create_document(
  p_user uuid, p_project uuid, p_name text, p_kind text, p_format_id text default null, p_source uuid default null
) returns uuid
language plpgsql security definer set search_path = public as $$
declare v_org uuid; v_id uuid;
begin
  v_org := assert_can_edit_project(p_user, p_project);
  insert into graphic_documents (project_id, name, kind, format_id, source_document_id)
  values (p_project, p_name, p_kind, p_format_id, p_source) returning id into v_id;
  insert into audit_logs (organization_id, project_id, actor_user_id, action, target_type, target_id)
  values (v_org, p_project, p_user, 'document.created', 'document', v_id::text);
  return v_id;
end $$;

-- Salva nova revisão (rascunho). Controle de concorrência otimista: p_base_revision deve ser o head atual.
-- p_layers: [{layer_id, type, role, z_index, asset_id, asset_sha256, locked}] — índice para auditoria.
create or replace function public.save_document_revision(
  p_user uuid, p_document uuid, p_base_revision int, p_content jsonb, p_layers jsonb, p_agent text default null
) returns int
language plpgsql security definer set search_path = public as $$
declare v_doc graphic_documents%rowtype; v_org uuid; v_rev int; v_layer jsonb;
begin
  select * into v_doc from graphic_documents where id = p_document for update;
  if not found then raise exception 'documento não encontrado' using errcode = 'LP404'; end if;
  v_org := assert_can_edit_project(p_user, v_doc.project_id);
  if v_doc.head_revision <> p_base_revision then
    raise exception 'conflito de versão: base %, atual %', p_base_revision, v_doc.head_revision using errcode = 'LP409';
  end if;
  v_rev := v_doc.head_revision + 1;
  if (p_content->>'schemaVersion')::int is distinct from 1 or (p_content->>'revision')::int is distinct from v_rev
     or p_content->>'id' is distinct from p_document::text or p_content->>'projectId' is distinct from v_doc.project_id::text then
    raise exception 'conteúdo não corresponde ao documento/revisão' using errcode = 'LP422';
  end if;

  insert into layout_versions (document_id, revision, parent_revision, schema_version, content, content_sha256, status, created_by, created_by_agent)
  values (p_document, v_rev, nullif(p_base_revision, 0), 1, p_content, content_hash(p_content), 'draft', p_user, p_agent);

  for v_layer in select * from jsonb_array_elements(coalesce(p_layers, '[]'::jsonb)) loop
    -- Proveniência: o recurso precisa existir no MESMO projeto e com o MESMO hash
    if v_layer->>'asset_id' is not null and not exists (
      select 1 from assets a where a.id = (v_layer->>'asset_id')::uuid and a.project_id = v_doc.project_id
                               and a.sha256 = v_layer->>'asset_sha256') then
      raise exception 'camada % referencia recurso inexistente ou com hash diferente', v_layer->>'layer_id' using errcode = 'LP422';
    end if;
    insert into layers (document_id, revision, layer_id, type, role, z_index, asset_id, asset_sha256, locked)
    values (p_document, v_rev, v_layer->>'layer_id', v_layer->>'type', v_layer->>'role', (v_layer->>'z_index')::int,
            (v_layer->>'asset_id')::uuid, v_layer->>'asset_sha256', coalesce((v_layer->>'locked')::boolean, false));
  end loop;

  update graphic_documents set head_revision = v_rev where id = p_document;
  insert into audit_logs (organization_id, project_id, actor_user_id, actor_agent, action, target_type, target_id, details)
  values (v_org, v_doc.project_id, p_user, p_agent, 'document.revision_saved', 'document', p_document::text, jsonb_build_object('revision', v_rev));
  return v_rev;
end $$;

-- Aprova uma revisão do layout principal e congela o contrato de identidade (calculado pela API).
create or replace function public.approve_document_revision(
  p_user uuid, p_document uuid, p_revision int, p_contract jsonb, p_note text default null
) returns uuid
language plpgsql security definer set search_path = public as $$
declare v_doc graphic_documents%rowtype; v_org uuid; v_status text; v_prev record; v_identity uuid; v_next int;
begin
  select * into v_doc from graphic_documents where id = p_document for update;
  if not found then raise exception 'documento não encontrado' using errcode = 'LP404'; end if;
  v_org := assert_can_edit_project(p_user, v_doc.project_id);
  if v_doc.kind <> 'master' then raise exception 'apenas o layout principal é aprovado como identidade' using errcode = 'LP422'; end if;
  select status into v_status from layout_versions where document_id = p_document and revision = p_revision;
  if v_status is null then raise exception 'revisão não encontrada' using errcode = 'LP404'; end if;
  if v_status <> 'draft' then raise exception 'revisão já aprovada ou substituída' using errcode = 'LP409'; end if;
  if p_revision <> v_doc.head_revision then raise exception 'só a revisão mais recente pode ser aprovada' using errcode = 'LP409'; end if;
  if (p_contract->>'sourceDocumentId') is distinct from p_document::text
     or (p_contract->>'sourceDocumentRevision')::int is distinct from p_revision then
    raise exception 'contrato não corresponde à revisão' using errcode = 'LP422';
  end if;

  update layout_versions set status = 'superseded' where document_id = p_document and status = 'approved';
  update layout_versions set status = 'approved' where document_id = p_document and revision = p_revision;

  select id, revision into v_prev from visual_identities where project_id = v_doc.project_id order by revision desc limit 1;
  v_next := coalesce(v_prev.revision, 0) + 1;
  insert into visual_identities (project_id, revision, parent_revision, source_document_id, source_document_revision, contract)
  values (v_doc.project_id, v_next, v_prev.revision, p_document, p_revision,
          p_contract || jsonb_build_object('revision', v_next, 'parentRevision', v_prev.revision))
  returning id into v_identity;

  insert into approvals (project_id, target_type, document_id, document_revision, decision, note, decided_by)
  values (v_doc.project_id, 'master_layout', p_document, p_revision, 'approved', p_note, p_user);
  insert into audit_logs (organization_id, project_id, actor_user_id, action, target_type, target_id, details)
  values (v_org, v_doc.project_id, p_user, 'document.approved', 'document', p_document::text,
          jsonb_build_object('revision', p_revision, 'identity_id', v_identity, 'identity_revision', v_next));
  return v_identity;
end $$;

-- Restaurar = criar NOVA revisão com o conteúdo de uma anterior (nada é apagado ou sobrescrito).
create or replace function public.restore_document_revision(p_user uuid, p_document uuid, p_from_revision int) returns int
language plpgsql security definer set search_path = public as $$
declare v_doc graphic_documents%rowtype; v_org uuid; v_content jsonb; v_rev int;
begin
  select * into v_doc from graphic_documents where id = p_document for update;
  if not found then raise exception 'documento não encontrado' using errcode = 'LP404'; end if;
  v_org := assert_can_edit_project(p_user, v_doc.project_id);
  select content into v_content from layout_versions where document_id = p_document and revision = p_from_revision;
  if v_content is null then raise exception 'revisão não encontrada' using errcode = 'LP404'; end if;
  v_rev := v_doc.head_revision + 1;
  v_content := v_content || jsonb_build_object('revision', v_rev, 'parentRevision', p_from_revision,
                                               'approval', jsonb_build_object('status', 'draft'));
  insert into layout_versions (document_id, revision, parent_revision, schema_version, content, content_sha256, status, created_by)
  values (p_document, v_rev, p_from_revision, 1, v_content, content_hash(v_content), 'draft', p_user);
  insert into layers (document_id, revision, layer_id, type, role, z_index, asset_id, asset_sha256, locked)
  select document_id, v_rev, layer_id, type, role, z_index, asset_id, asset_sha256, locked
  from layers where document_id = p_document and revision = p_from_revision;
  update graphic_documents set head_revision = v_rev where id = p_document;
  insert into audit_logs (organization_id, project_id, actor_user_id, action, target_type, target_id, details)
  values (v_org, v_doc.project_id, p_user, 'document.restored', 'document', p_document::text,
          jsonb_build_object('from', p_from_revision, 'revision', v_rev));
  return v_rev;
end $$;

-- Material exportado (PNG já gravado no Storage e registrado como asset 'export').
create or replace function public.register_generated_material(
  p_user uuid, p_project uuid, p_document uuid, p_revision int, p_identity uuid, p_format text,
  p_asset uuid, p_width int, p_height int, p_renderer text, p_report jsonb, p_task uuid default null
) returns uuid
language plpgsql security definer set search_path = public as $$
declare v_org uuid; v_id uuid;
begin
  v_org := assert_can_edit_project(p_user, p_project);
  insert into generated_materials (project_id, document_id, document_revision, identity_id, format_id, asset_id,
                                   width, height, renderer_version, quality_report, task_id)
  values (p_project, p_document, p_revision, p_identity, p_format, p_asset, p_width, p_height, p_renderer, p_report, p_task)
  returning id into v_id;
  insert into audit_logs (organization_id, project_id, actor_user_id, action, target_type, target_id, details)
  values (v_org, p_project, p_user, 'material.generated', 'generated_material', v_id::text,
          jsonb_build_object('format', p_format, 'width', p_width, 'height', p_height));
  return v_id;
end $$;

-- Somente o backend (service role / dono do banco) executa as funções de mutação.
do $$
declare fn text;
begin
  foreach fn in array array[
    'public.register_asset(uuid,uuid,text,text,text,bigint,text,int,int,boolean,uuid,text)',
    'public.create_document(uuid,uuid,text,text,text,uuid)',
    'public.save_document_revision(uuid,uuid,int,jsonb,jsonb,text)',
    'public.approve_document_revision(uuid,uuid,int,jsonb,text)',
    'public.restore_document_revision(uuid,uuid,int)',
    'public.register_generated_material(uuid,uuid,uuid,int,uuid,text,uuid,int,int,text,jsonb,uuid)',
    'public.can_edit_org_as(uuid,uuid)',
    'public.assert_can_edit_project(uuid,uuid)'
  ] loop
    execute format('revoke all on function %s from public', fn);
    if exists (select 1 from pg_roles where rolname = 'service_role') then
      execute format('grant execute on function %s to service_role', fn);
    end if;
  end loop;
end $$;

-- ---------------------------------------------------------------------------
-- Storage (Supabase): bucket privado. Caminho: {organization_id}/{project_id}/{arquivo}
-- Escrita somente pelo backend (service role); leitura direta só para membros da organização.
-- O app recebe URLs assinadas de curta duração emitidas pela API.
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('studio-private', 'studio-private', false, 41943040,
        array['image/png', 'image/jpeg', 'image/webp', 'font/ttf', 'font/otf', 'application/font-sfnt', 'application/octet-stream'])
on conflict (id) do nothing;

create policy "studio_private_read_members" on storage.objects for select to authenticated
  using (bucket_id = 'studio-private' and public.is_org_member(((storage.foldername(name))[1])::uuid));
