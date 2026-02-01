"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-border px-6 py-3">
          <div />
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted">admin</span>
          </div>
        </header>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
