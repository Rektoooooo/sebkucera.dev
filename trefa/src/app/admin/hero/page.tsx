"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";

interface Slide {
  id: string;
  alt_text: string;
  active: boolean;
  sort_order: number;
}

const initialSlides: Slide[] = [
  { id: "1", alt_text: "Autoškola Trefa — jízda v provozu", active: true, sort_order: 1 },
  { id: "2", alt_text: "Motoškola — výcvik na Yamaha MT-07", active: true, sort_order: 2 },
  { id: "3", alt_text: "Cvičná plocha — polygon", active: true, sort_order: 3 },
];

export default function AdminHeroPage() {
  const [slides, setSlides] = useState<Slide[]>(initialSlides);
  const [editing, setEditing] = useState<Partial<Slide> | null>(null);
  const [showPreview, setShowPreview] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (editing.id) {
      setSlides(slides.map((s) => (s.id === editing.id ? { ...s, ...editing } as Slide : s)));
    } else {
      setSlides([...slides, { ...editing, id: String(Date.now()) } as Slide]);
    }
    setEditing(null);
  };

  const handleDelete = (row: Record<string, unknown>) => {
    setSlides(slides.filter((s) => s.id !== row.id));
  };

  const activeSlides = slides.filter((s) => s.active).sort((a, b) => a.sort_order - b.sort_order);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Hero slider</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${showPreview ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:bg-surface-light"}`}
          >
            {showPreview ? "Skrýt náhled" : "Zobrazit náhled"}
          </button>
          <button
            onClick={() => setEditing({ active: true, alt_text: "", sort_order: slides.length + 1 })}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background hover:bg-accent-light"
          >
            Přidat slide
          </button>
        </div>
      </div>

      {editing && (
        <form onSubmit={handleSave} className="mb-6 rounded-xl border border-border bg-surface p-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-sm font-medium">Popis (alt text)</label>
              <input value={editing.alt_text ?? ""} onChange={(e) => setEditing({ ...editing, alt_text: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Pořadí</label>
              <input type="number" value={editing.sort_order ?? 1} onChange={(e) => setEditing({ ...editing, sort_order: Number(e.target.value) })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" />
            </div>
            <div className="flex items-end gap-2 pb-1">
              <input type="checkbox" id="active" checked={editing.active ?? true} onChange={(e) => setEditing({ ...editing, active: e.target.checked })} className="rounded border-border" />
              <label htmlFor="active" className="text-sm">Aktivní</label>
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
          { key: "alt_text", label: "Popis" },
          { key: "active", label: "Aktivní", render: (v) => (
            <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${v ? "bg-emerald-50 text-emerald-600" : "bg-gray-50 text-gray-500"}`}>
              {v ? "Ano" : "Ne"}
            </span>
          )},
          { key: "sort_order", label: "Pořadí" },
        ]}
        data={slides as unknown as Record<string, unknown>[]}
        onEdit={(row) => setEditing(row as unknown as Slide)}
        onDelete={handleDelete}
      />

      {showPreview && (
        <div className="mt-8">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-light">Náhled na webu</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-dashed border-accent/30 bg-white p-1">
            <div className="rounded-xl overflow-hidden">
              <div className="relative aspect-[21/9] bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">AUTOŠKOLA TREFA</h2>
                    <p className="mt-2 text-sm text-gray-300">Vaše cesta za řidičákem začíná tady</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {activeSlides.map((s, i) => (
                    <div key={s.id} className={`h-2 rounded-full transition-all ${i === 0 ? "w-6 bg-white" : "w-2 bg-white/40"}`} title={s.alt_text} />
                  ))}
                </div>
              </div>
              <div className="bg-gray-900/80 px-4 py-2">
                <p className="text-center text-xs text-gray-400">
                  {activeSlides.length} aktivní{activeSlides.length === 1 ? "" : activeSlides.length < 5 ? "ch" : "ch"} slide{activeSlides.length === 1 ? "" : "ů"}: {activeSlides.map((s) => s.alt_text).join(" → ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
