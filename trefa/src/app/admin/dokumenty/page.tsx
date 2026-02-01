"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";

interface Doc {
  id: string;
  title: string;
  file_type: string;
}

const initialDocs: Doc[] = [
  { id: "1", title: "Posudek o zdravotní způsobilosti", file_type: "PDF" },
  { id: "2", title: "Přihláška do autoškoly", file_type: "PDF" },
  { id: "3", title: "Žádost o přijetí k výuce a výcviku", file_type: "PDF" },
];

export default function AdminDocumentsPage() {
  const [docs, setDocs] = useState<Doc[]>(initialDocs);
  const [editing, setEditing] = useState<Partial<Doc> | null>(null);
  const [showPreview, setShowPreview] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (editing.id) {
      setDocs(docs.map((d) => (d.id === editing.id ? { ...d, ...editing } as Doc : d)));
    } else {
      setDocs([...docs, { ...editing, id: String(Date.now()) } as Doc]);
    }
    setEditing(null);
  };

  const handleDelete = (row: Record<string, unknown>) => {
    setDocs(docs.filter((d) => d.id !== row.id));
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dokumenty</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${showPreview ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:bg-surface-light"}`}
          >
            {showPreview ? "Skrýt náhled" : "Zobrazit náhled"}
          </button>
          <button
            onClick={() => setEditing({ title: "", file_type: "PDF" })}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background hover:bg-accent-light"
          >
            Přidat dokument
          </button>
        </div>
      </div>

      {editing && (
        <form onSubmit={handleSave} className="mb-6 rounded-xl border border-border bg-surface p-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Název</label>
              <input value={editing.title ?? ""} onChange={(e) => setEditing({ ...editing, title: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Typ souboru</label>
              <select value={editing.file_type ?? "PDF"} onChange={(e) => setEditing({ ...editing, file_type: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none">
                <option value="PDF">PDF</option>
                <option value="DOC">DOC</option>
                <option value="DOCX">DOCX</option>
                <option value="XLS">XLS</option>
              </select>
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
          { key: "title", label: "Název" },
          { key: "file_type", label: "Typ" },
        ]}
        data={docs as unknown as Record<string, unknown>[]}
        onEdit={(row) => setEditing(row as unknown as Doc)}
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
              <div className="mx-auto max-w-2xl space-y-3">
                {docs.map((d) => (
                  <div key={d.id} className="flex items-center gap-4 rounded-xl border border-border bg-white px-5 py-4 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                      <span className="text-xs font-bold text-red-500">{d.file_type}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-gray-900">{d.title}</h4>
                    </div>
                    <span className="shrink-0 rounded-lg bg-sky-600 px-4 py-2 text-xs font-semibold text-white">
                      Stáhnout
                    </span>
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
