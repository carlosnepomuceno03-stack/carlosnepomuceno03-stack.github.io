-- Privilégios que o Supabase concede por padrão ao papel authenticated (somente local).
grant usage on schema public, auth, storage to authenticated;
grant select, insert, update, delete on all tables in schema public to authenticated;
grant usage on all sequences in schema public to authenticated;
grant select on storage.objects to authenticated;
grant execute on function auth.uid() to authenticated;
grant execute on function public.is_org_member(uuid), public.can_edit_org(uuid), public.project_org(uuid) to authenticated;
