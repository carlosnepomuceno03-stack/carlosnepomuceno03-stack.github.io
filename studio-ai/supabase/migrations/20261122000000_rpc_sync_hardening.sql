-- Lumpli 0.2.1 — correção de segurança, funções RPC (HTTPS/PostgREST) e sincronização de projetos.

-- ---------------------------------------------------------------------------
-- 1) CORREÇÃO DE SEGURANÇA
-- O Supabase concede EXECUTE em funções novas de `public` a anon/authenticated por privilégio padrão.
-- `revoke ... from public` (migração 2) não remove essas concessões explícitas: um usuário logado poderia
-- chamar as funções de backend com outro p_user. Revogamos explicitamente.
-- ---------------------------------------------------------------------------
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
    'public.assert_can_edit_project(uuid,uuid)',
    'public.content_hash(jsonb)'
  ] loop
    execute format('revoke all on function %s from public, anon, authenticated', fn);
  end loop;
end $$;

-- Material gerado: o usuário só pode mudar o estado de revisão; arquivo, revisão de origem e relatório são imutáveis.
create or replace function public.guard_generated_material_update() returns trigger
language plpgsql as $$
begin
  if (to_jsonb(new) - 'review_status') is distinct from (to_jsonb(old) - 'review_status') then
    raise exception 'materiais gerados são imutáveis (apenas o estado de revisão pode mudar)' using errcode = 'P0001';
  end if;
  return new;
end $$;
create trigger generated_materials_guard before update on public.generated_materials
  for each row execute function public.guard_generated_material_update();
create trigger generated_materials_no_delete before delete on public.generated_materials
  for each row execute function public.forbid_update();

-- ---------------------------------------------------------------------------
-- 2) Funções de leitura/escrita do usuário (SECURITY INVOKER: as políticas RLS se aplicam).
-- Chamáveis via PostgREST (/rest/v1/rpc/...) com o JWT do usuário, ou via SQL com o papel authenticated.
-- ---------------------------------------------------------------------------
create or replace function public.api_list_projects() returns jsonb
language sql stable security invoker set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object(
    'id', id, 'organizationId', organization_id, 'name', name, 'kind', kind,
    'eventDate', event_date, 'venue', venue, 'currentStep', current_step, 'steps', steps,
    'aiBudgetCents', ai_budget_cents, 'aiSpentCents', ai_spent_cents,
    'createdAt', created_at, 'updatedAt', updated_at) order by updated_at desc), '[]'::jsonb)
  from projects;
$$;

-- Idempotente: o app gera o UUID; reenviar o mesmo projeto não duplica.
create or replace function public.api_upsert_project(
  p_id uuid, p_org uuid, p_name text, p_kind text, p_event_date date, p_venue text,
  p_current_step text, p_steps jsonb, p_created_at timestamptz default now()
) returns jsonb
language plpgsql security invoker set search_path = public as $$
declare v jsonb;
begin
  insert into projects (id, organization_id, name, kind, event_date, venue, current_step, steps, created_by, created_at, updated_at)
  values (p_id, p_org, p_name, p_kind, p_event_date, p_venue, p_current_step, p_steps, auth.uid(), p_created_at, now())
  on conflict (id) do nothing;
  select jsonb_build_object('id', id, 'organizationId', organization_id, 'name', name, 'kind', kind, 'eventDate', event_date,
    'venue', venue, 'currentStep', current_step, 'steps', steps, 'aiBudgetCents', ai_budget_cents, 'aiSpentCents', ai_spent_cents,
    'createdAt', created_at, 'updatedAt', updated_at)
  into v from projects where id = p_id;
  if v is null then raise exception 'projeto não encontrado' using errcode = 'LP404'; end if;
  return v;
end $$;

-- Exclusão lógica (SECURITY DEFINER com checagem explícita: a linha excluída deixa de passar na política de leitura,
-- o que o Postgres exige numa UPDATE via RLS). Os dados são preservados para auditoria.
create or replace function public.api_delete_project(p_id uuid) returns jsonb
language plpgsql security definer set search_path = public as $$
declare v_org uuid;
begin
  select organization_id into v_org from projects where id = p_id and deleted_at is null;
  if v_org is null or auth.uid() is null or not can_edit_org_as(auth.uid(), v_org) then
    raise exception 'projeto não encontrado' using errcode = 'LP404';
  end if;
  update projects set deleted_at = now(), updated_at = now() where id = p_id;
  insert into audit_logs (organization_id, project_id, actor_user_id, action, target_type, target_id)
  values (v_org, p_id, auth.uid(), 'project.deleted', 'project', p_id::text);
  return jsonb_build_object('deleted', true);
