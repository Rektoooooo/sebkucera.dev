'use client';

import { useEffect, useState, useRef } from 'react';
import { api } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';

interface Mod {
  file: string;
  size?: string;
  enabled: boolean;
}

export default function ModsPage() {
  const [mods, setMods] = useState<Mod[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMod, setSelectedMod] = useState<Mod | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchMods = async () => {
    try {
      const data = await api.get<{ mods: Mod[] }>('/mods');
      setMods(data.mods || []);
    } catch (error) {
      console.error('Failed to fetch mods:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    fetchMods();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.jar')) {
      alert('Please upload a .jar file');
      return;
    }

    setUploading(true);
    try {
      await api.upload('/mods/upload', file);
      await fetchMods();
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error: any) {
      alert(`Failed to upload mod: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleToggleMod = async (mod: Mod) => {
    const action = mod.enabled ? 'disable' : 'enable';
    setActionLoading(mod.file);
    try {
      await api.post(`/mods/${action}`, { file: mod.file });
      await fetchMods();
    } catch (error: any) {
      alert(`Failed to ${action} mod: ${error.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async () => {
    if (!selectedMod) return;
    setActionLoading(selectedMod.file);
    try {
      await api.post('/mods/delete', { file: selectedMod.file });
      setShowDeleteModal(false);
      await fetchMods();
    } catch (error: any) {
      alert(`Failed to delete mod: ${error.message}`);
    } finally {
      setActionLoading(null);
      setSelectedMod(null);
    }
  };

  const enabledMods = mods.filter((m) => m.enabled);
  const disabledMods = mods.filter((m) => !m.enabled);
  const showLoading = !isMounted || loading;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Mods</h1>
          <p className="text-zinc-400">Manage your server modifications</p>
        </div>
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".jar"
            onChange={handleFileUpload}
            className="hidden"
          />
          <Button
            variant="primary"
            onClick={() => fileInputRef.current?.click()}
            loading={uploading}
            disabled={!isMounted}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Upload Mod
          </Button>
        </div>
      </div>

      {showLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <Card title="Enabled Mods">
        {enabledMods.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-zinc-500">No enabled mods</p>
          </div>
        ) : (
          <div className="space-y-2">
            {enabledMods.map((mod) => (
              <div
                key={mod.file}
                className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg border border-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <h3 className="text-white font-medium">{mod.file}</h3>
                    {mod.size && <p className="text-sm text-zinc-500">{mod.size}</p>}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleToggleMod(mod)}
                    loading={actionLoading === mod.file}
                    disabled={actionLoading !== null}
                  >
                    Disable
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => {
                      setSelectedMod(mod);
                      setShowDeleteModal(true);
                    }}
                    disabled={actionLoading !== null}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card title="Disabled Mods">
        {disabledMods.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-zinc-500">No disabled mods</p>
          </div>
        ) : (
          <div className="space-y-2">
            {disabledMods.map((mod) => (
              <div
                key={mod.file}
                className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg border border-zinc-800 opacity-60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                  <div>
                    <h3 className="text-white font-medium">{mod.file}</h3>
                    {mod.size && <p className="text-sm text-zinc-500">{mod.size}</p>}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => handleToggleMod(mod)}
                    loading={actionLoading === mod.file}
                    disabled={actionLoading !== null}
                  >
                    Enable
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => {
                      setSelectedMod(mod);
                      setShowDeleteModal(true);
                    }}
                    disabled={actionLoading !== null}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
          </Card>
        </>
      )}

      <Modal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedMod(null);
        }}
        onConfirm={handleDelete}
        title="Delete Mod"
        confirmText="Delete"
        confirmVariant="danger"
      >
        <p>
          Are you sure you want to delete <strong>{selectedMod?.file}</strong>?
        </p>
        <p className="text-red-400 mt-3">This action cannot be undone.</p>
      </Modal>
    </div>
  );
}
