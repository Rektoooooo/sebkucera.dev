"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import { formatPrice } from "@/lib/utils";

interface PricingItem {
  id: string;
  category: string;
  item: string;
  price: number;
  note: string;
}

const initialItems: PricingItem[] = [
  { id: "1", category: "Motocykl", item: "AM", price: 35800, note: "+ bonus 7 hod tréninku navíc" },
  { id: "2", category: "Motocykl", item: "A1", price: 35800, note: "+ bonus 7 hod tréninku navíc" },
  { id: "3", category: "Motocykl", item: "A2", price: 35800, note: "+ bonus 5 hod tréninku navíc" },
  { id: "4", category: "Motocykl", item: "A", price: 35800, note: "+ bonus 3 hod tréninku navíc" },
  { id: "5", category: "Osobní auto", item: "B", price: 31800, note: "" },
  { id: "6", category: "Kombo", item: "A + B", price: 58800, note: "+ 6 hod tréninku" },
  { id: "7", category: "Nákladní", item: "C", price: 25800, note: "Podmínka: sk. B" },
  { id: "8", category: "Přívěs", item: "B+E", price: 11800, note: "" },
];

export default function AdminPricingPage() {
  const [items, setItems] = useState<PricingItem[]>(initialItems);
  const [editing, setEditing] = useState<Partial<PricingItem> | null>(null);
  const [showPreview, setShowPreview] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (editing.id) {
      setItems(items.map((i) => (i.id === editing.id ? { ...i, ...editing } as PricingItem : i)));
    } else {
      setItems([...items, { ...editing, id: String(Date.now()) } as PricingItem]);
    }
    setEditing(null);
  };

  const handleDelete = (row: Record<string, unknown>) => {
    setItems(items.filter((i) => i.id !== row.id));
  };

  const grouped = items.reduce<Record<string, PricingItem[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Ceník</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${showPreview ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:bg-surface-light"}`}
          >
            {showPreview ? "Skrýt náhled" : "Zobrazit náhled"}
          </button>
          <button
            onClick={() => setEditing({ category: "", item: "", price: 0, note: "" })}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background hover:bg-accent-light"
          >
            Přidat položku
          </button>
        </div>
      </div>

      {editing && (
        <form onSubmit={handleSave} className="mb-6 rounded-xl border border-border bg-surface p-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Kategorie</label>
              <input value={editing.category ?? ""} onChange={(e) => setEditing({ ...editing, category: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Položka</label>
              <input value={editing.item ?? ""} onChange={(e) => setEditing({ ...editing, item: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Cena (Kč)</label>
              <input type="number" value={editing.price ?? ""} onChange={(e) => setEditing({ ...editing, price: Number(e.target.value) })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Poznámka</label>
              <input value={editing.note ?? ""} onChange={(e) => setEditing({ ...editing, note: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" />
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
          { key: "category", label: "Kategorie" },
          { key: "item", label: "Položka" },
          { key: "price", label: "Cena", render: (v) => formatPrice(v as number) },
          { key: "note", label: "Poznámka" },
        ]}
        data={items as unknown as Record<string, unknown>[]}
        onEdit={(row) => setEditing(row as unknown as PricingItem)}
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
              <div className="mx-auto max-w-2xl space-y-6">
                {Object.entries(grouped).map(([category, rows]) => (
                  <div key={category} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                    <div className="border-b border-border bg-sky-600/5 px-5 py-3.5">
                      <h3 className="text-lg font-bold text-gray-900">{category}</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {rows.map((row) => (
                        <div key={row.id} className="flex items-start justify-between gap-4 px-5 py-4 hover:bg-gray-50/30">
                          <div className="min-w-0 flex-1">
                            <span className="font-semibold text-gray-900">{row.item}</span>
                            {row.note && <p className="mt-0.5 text-sm text-gray-500">{row.note}</p>}
                          </div>
                          <span className="shrink-0 whitespace-nowrap text-lg font-bold text-sky-600">
                            {formatPrice(row.price)}
                          </span>
                        </div>
                      ))}
                    </div>
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
