'use client';

import React, { useEffect } from 'react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title: string;
  children: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: 'primary' | 'danger' | 'success';
}

export function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmVariant = 'primary',
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-75"
        onClick={onClose}
      ></div>
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <div className="text-zinc-300 mb-6">{children}</div>
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose}>
            {cancelText}
          </Button>
          {onConfirm && (
            <Button variant={confirmVariant} onClick={onConfirm}>
              {confirmText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
