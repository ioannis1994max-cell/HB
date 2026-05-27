create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  service text not null,
  preferred_date date,
  preferred_time time,
  message text,
  status text not null default 'new',
  source text not null default 'website',
  created_at timestamptz not null default now()
);

alter table public.booking_requests enable row level security;

grant usage on schema public to anon, authenticated;
revoke all on public.booking_requests from anon, authenticated;
grant insert on public.booking_requests to anon, authenticated;

drop policy if exists "Anyone can submit booking requests" on public.booking_requests;
create policy "Anyone can submit booking requests"
on public.booking_requests
for insert
to anon, authenticated
with check (true);
