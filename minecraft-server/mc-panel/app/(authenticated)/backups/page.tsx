'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';

interface Backup {
  id: string;
  name: string;
  size: string;
  created: string;
}

export default function BackupsPage() {
  const [backups, setBackups] = useState<Backup[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBackup, setSelectedBackup] = useState<Backup | null>(null);

  const fetchBackups = async () => {
    try {
      const data = await api.get<{ backups: Backup[] }>('/backups/list');
      setBackups(data.backups || []);
    } catch (error) {
      console.error('Failed to fetch backups:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBackups();
  }, []);

  const handleCreateBackup = async () => {
    setActionLoading('create');
    try {
      await api.post('/backups/create');
      await fetchBackups();
    } catch (error: any) {
      alert(`Failed to create backup: ${error.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDownload = (backup: Backup) => {
    const token = localStorage.getItem('token');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    window.open(`${apiUrl}/backups/download/${backup.id}?token=${token}`, '_blank');
  };

  const handleRestore = async () => {
    if (!selectedBackup) return;
    setActionLoading('restore');
    try {
      await api.post(`/backups/restore/${selectedBackup.id}`);
      setShowRestoreModal(false);
      alert('Backup restored successfully!');
    } catch (error: any) {
      alert(`Failed to restore backup: ${error.message}`);
    } finally {
      setActionLoading(null);
      setSelectedBackup(null);
    }
  };

  const handleDelete = async () => {
    if (!selectedBackup) return;
    setActionLoading('delete');
    try {
      await api.post(`/backups/delete/${selectedBackup.id}`);
      setShowDeleteModal(false);
      await fetchBackups();
    } catch (error: any) {
      alert(`Failed to delete backup: ${error.message}`);
    } finally {
      setActionLoading(null);
      setSelectedBackup(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Backups</h1>
          <p className="text-zinc-400">Manage your server backups</p>
        </div>
        <Button
          variant="primary"
          onClick={handleCreateBackup}
          loading={actionLoading === 'create'}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create Backup
        </Button>
      </div>

      <Card>
        {backups.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 text-zinc-700 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            <p className="text-zinc-400">No backups found</p>
            <p className="text-zinc-600 text-sm mt-2">Create your first backup to get started</p>
          </div>
        ) : (
          <div className="space-y-3">
            {backups.map((backup) => (
              <div
                key={backup.id}
                className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg border border-zinc-800"
              >
                <div>
                  <h3 className="text-white font-medium">{backup.name || backup.id}</h3>
                  <p className="text-sm text-zinc-500">
                    {backup.size} • {new Date(backup.created).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleDownload(backup)}
                  >
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => {
                      setSelectedBackup(backup);
                      setShowRestoreModal(true);
                    }}
                  >
                    Restore
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => {
                      setSelectedBackup(backup);
                      setShowDeleteModal(true);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Modal
        isOpen={showRestoreModal}
        onClose={() => {
          setShowRestoreModal(false);
          setSelectedBackup(null);
        }}
        onConfirm={handleRestore}
        title="Restore Backup"
        confirmText="Restore"
        confirmVariant="primary"
      >
        <p>
          Are you sure you want to restore backup <strong>{selectedBackup?.name || selectedBackup?.id}</strong>?
        </p>
        <p className="text-yellow-500 mt-3">
          Warning: This will stop the server and replace all current world data.
        </p>
      </Modal>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedBackup(null);
        }}
        onConfirm={handleDelete}
        title="Delete Backup"
        confirmText="Delete"
        confirmVariant="danger"
      >
        <p>
          Are you sure you want to delete backup <strong>{selectedBackup?.name || selectedBackup?.id}</strong>?
        </p>
        <p className="text-red-400 mt-3">This action cannot be undone.</p>
      </Modal>
    </div>
  );
}
