-- Studio AI — esquema inicial (Etapa 0)
-- Alvo: Supabase (PostgreSQL 15+). Depende de auth.users e auth.uid() fornecidos pelo Supabase.
-- Convenções: uuid como chave, timestamps em UTC, RLS habilitado em todas as tabelas públicas.

-- gen_random_uuid() é nativo no PostgreSQL 13+ (sem extensão).

-- ---------------------------------------------------------------------------
-- Usuários e organizações
-- ---------------------------------------------------------------------------
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  created_at timestamptz not null default now()
);

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null check (length(name) between 1 and 120),
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now()
);

create table public.organization_members (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'editor', 'viewer')),
  created_at timestamptz not null default now(),
  primary key (organization_id, user_id)
);

-- Funções auxiliares de autorização (security definer evita recursão de RLS).
create or replace function public.is_org_member(org uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from organization_members m where m.organization_id = org and m.user_id = auth.uid());
$$;

create or replace function public.can_edit_org(org uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from organization_members m
                 where m.organization_id = org and m.user_id = auth.uid() and m.role in ('owner', 'editor'));
$$;

-- ---------------------------------------------------------------------------
-- Projetos
-- ---------------------------------------------------------------------------
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null check (length(trim(name)) between 2 and 120),
  kind text not null check (kind in ('event', 'brand', 'campaign', 'other')),
  event_date date,
  venue text,
  current_step text not null default 'briefing',
  steps jsonb not null default '{}'::jsonb,
  ai_budget_cents integer not null default 200 check (ai_budget_cents >= 0),
  ai_spent_cents integer not null default 0 check (ai_spent_cents >= 0),
  -- revisão do estado do projeto: controle de concorrência otimista entre agentes
  state_revision integer not null default 0,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);
create index projects_org_idx on public.projects (organization_id, updated_at desc);

create or replace function public.project_org(p uuid) returns uuid
language sql stable security definer set search_path = public as $$
  select organization_id from projects where id = p;
$$;

create table public.briefings (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  revision integer not null check (revision >= 1),
  objective text not null default '',
  audience text not null default '',
  tone text not null default '',
  mandatory_texts text[] not null default '{}',
  notes text not null default '',
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  unique (project_id, revision)
);

-- ---------------------------------------------------------------------------
-- Recursos (arquivos). Originais são imutáveis; derivados apontam para a origem.
-- ---------------------------------------------------------------------------
create table public.assets (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  kind text not null check (kind in ('photo', 'logo', 'font', 'graphic', 'background', 'reference_image', 'export')),
  storage_path text not null unique,
  mime_type text not null,
  size_bytes bigint not null check (size_bytes > 0 and size_bytes <= 41943040),
  sha256 text not null check (sha256 ~ '^[0-9a-f]{64}$'),
  width integer,
  height integer,
  derived_from_asset_id uuid references public.assets(id),
  derivation text,
  usage_rights_confirmed boolean not null default false,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  check ((derived_from_asset_id is null) = (derivation is null))
);
create index assets_project_idx on public.assets (project_id);
create index assets_sha_idx on public.assets (sha256);

create or replace function public.forbid_asset_mutation() returns trigger
language plpgsql as $$
begin
  if new.sha256 <> old.sha256 or new.storage_path <> old.storage_path
     or new.mime_type <> old.mime_type or new.size_bytes <> old.size_bytes then
    raise exception 'assets são imutáveis: crie um recurso derivado' using errcode = 'P0001';
  end if;
  return new;
end $$;
create trigger assets_immutable before update on public.assets
  for each row execute function public.forbid_asset_mutation();

create table public.project_references (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  source text not null check (source in ('upload', 'pinterest_link', 'behance_link', 'other_link')),
  url text,
  asset_id uuid references public.assets(id),
  title text,
  wanted_aspects text[] not null default '{}',
  analysis jsonb,               -- observações com nível de confiança (ReferenceObservation[])
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  check (url is not null or asset_id is not null)
);

-- ---------------------------------------------------------------------------
-- Documentos gráficos e revisões
-- ---------------------------------------------------------------------------
create table public.graphic_documents (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  name text not null,
  kind text not null check (kind in ('master', 'adaptation', 'reconstruction_proposal')),
  format_id text,
  source_document_id uuid references public.graphic_documents(id),
  head_revision integer not null default 0,
  created_at timestamptz not null default now()
);

