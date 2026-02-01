"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";

interface Article {
  id: string;
  title: string;
  content: string;
  published: boolean;
  published_at: string;
}

const initialArticles: Article[] = [
  { id: "1", title: "Nové termíny kurzů na léto 2025", content: "Přidali jsme nové termíny kurzů pro letní sezónu. Přihlaste se včas, kapacita je omezená!", published: true, published_at: "2025-03-15" },
  { id: "2", title: "Změna otevírací doby o prázdninách", content: "V průběhu letních prázdnin budeme mít upravenou otevírací dobu. Po–Pá 9:00–16:00.", published: true, published_at: "2025-03-01" },
  { id: "3", title: "Nový motocykl Yamaha MT-07 ve vozovém parku", content: "Do našeho vozového parku přibyla nová Yamaha MT-07. Těšíme se na vás na cvičišti!", published: true, published_at: "2025-02-20" },
  { id: "4", title: "Úspěšnost našich studentů v roce 2024", content: "V roce 2024 jsme dosáhli 94% úspěšnosti u prvního pokusu závěrečné zkoušky.", published: false, published_at: "" },
];

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [editing, setEditing] = useState<Partial<Article> | null>(null);
  const [showPreview, setShowPreview] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (editing.id) {
      setArticles(articles.map((a) => (a.id === editing.id ? { ...a, ...editing } as Article : a)));
    } else {
      setArticles([...articles, { ...editing, id: String(Date.now()) } as Article]);
    }
    setEditing(null);
  };

  const handleDelete = (row: Record<string, unknown>) => {
    setArticles(articles.filter((a) => a.id !== row.id));
  };

  const published = articles.filter((a) => a.published);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Aktuality</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${showPreview ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:bg-surface-light"}`}
          >
            {showPreview ? "Skrýt náhled" : "Zobrazit náhled"}
          </button>
          <button
            onClick={() => setEditing({ published: false, content: "", title: "", published_at: new Date().toISOString().split("T")[0] })}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background hover:bg-accent-light"
          >
            Nový článek
          </button>
        </div>
      </div>

      {editing && (
        <form onSubmit={handleSave} className="mb-6 rounded-xl border border-border bg-surface p-4 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Titulek</label>
            <input value={editing.title ?? ""} onChange={(e) => setEditing({ ...editing, title: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Obsah</label>
            <textarea rows={5} value={editing.content ?? ""} onChange={(e) => setEditing({ ...editing, content: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Datum</label>
              <input type="date" value={editing.published_at ?? ""} onChange={(e) => setEditing({ ...editing, published_at: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" />
            </div>
            <div className="flex items-end gap-2 pb-1">
              <input type="checkbox" id="pub" checked={editing.published ?? false} onChange={(e) => setEditing({ ...editing, published: e.target.checked })} className="rounded border-border" />
              <label htmlFor="pub" className="text-sm">Publikováno</label>
            </div>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background hover:bg-accent-light">Uložit</button>
            <button type="button" onClick={() => setEditing(null)} className="rounded-lg border border-border px-4 py-2 text-sm text-muted hover:bg-surface-light">Zrušit</button>
          </div>
        </form>
      )}

      <DataTable
        columns={[
          { key: "title", label: "Titulek" },
          { key: "published", label: "Stav", render: (v) => (
            <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${v ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}>
              {v ? "Publikováno" : "Koncept"}
            </span>
          )},
          { key: "published_at", label: "Datum", render: (v) => v ? new Date(v as string).toLocaleDateString("cs-CZ") : "—" },
        ]}
        data={articles as unknown as Record<string, unknown>[]}
        onEdit={(row) => setEditing(row as unknown as Article)}
        onDelete={handleDelete}
      />

      {showPreview && (
        <div className="mt-8">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-light">Náhled na webu</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-dashed border-accent/30 bg-white p-1">
            <div className="rounded-xl bg-surface-alt p-6">
              <div className="mx-auto max-w-2xl space-y-4">
                {published.length === 0 && <p className="text-center text-sm text-gray-400">Žádné publikované články</p>}
                {published.map((a) => (
                  <div key={a.id} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                    <div className="mb-2 flex items-center gap-2">
                      {a.published_at && (
                        <span className="text-xs text-gray-400">{new Date(a.published_at).toLocaleDateString("cs-CZ")}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{a.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
