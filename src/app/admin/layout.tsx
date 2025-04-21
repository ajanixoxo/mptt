// app/admin/layout.tsx
import { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
  title: "Admin Dashboard | Hack-A-Path",
  description: "Admin dashboard for Hack-A-Path community management.",
};
import { ThemeProvider } from 'next-themes';
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" >
    <div className="admin-layout bg-white text-black">
      {/* Admin-specific navigation if needed */}
      <main className="flex-grow bg-white">{children}</main>
      {/* Admin-specific footer if needed */}
    </div>
    </ThemeProvider>
  );
}