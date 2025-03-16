"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, Calendar, Users, Settings, LogOut, Menu, X, ChevronDown } from "lucide-react"

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const handleSignOut = async () => {
    try {
      // Use the API endpoint instead of Supabase
      const response = await fetch("/api/admin/auth/logout", {
        method: "POST",
      })

      if (response.ok) {
        // Clear admin user from localStorage
        localStorage.removeItem("adminUser")
        router.push("/admin/login")
      }
    } catch (error) {
      console.error("Sign out error:", error)
    }
  }

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Events", href: "/admin/events", icon: Calendar },
    { name: "Users", href: "/admin/users", icon: Users },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-purple-600 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b">
            <Link href="/admin/dashboard" className="flex items-center">
              <span className="text-xl font-bold text-purple-600">Hack-A-Path</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                    isActive ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t">
            <div className="relative">
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="flex items-center w-full px-4 py-3 text-gray-600 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Settings className="w-5 h-5 mr-3" />
                <span>Settings</span>
                <ChevronDown className={`ml-auto w-4 h-4 transition-transform ${isSettingsOpen ? "rotate-180" : ""}`} />
              </button>

              {isSettingsOpen && (
                <div className="mt-2 py-2 bg-gray-50 rounded-md">
                  <Link
                    href="/admin/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/admin/admins"
                    className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    Manage Admins
                  </Link>
                </div>
              )}
            </div>

            <button
              onClick={handleSignOut}
              className="flex items-center w-full px-4 py-3 mt-2 text-gray-600 rounded-md hover:bg-gray-100 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Sign out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

