"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import Badge from "@/components/ui/Badge";

interface Course {
  id: string;
  start_date: string;
  status: string;
  note: string;
}

const initialCourses: Course[] = [
  { id: "1", start_date: "2025-04-11", status: "full", note: "" },
  { id: "2", start_date: "2025-05-02", status: "open", note: "Poslední volná místa" },
  { id: "3", start_date: "2025-05-23", status: "open", note: "" },
  { id: "4", start_date: "2025-06-13", status: "planned", note: "" },
  { id: "5", start_date: "2025-07-04", status: "planned", note: "" },
];

const previewStatusStyles: Record<string, { bg: string; text: string; label: string }> = {
  full: { bg: "bg-red-50", text: "text-red-500", label: "Obsazeno" },
  open: { bg: "bg-emerald-50", text: "text-emerald-600", label: "Volné" },
  planned: { bg: "bg-blue-50", text: "text-blue-600", label: "Plánovaný" },
  in_progress: { bg: "bg-amber-50", text: "text-amber-600", label: "Probíhá" },
  completed: { bg: "bg-gray-50", text: "text-gray-500", label: "Ukončený" },
};

function formatCourseDate(dateStr: string) {
  const d = new Date(dateStr);
  return `Termín od ${d.getDate()}. ${d.getMonth() + 1}.`;
}

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [editing, setEditing] = useState<Partial<Course> | null>(null);
  const [showPreview, setShowPreview] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (editing.id) {
      setCourses(courses.map((c) => (c.id === editing.id ? { ...c, ...editing } as Course : c)));
    } else {
      setCourses([...courses, { ...editing, id: String(Date.now()) } as Course]);
    }
    setEditing(null);
  };

  const handleDelete = (row: Record<string, unknown>) => {
    setCourses(courses.filter((c) => c.id !== row.id));
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Kurzy</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${showPreview ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:bg-surface-light"}`}
          >
            {showPreview ? "Skrýt náhled" : "Zobrazit náhled"}
          </button>
          <button
            onClick={() => setEditing({ status: "planned", note: "", start_date: "" })}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background hover:bg-accent-light"
          >
            Přidat kurz
          </button>
        </div>
      </div>

      {editing && (
        <form onSubmit={handleSave} className="mb-6 rounded-xl border border-border bg-surface p-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-sm font-medium">Datum zahájení</label>
              <input
                type="date"
                value={editing.start_date ?? ""}
                onChange={(e) => setEditing({ ...editing, start_date: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Stav</label>
              <select
                value={editing.status ?? "planned"}
                onChange={(e) => setEditing({ ...editing, status: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
              >
                <option value="planned">Plánovaný</option>
                <option value="open">Volné</option>
                <option value="full">Obsazeno</option>
                <option value="in_progress">Probíhá</option>
                <option value="completed">Ukončený</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Poznámka</label>
              <input
                value={editing.note ?? ""}
                onChange={(e) => setEditing({ ...editing, note: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
              />
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
          { key: "start_date", label: "Datum zahájení", render: (v) => new Date(v as string).toLocaleDateString("cs-CZ") },
          { key: "status", label: "Stav", render: (v) => <Badge status={v as string} /> },
          { key: "note", label: "Poznámka" },
        ]}
        data={courses as unknown as Record<string, unknown>[]}
        onEdit={(row) => setEditing(row as unknown as Course)}
        onDelete={handleDelete}
      />

      {/* Live Preview */}
      {showPreview && (
        <div className="mt-8">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-light">Náhled na webu</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-dashed border-accent/30 bg-white p-1">
            <div className="rounded-xl bg-surface-alt p-6">
              <div className="mx-auto max-w-2xl">
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <div className="border-b border-border bg-gray-50/50 px-5 py-3">
                    <h3 className="text-sm font-semibold text-gray-900">Kdy můžete začít?</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {courses.map((c) => {
                      const s = previewStatusStyles[c.status] ?? previewStatusStyles.planned;
                      return (
                        <div key={c.id} className="flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-gray-50/30">
                          <div>
                            <span className="text-sm font-medium text-gray-900">{formatCourseDate(c.start_date)}</span>
                            {c.note && <span className="ml-2 text-xs text-gray-500">({c.note})</span>}
                          </div>
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${s.bg} ${s.text}`}>
                            {s.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t border-border bg-gray-50/30 px-5 py-4">
                    <p className="mb-3 text-sm text-gray-500">Jdete do toho s námi?</p>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white">
                      Přihlásit se
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
