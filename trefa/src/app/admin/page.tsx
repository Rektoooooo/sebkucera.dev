"use client";

import Link from "next/link";

const sections = [
  { href: "/admin/kurzy", label: "Kurzy", count: 5 },
  { href: "/admin/aktuality", label: "Aktuality", count: 4 },
  { href: "/admin/cenik", label: "Ceník", count: 8 },
  { href: "/admin/vozovy-park", label: "Vozový park", count: 6 },
  { href: "/admin/tym", label: "Tým", count: 4 },
  { href: "/admin/hero", label: "Hero slider", count: 3 },
  { href: "/admin/dokumenty", label: "Dokumenty", count: 3 },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/50"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{s.label}</h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                {s.count}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">Spravovat {s.label.toLowerCase()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
