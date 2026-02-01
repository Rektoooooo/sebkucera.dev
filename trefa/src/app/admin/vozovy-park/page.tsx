"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";

interface Vehicle {
  id: string;
  name: string;
  type: string;
  specs: string;
}

const initialVehicles: Vehicle[] = [
  { id: "1", name: "Volkswagen Golf VIII", type: "car", specs: "1.5 TSI, 110 kW, manuál" },
  { id: "2", name: "Škoda Fabia IV", type: "car", specs: "1.0 TSI, 70 kW, manuál" },
  { id: "3", name: "Škoda Octavia IV", type: "car", specs: "2.0 TDI, 110 kW, automat" },
  { id: "4", name: "Yamaha MT-07", type: "motorcycle", specs: "689 ccm, 55 kW" },
  { id: "5", name: "Yamaha YZF-R3", type: "motorcycle", specs: "321 ccm, 31 kW" },
  { id: "6", name: "Yamaha NMAX 125", type: "motorcycle", specs: "125 ccm, 9 kW" },
];

export default function AdminVehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
  const [editing, setEditing] = useState<Partial<Vehicle> | null>(null);
  const [showPreview, setShowPreview] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (editing.id) {
      setVehicles(vehicles.map((v) => (v.id === editing.id ? { ...v, ...editing } as Vehicle : v)));
    } else {
      setVehicles([...vehicles, { ...editing, id: String(Date.now()) } as Vehicle]);
    }
    setEditing(null);
  };

  const handleDelete = (row: Record<string, unknown>) => {
    setVehicles(vehicles.filter((v) => v.id !== row.id));
  };

  const cars = vehicles.filter((v) => v.type === "car");
  const motos = vehicles.filter((v) => v.type === "motorcycle");

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Vozový park</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${showPreview ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:bg-surface-light"}`}
          >
            {showPreview ? "Skrýt náhled" : "Zobrazit náhled"}
          </button>
          <button
            onClick={() => setEditing({ type: "car", name: "", specs: "" })}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background hover:bg-accent-light"
          >
            Přidat vozidlo
          </button>
        </div>
      </div>

      {editing && (
        <form onSubmit={handleSave} className="mb-6 rounded-xl border border-border bg-surface p-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-sm font-medium">Název</label>
              <input value={editing.name ?? ""} onChange={(e) => setEditing({ ...editing, name: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Typ</label>
              <select value={editing.type ?? "car"} onChange={(e) => setEditing({ ...editing, type: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none">
                <option value="car">Automobil</option>
                <option value="motorcycle">Motocykl</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Specifikace</label>
              <input value={editing.specs ?? ""} onChange={(e) => setEditing({ ...editing, specs: e.target.value })} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" />
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
          { key: "name", label: "Název" },
          { key: "type", label: "Typ", render: (v) => (
            <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${v === "car" ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"}`}>
              {v === "car" ? "Automobil" : "Motocykl"}
            </span>
          )},
          { key: "specs", label: "Specifikace" },
        ]}
        data={vehicles as unknown as Record<string, unknown>[]}
        onEdit={(row) => setEditing(row as unknown as Vehicle)}
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
                {[{ title: "Automobily", items: cars }, { title: "Motocykly", items: motos }].map((group) => group.items.length > 0 && (
                  <div key={group.title}>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">{group.title}</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {group.items.map((v) => (
                        <div key={v.id} className="rounded-xl border border-border bg-white p-4 shadow-sm">
                          <div className="mb-2 flex h-32 items-center justify-center rounded-lg bg-gray-100">
                            <svg className="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900">{v.name}</h4>
                          <p className="mt-0.5 text-sm text-gray-500">{v.specs}</p>
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