end $$;

create or replace function public.api_save_briefing(
  p_project uuid, p_id uuid, p_objective text, p_audience text, p_tone text, p_mandatory text[], p_notes text
) returns jsonb
language plpgsql security invoker set search_path = public as $$
declare v_rev int; v jsonb;
begin
  if not exists (select 1 from projects where id = p_project) then raise exception 'projeto não encontrado' using errcode = 'LP404'; end if;
  if not exists (select 1 from briefings where id = p_id) then
    select coalesce(max(revision), 0) + 1 into v_rev from briefings where project_id = p_project;
    insert into briefings (id, project_id, revision, objective, audience, tone, mandatory_texts, notes, created_by)
    values (p_id, p_project, v_rev, p_objective, p_audience, p_tone, coalesce(p_mandatory, '{}'), p_notes, auth.uid());
    update projects set steps = steps || '{"briefing":"completed"}'::jsonb,
                        current_step = case when current_step = 'briefing' then 'add_references' else current_step end,
                        updated_at = now()
    where id = p_project;
  end if;
  select jsonb_build_object('id', id, 'projectId', project_id, 'revision', revision, 'objective', objective, 'audience', audience,
    'tone', tone, 'mandatoryTexts', to_jsonb(mandatory_texts), 'notes', notes, 'createdAt', created_at)
  into v from briefings where id = p_id;
  return v;
end $$;

create or replace function public.api_list_briefings(p_project uuid) returns jsonb
language sql stable security invoker set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object('id', id, 'projectId', project_id, 'revision', revision, 'objective', objective,
    'audience', audience, 'tone', tone, 'mandatoryTexts', to_jsonb(mandatory_texts), 'notes', notes, 'createdAt', created_at)
    order by revision), '[]'::jsonb)
  from briefings where project_id = p_project;
$$;

create or replace function public.api_add_reference(
  p_id uuid, p_project uuid, p_source text, p_url text, p_title text, p_aspects text[]
) returns jsonb
language plpgsql security invoker set search_path = public as $$
declare v jsonb;
begin
  insert into project_references (id, project_id, source, url, title, wanted_aspects, created_by)
  values (p_id, p_project, p_source, p_url, p_title, coalesce(p_aspects, '{}'), auth.uid())
  on conflict (id) do nothing;
  update projects set steps = case when steps->>'add_references' = 'not_started' then steps || '{"add_references":"in_progress"}'::jsonb else steps end,
                      updated_at = now()
  where id = p_project;
  select jsonb_build_object('id', id, 'projectId', project_id, 'source', source, 'url', url, 'assetId', asset_id, 'title', title,
    'wantedAspects', to_jsonb(wanted_aspects), 'createdAt', created_at)
  into v from project_references where id = p_id;
  if v is null then raise exception 'referência não encontrada' using errcode = 'LP404'; end if;
  return v;
end $$;

create or replace function public.api_delete_reference(p_id uuid) returns jsonb
language sql security invoker set search_path = public as $$
  with d as (delete from project_references where id = p_id returning 1)
  select jsonb_build_object('deleted', exists (select 1 from d));
$$;

create or replace function public.api_list_references(p_project uuid) returns jsonb
language sql stable security invoker set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object('id', id, 'projectId', project_id, 'source', source, 'url', url, 'assetId', asset_id,
    'title', title, 'wantedAspects', to_jsonb(wanted_aspects), 'createdAt', created_at) order by created_at desc), '[]'::jsonb)
  from project_references where project_id = p_project;
$$;

create or replace function public.api_project_org(p_project uuid) returns jsonb
language sql stable security invoker set search_path = public as $$
  select jsonb_build_object('organizationId', organization_id) from projects where id = p_project;
$$;

create or replace function public.api_list_assets(p_project uuid) returns jsonb
language sql stable security invoker set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object('id', id, 'kind', kind, 'mime_type', mime_type, 'sha256', sha256, 'width', width,
    'height', height, 'storage_path', storage_path, 'created_at', created_at) order by created_at), '[]'::jsonb)
  from assets where project_id = p_project and kind <> 'export';
$$;

create or replace function public.api_list_documents(p_project uuid) returns jsonb
language sql stable security invoker set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object('id', d.id, 'name', d.name, 'kind', d.kind, 'headRevision', d.head_revision,
    'approvedRevision', (select max(revision) from layout_versions v where v.document_id = d.id and v.status = 'approved'),
    'createdAt', d.created_at) order by d.created_at), '[]'::jsonb)
  from graphic_documents d where d.project_id = p_project;
