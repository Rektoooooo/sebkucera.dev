import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function Card({ children, className = '', title }: CardProps) {
  return (
    <div className={`bg-[#18181b] border border-zinc-800 rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>}
      {children}
    </div>
  );
}