-- Cada salvamento cria uma revisão. O JSON (GraphicDocument v1) é a fonte da verdade.
create table public.layout_versions (
  document_id uuid not null references public.graphic_documents(id) on delete cascade,
  revision integer not null check (revision >= 1),
  parent_revision integer,
  schema_version integer not null,
  content jsonb not null,
  content_sha256 text not null check (content_sha256 ~ '^[0-9a-f]{64}$'),
  status text not null default 'draft' check (status in ('draft', 'approved', 'superseded')),
  created_by uuid references auth.users(id),          -- null quando criado por agente/worker
  created_by_agent text,
  created_at timestamptz not null default now(),
  primary key (document_id, revision)
);

-- Índice das camadas de cada revisão (consulta/auditoria: quais assets, papéis, textos).
create table public.layers (
  document_id uuid not null,
  revision integer not null,
  layer_id text not null,
  type text not null check (type in ('image', 'text', 'shape', 'group', 'mask', 'vector', 'background')),
  role text not null,
  z_index integer not null,
  asset_id uuid references public.assets(id),
  asset_sha256 text,
  locked boolean not null default false,
  primary key (document_id, revision, layer_id),
  foreign key (document_id, revision) references public.layout_versions(document_id, revision) on delete cascade
);

-- Revisão aprovada é imutável (somente pode passar a 'superseded').
create or replace function public.forbid_approved_version_mutation() returns trigger
language plpgsql as $$
begin
  if old.status = 'approved' then
    if new.content is distinct from old.content or new.content_sha256 <> old.content_sha256
       or new.revision <> old.revision or new.document_id <> old.document_id
       or new.status not in ('approved', 'superseded') then
      raise exception 'revisão aprovada é imutável: crie uma nova revisão' using errcode = 'P0001';
    end if;
  end if;
  if old.status = 'superseded' and new is distinct from old then
    raise exception 'revisão substituída é imutável' using errcode = 'P0001';
  end if;
  return new;
end $$;
create trigger layout_versions_immutable before update on public.layout_versions
  for each row execute function public.forbid_approved_version_mutation();

create or replace function public.forbid_approved_version_delete() returns trigger
language plpgsql as $$
begin
  if old.status <> 'draft' then
    raise exception 'revisões aprovadas não podem ser apagadas' using errcode = 'P0001';
  end if;
  return old;
end $$;
create trigger layout_versions_no_delete before delete on public.layout_versions
  for each row execute function public.forbid_approved_version_delete();

-- ---------------------------------------------------------------------------
-- Identidade visual e aprovações
-- ---------------------------------------------------------------------------
create table public.visual_identities (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  revision integer not null check (revision >= 1),
  parent_revision integer,
  source_document_id uuid not null,
  source_document_revision integer not null,
  contract jsonb not null,      -- VisualIdentityContract
  created_at timestamptz not null default now(),
  unique (project_id, revision),
  foreign key (source_document_id, source_document_revision) references public.layout_versions(document_id, revision)
);

create or replace function public.forbid_update() returns trigger
language plpgsql as $$
begin
  raise exception '% é somente-inserção', tg_table_name using errcode = 'P0001';
end $$;
create trigger visual_identities_immutable before update or delete on public.visual_identities
  for each row execute function public.forbid_update();

create table public.approvals (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  target_type text not null check (target_type in ('master_layout', 'adaptation', 'direction', 'cost')),
  document_id uuid,
  document_revision integer,
  decision text not null check (decision in ('approved', 'rejected', 'changes_requested')),
  note text,
  decided_by uuid not null references auth.users(id),
  decided_at timestamptz not null default now()
);
create trigger approvals_immutable before update or delete on public.approvals
  for each row execute function public.forbid_update();

create table public.format_presets (
  id text not null,
  organization_id uuid references public.organizations(id) on delete cascade, -- null = preset do sistema
  revision integer not null default 1,
  name text not null,
  width integer not null check (width between 1 and 8192),
  height integer not null check (height between 1 and 8192),
  safe_margin integer not null default 0,
  rules jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique nulls not distinct (id, organization_id, revision)
);

insert into public.format_presets (id, organization_id, name, width, height, safe_margin) values
  ('story', null, 'Story', 1080, 1920, 120),
  ('feed', null, 'Feed', 1080, 1440, 64),
  ('sympla', null, 'Sympla', 1600, 838, 48),
  ('telao', null, 'Telão', 1920, 1080, 64);