$$;

-- Documento + todas as revisões (conteúdo completo de cada uma).
create or replace function public.api_get_document(p_document uuid) returns jsonb
language sql stable security invoker set search_path = public as $$
  select jsonb_build_object('id', d.id, 'project_id', d.project_id, 'organization_id', p.organization_id, 'name', d.name,
    'kind', d.kind, 'format_id', d.format_id, 'head_revision', d.head_revision,
    'versions', coalesce((select jsonb_agg(jsonb_build_object('revision', v.revision, 'parent_revision', v.parent_revision,
        'status', v.status, 'content', v.content, 'content_sha256', v.content_sha256, 'created_at', v.created_at) order by v.revision)
      from layout_versions v where v.document_id = d.id), '[]'::jsonb),
    'identities', coalesce((select jsonb_agg(jsonb_build_object('id', i.id, 'revision', i.revision,
        'source_document_revision', i.source_document_revision, 'contract', i.contract) order by i.revision)
      from visual_identities i where i.source_document_id = d.id), '[]'::jsonb))
  from graphic_documents d join projects p on p.id = d.project_id where d.id = p_document;
$$;

create or replace function public.api_list_materials(p_project uuid) returns jsonb
language sql stable security invoker set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object('id', m.id, 'format_id', m.format_id, 'width', m.width, 'height', m.height,
    'review_status', m.review_status, 'document_id', m.document_id, 'document_revision', m.document_revision,
    'identity_id', m.identity_id, 'storage_path', a.storage_path, 'sha256', a.sha256, 'created_at', m.created_at,
    'status', m.quality_report->>'status') order by m.created_at desc), '[]'::jsonb)
  from generated_materials m join assets a on a.id = m.asset_id where m.project_id = p_project;
$$;

-- ---------------------------------------------------------------------------
-- 3) Funções do backend (somente service role)
-- ---------------------------------------------------------------------------
-- Primeiro acesso: perfil, organização pessoal e agentes nativos.
create or replace function public.api_bootstrap_user(p_user uuid) returns jsonb
language plpgsql security definer set search_path = public as $$
declare v_org uuid; v_role text;
begin
  insert into profiles (id) values (p_user) on conflict (id) do nothing;
  select organization_id, role into v_org, v_role from organization_members where user_id = p_user order by created_at limit 1;
  if v_org is null then
    insert into organizations (name, created_by) values ('Meu estúdio', p_user) returning id into v_org;
    insert into organization_members values (v_org, p_user, 'owner');
    insert into agents (id, organization_id, enabled)
      select a, v_org, true from unnest(array['director','research','art_direction','production','quality']) a;
    v_role := 'owner';
  end if;
  return jsonb_build_object('userId', p_user, 'organizationId', v_org, 'role', v_role);
end $$;

-- Metadados de um recurso para o renderizador, sempre restrito ao projeto.
create or replace function public.api_asset_for_render(p_project uuid, p_asset uuid) returns jsonb
language sql stable security definer set search_path = public as $$
  select jsonb_build_object('id', id, 'storage_path', storage_path, 'mime_type', mime_type, 'sha256', sha256, 'width', width, 'height', height)
  from assets where id = p_asset and project_id = p_project;
$$;

do $$
declare fn text;
begin
  foreach fn in array array['public.api_bootstrap_user(uuid)', 'public.api_asset_for_render(uuid,uuid)'] loop
    execute format('revoke all on function %s from public, anon, authenticated', fn);
    if exists (select 1 from pg_roles where rolname = 'service_role') then
      execute format('grant execute on function %s to service_role', fn);
    end if;
  end loop;
  -- Funções do usuário: somente autenticados (nunca anônimos).
  foreach fn in array array[
    'public.api_list_projects()', 'public.api_upsert_project(uuid,uuid,text,text,date,text,text,jsonb,timestamptz)',
    'public.api_delete_project(uuid)', 'public.api_save_briefing(uuid,uuid,text,text,text,text[],text)',
    'public.api_list_briefings(uuid)', 'public.api_add_reference(uuid,uuid,text,text,text,text[])',
    'public.api_delete_reference(uuid)', 'public.api_list_references(uuid)', 'public.api_project_org(uuid)',
    'public.api_list_assets(uuid)', 'public.api_list_documents(uuid)', 'public.api_get_document(uuid)',
    'public.api_list_materials(uuid)'
  ] loop
    execute format('revoke all on function %s from public, anon', fn);
    execute format('grant execute on function %s to authenticated', fn);
  end loop;
end $$;
