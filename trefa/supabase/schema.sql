-- Autoškola Trefa - Database Schema
-- Run this in the Supabase SQL Editor

-- Hero slides
create table hero_slides (
  id uuid primary key default gen_random_uuid(),
  image_url text not null default '',
  alt_text text not null default '',
  sort_order int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Team members
create table team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null default '',
  bio text not null default '',
  photo_url text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- License categories
create table license_categories (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  name text not null,
  description text not null default '',
  min_age int not null default 18,
  requirements text not null default '',
  created_at timestamptz not null default now()
);

-- Courses
create table courses (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references license_categories(id) on delete cascade,
  start_date date not null,
  status text not null default 'planned' check (status in ('planned','open','full','in_progress','completed')),
  note text not null default '',
  created_at timestamptz not null default now()
);

-- Moto variants
create table moto_variants (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  price int not null default 0,
  features text[] not null default '{}',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Vehicles
create table vehicles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null default 'car' check (type in ('car','motorcycle')),
  image_url text not null default '',
  specs text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Articles
create table articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content text not null default '',
  image_url text not null default '',
  published boolean not null default false,
  published_at timestamptz default now(),
  created_at timestamptz not null default now()
);

-- Pricing
create table pricing (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  item text not null,
  price int not null default 0,
  note text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Documents
create table documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  file_url text not null default '',
  file_type text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- FAQ
create table faq (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Site settings
create table site_settings (
  key text primary key,
  value jsonb not null default '{}'
);

-- RLS: Public SELECT, authenticated INSERT/UPDATE/DELETE
alter table hero_slides enable row level security;
alter table team_members enable row level security;
alter table license_categories enable row level security;
alter table courses enable row level security;
alter table moto_variants enable row level security;
alter table vehicles enable row level security;
alter table articles enable row level security;
alter table pricing enable row level security;
alter table documents enable row level security;
alter table faq enable row level security;
alter table site_settings enable row level security;

-- Macro for creating standard policies
do $$
declare
  t text;
begin
  foreach t in array array['hero_slides','team_members','license_categories','courses','moto_variants','vehicles','articles','pricing','documents','faq','site_settings']
  loop
    execute format('create policy "Public read" on %I for select using (true)', t);
    execute format('create policy "Auth insert" on %I for insert with check (auth.role() = ''authenticated'')', t);
    execute format('create policy "Auth update" on %I for update using (auth.role() = ''authenticated'')', t);
    execute format('create policy "Auth delete" on %I for delete using (auth.role() = ''authenticated'')', t);
  end loop;
end $$;

-- Storage buckets (create these via Supabase Dashboard or API):
-- hero, team, vehicles, articles, documents
