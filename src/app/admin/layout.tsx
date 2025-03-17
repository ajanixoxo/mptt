// app/admin/layout.tsx
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin Dashboard | Hack-A-Path",
  description: "Admin dashboard for Hack-A-Path community management.",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-layout">
      {/* Admin-specific navigation if needed */}
      <main className="flex-grow">{children}</main>
      {/* Admin-specific footer if needed */}
    </div>
  );
}