-- ---------------------------------------------------------------------------
-- Agentes, jobs e tarefas
-- ---------------------------------------------------------------------------
create table public.agents (
  id text not null,                         -- director | research | art_direction | production | quality
  organization_id uuid not null references public.organizations(id) on delete cascade,
  enabled boolean not null default true,
  provider text,                            -- ex.: anthropic
  model text,
  max_cost_cents_per_task integer not null default 50,
  max_attempts integer not null default 3 check (max_attempts between 1 and 10),
  timeout_ms integer not null default 120000,
  updated_at timestamptz not null default now(),
  primary key (organization_id, id)
);

create table public.production_jobs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  kind text not null,
  status text not null check (status in ('not_started', 'in_progress', 'awaiting_user', 'completed', 'error', 'cancelled')),
  max_cost_cents integer not null check (max_cost_cents >= 0),
  cost_cents numeric(12, 4) not null default 0,
  idempotency_key text not null,
  requested_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  finished_at timestamptz,
  unique (project_id, idempotency_key)
);

create table public.agent_tasks (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.production_jobs(id) on delete cascade,
  project_id uuid not null references public.projects(id) on delete cascade,
  agent_id text not null,
  kind text not null,
  status text not null check (status in ('not_started', 'in_progress', 'awaiting_user', 'completed', 'error', 'cancelled')),
  depends_on uuid[] not null default '{}',
  base_revision integer not null,
  idempotency_key text not null unique,
  attempts integer not null default 0,
  max_attempts integer not null default 3,
  timeout_ms integer not null default 120000,
  status_message text,
  progress_done integer,
  progress_total integer,
  error jsonb,
  input jsonb not null default '{}'::jsonb,
  output jsonb,
  cost_cents numeric(12, 4),
  lease_owner text,                 -- worker que detém a tarefa
  lease_expires_at timestamptz,     -- tarefa com lease vencido = interrompida, pode ser retomada
  created_at timestamptz not null default now(),
  started_at timestamptz,
  finished_at timestamptz,
  check ((progress_done is null) = (progress_total is null))
);
create index agent_tasks_project_idx on public.agent_tasks (project_id, created_at desc);
create index agent_tasks_runnable_idx on public.agent_tasks (status, lease_expires_at);

-- Registro de cada chamada a provedor de IA (custos e auditoria; nunca guarda segredos).
create table public.ai_calls (
  id uuid primary key default gen_random_uuid(),
  task_id uuid not null references public.agent_tasks(id) on delete cascade,
  project_id uuid not null references public.projects(id) on delete cascade,
  provider text not null,
  model text not null,
  input_tokens integer,
  output_tokens integer,
  cost_cents numeric(12, 4),
  duration_ms integer,
  outcome text not null check (outcome in ('ok', 'error', 'timeout', 'cancelled')),
  created_at timestamptz not null default now()
);

create table public.generated_materials (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  document_id uuid not null,
  document_revision integer not null,
  identity_id uuid references public.visual_identities(id),
  format_id text not null,
  asset_id uuid not null references public.assets(id),   -- PNG exportado
  width integer not null,
  height integer not null,
  renderer_version text not null,
  quality_report jsonb,
  review_status text not null default 'pending' check (review_status in ('pending', 'approved', 'rejected')),
  task_id uuid references public.agent_tasks(id),
  created_at timestamptz not null default now(),
  foreign key (document_id, document_revision) references public.layout_versions(document_id, revision)
);

