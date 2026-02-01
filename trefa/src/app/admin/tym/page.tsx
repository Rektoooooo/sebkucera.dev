"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";

interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
}

const initialMembers: Member[] = [
  { id: "1", name: "Jan Novák", role: "Majitel & instruktor", bio: "Zkušený instruktor s 15 lety praxe. Specialista na výcvik motocyklů." },
  { id: "2", name: "Petr Svoboda", role: "Instruktor — osobní automobily", bio: "Trpělivý učitel, který vás naučí řídit bezpečně a s přehledem." },
  { id: "3", name: "Martin Dvořák", role: "Instruktor — motocykly", bio: "Aktivní závodník a nadšenec do motocyklů. Na cvičišti i v provozu." },
  { id: "4", name: "Lucie Černá", role: "Administrativa & zákaznický servis", bio: "Poradí vám s přihlášením, termíny a vším potřebným." },
];

export default function AdminTeamPage() {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [editing, setEditing] = useState<Partial<Member> | null>(null);
  const [showPreview, setShowPreview] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (editing.id) {
      setMembers(members.map((m) => (m.id === editing.id ? { ...m, ...editing } as Member : m)));
    } else {
      setMembers([...members, { ...editing, id: String(Date.now()) } as Member]);
    }
    setEditing(null);
  };

  const handleDelete = (row: Record<string, unknown>) => {
    setMembers(members.filter((m) => m.id !== row.id));
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tým</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${showPreview ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:bg-surface-light"}`}
          >
            {showPreview ? "Skrýt náhled" : "Zobrazit náhled"}
          </button>
          <button
            onClick={() => setEditing({ name: "", role: "", bio: "" })}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background hover:bg-accent-light"
          >
            Přidat člena
          </button>
        </div>
      </div>

      {editing && (
        <form onSubmit={handleSave} className="mb-6 rounded-xl border border-border bg-surface p-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Jméno</label>
              <input value={editing.name ?? ""} onChange={(e) => setEditing({ ...editing, name: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Role</label>
              <input value={editing.role ?? ""} onChange={(e) => setEditing({ ...editing, role: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" required />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Bio</label>
            <textarea rows={3} value={editing.bio ?? ""} onChange={(e) => setEditing({ ...editing, bio: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background hover:bg-accent-light">Uložit</button>
            <button type="button" onClick={() => setEditing(null)} className="rounded-lg border border-border px-4 py-2 text-sm text-muted hover:bg-surface-light">Zrušit</button>
          </div>
        </form>
      )}

      <DataTable
        columns={[
          { key: "name", label: "Jméno" },
          { key: "role", label: "Role" },
        ]}
        data={members as unknown as Record<string, unknown>[]}
        onEdit={(row) => setEditing(row as unknown as Member)}
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
              <div className="mx-auto max-w-2xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  {members.map((m) => (
                    <div key={m.id} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl font-bold text-gray-300">
                        {m.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <h4 className="font-semibold text-gray-900">{m.name}</h4>
                      <p className="text-sm text-sky-600">{m.role}</p>
                      {m.bio && <p className="mt-2 text-sm leading-relaxed text-gray-500">{m.bio}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
