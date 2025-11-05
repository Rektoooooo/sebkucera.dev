import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'danger' | 'warning' | 'default';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    success: 'bg-green-500/20 text-green-400 border-green-500/50',
    danger: 'bg-red-500/20 text-red-400 border-red-500/50',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    default: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/50',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