create table public.audit_logs (
  id bigint generated always as identity primary key,
  organization_id uuid,
  project_id uuid,
  actor_user_id uuid,
  actor_agent text,
  action text not null,
  target_type text,
  target_id text,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create trigger audit_logs_immutable before update or delete on public.audit_logs
  for each row execute function public.forbid_update();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- Escritas de agentes/worker usam a service role (bypass de RLS) no backend, nunca no app.
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.organization_members enable row level security;
alter table public.projects enable row level security;
alter table public.briefings enable row level security;
alter table public.assets enable row level security;
alter table public.project_references enable row level security;
alter table public.graphic_documents enable row level security;
alter table public.layout_versions enable row level security;
alter table public.layers enable row level security;
alter table public.visual_identities enable row level security;
alter table public.approvals enable row level security;
alter table public.format_presets enable row level security;
alter table public.agents enable row level security;
alter table public.production_jobs enable row level security;
alter table public.agent_tasks enable row level security;
alter table public.ai_calls enable row level security;
alter table public.generated_materials enable row level security;
alter table public.audit_logs enable row level security;

create policy profiles_self on public.profiles for all using (id = auth.uid()) with check (id = auth.uid());

create policy orgs_read on public.organizations for select using (public.is_org_member(id) or created_by = auth.uid());
create policy orgs_insert on public.organizations for insert with check (created_by = auth.uid());

create policy members_read on public.organization_members for select using (public.is_org_member(organization_id));
-- o criador da organização pode se adicionar como owner; demais adições exigem owner
create policy members_insert on public.organization_members for insert with check (
  (user_id = auth.uid() and role = 'owner'
     and exists (select 1 from public.organizations o where o.id = organization_id and o.created_by = auth.uid()))
  or exists (select 1 from public.organization_members m
             where m.organization_id = organization_members.organization_id and m.user_id = auth.uid() and m.role = 'owner')
);

create policy projects_read on public.projects for select using (public.is_org_member(organization_id) and deleted_at is null);
create policy projects_insert on public.projects for insert with check (public.can_edit_org(organization_id) and created_by = auth.uid());
create policy projects_update on public.projects for update using (public.can_edit_org(organization_id)) with check (public.can_edit_org(organization_id));

-- Tabelas filhas de projeto: leitura para membros, escrita para editores.
create policy briefings_read on public.briefings for select using (public.is_org_member(public.project_org(project_id)));
create policy briefings_write on public.briefings for insert with check (public.can_edit_org(public.project_org(project_id)) and created_by = auth.uid());

create policy assets_read on public.assets for select using (public.is_org_member(public.project_org(project_id)));
create policy assets_insert on public.assets for insert with check (public.can_edit_org(public.project_org(project_id)) and created_by = auth.uid());

create policy refs_read on public.project_references for select using (public.is_org_member(public.project_org(project_id)));
create policy refs_insert on public.project_references for insert with check (public.can_edit_org(public.project_org(project_id)) and created_by = auth.uid());
create policy refs_delete on public.project_references for delete using (public.can_edit_org(public.project_org(project_id)));

create policy docs_read on public.graphic_documents for select using (public.is_org_member(public.project_org(project_id)));
create policy docs_write on public.graphic_documents for insert with check (public.can_edit_org(public.project_org(project_id)));
create policy docs_update on public.graphic_documents for update using (public.can_edit_org(public.project_org(project_id)));

create policy versions_read on public.layout_versions for select using (
  exists (select 1 from public.graphic_documents d where d.id = document_id and public.is_org_member(public.project_org(d.project_id))));
create policy versions_insert on public.layout_versions for insert with check (
  status = 'draft' and created_by = auth.uid() and
  exists (select 1 from public.graphic_documents d where d.id = document_id and public.can_edit_org(public.project_org(d.project_id))));

create policy layers_read on public.layers for select using (
  exists (select 1 from public.graphic_documents d where d.id = document_id and public.is_org_member(public.project_org(d.project_id))));

create policy identities_read on public.visual_identities for select using (public.is_org_member(public.project_org(project_id)));
create policy approvals_read on public.approvals for select using (public.is_org_member(public.project_org(project_id)));
create policy approvals_insert on public.approvals for insert with check (public.can_edit_org(public.project_org(project_id)) and decided_by = auth.uid());

create policy presets_read on public.format_presets for select using (organization_id is null or public.is_org_member(organization_id));
create policy agents_read on public.agents for select using (public.is_org_member(organization_id));
create policy agents_update on public.agents for update using (public.can_edit_org(organization_id));

create policy jobs_read on public.production_jobs for select using (public.is_org_member(public.project_org(project_id)));
create policy tasks_read on public.agent_tasks for select using (public.is_org_member(public.project_org(project_id)));
create policy ai_calls_read on public.ai_calls for select using (public.is_org_member(public.project_org(project_id)));
create policy materials_read on public.generated_materials for select using (public.is_org_member(public.project_org(project_id)));
create policy materials_review on public.generated_materials for update using (public.can_edit_org(public.project_org(project_id)));
create policy audit_read on public.audit_logs for select using (organization_id is not null and public.is_org_member(organization_id));

-- Storage: bucket privado por padrão. Caminho: {organization_id}/{project_id}/{asset_id}
-- (políticas de storage.objects aplicadas em migração separada, pois dependem do schema storage do Supabase)
