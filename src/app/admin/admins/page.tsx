"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import { PlusCircle, Search, UserPlus, Trash, Mail, Shield, Calendar, User } from "lucide-react"
import AdminSidebar from "@/components/admin/AdminSidebar"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export default function AdminsPage() {
  const router = useRouter()
  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddModal, setShowAddModal] = useState(false)
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    role: "admin", // Default role
  })
  const [currentUser, setCurrentUser] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!session) {
        router.push("/admin/login")
        return
      }

      // Check if user is an admin
      const { data: adminData } = await supabase.from("admins").select("*").eq("user_id", session.user.id).single()

      if (!adminData) {
        router.push("/admin/login")
        return
      }

      // Check if super admin
      if (adminData.role !== "super_admin") {
        router.push("/admin/dashboard")
        return
      }

      setCurrentUser(adminData)
      fetchAdmins()
    } catch (error) {
      console.error("Auth error:", error)
      router.push("/admin/login")
    }
  }

  const fetchAdmins = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.from("admins").select("*").order("created_at", { ascending: false })

      if (error) throw error

      setAdmins(data || [])
    } catch (error) {
      console.error("Error fetching admins:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Client-side filtering
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewAdmin({
      ...newAdmin,
      [name]: value,
    })
  }

  const generateRandomPassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    let password = ""
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
  }

  const handleAddAdmin = async (e) => {
    e.preventDefault()
    setError("")

    if (!newAdmin.name || !newAdmin.email) {
      setError("Name and email are required")
      return
    }

    try {
      // Generate a random password
      const password = generateRandomPassword()

      // Create user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: newAdmin.email,
        password: password,
        email_confirm: true,
      })

      if (authError) throw authError

      // Add admin to admins table
      const { error: adminError } = await supabase.from("admins").insert([
        {
          user_id: authData.user.id,
          name: newAdmin.name,
          email: newAdmin.email,
          role: newAdmin.role,
          created_at: new Date().toISOString(),
        },
      ])

      if (adminError) throw adminError

      // TODO: Send email with credentials
      // This would typically be done via a server function
      console.log(`New admin created with password: ${password}`)

      // Reset form and close modal
      setNewAdmin({
        name: "",
        email: "",
        role: "admin",
      })
      setShowAddModal(false)

      // Refresh admin list
      fetchAdmins()
    } catch (error) {
      console.error("Error creating admin:", error)
      setError(error.message || "Failed to create admin")
    }
  }

  const handleDeleteAdmin = async (adminId, userId) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      try {
        // Delete from admins table
        const { error: adminError } = await supabase.from("admins").delete().eq("id", adminId)

        if (adminError) throw adminError

        // Delete user from auth
        const { error: authError } = await supabase.auth.admin.deleteUser(userId)

        if (authError) throw authError

        // Refresh admin list
        fetchAdmins()
      } catch (error) {
        console.error("Error deleting admin:", error)
        alert("Failed to delete admin")
      }
    }
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manage Admins</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            <UserPlus size={18} />
            <span>Add Admin</span>
          </button>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search admins..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* Admins List */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : filteredAdmins.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Admin
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAdmins.map((admin) => (
                  <tr key={admin.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                          <div className="text-sm text-gray-500">{admin.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          admin.role === "super_admin" ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {admin.role === "super_admin" ? "Super Admin" : "Admin"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        {formatDate(admin.created_at)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => {
                            /* TODO: Implement send credentials */
                          }}
                        >
                          <Mail size={18} />
                        </button>
                        {currentUser?.id !== admin.id && (
                          <button
                            className="text-red-600 hover:text-red-900"
                            onClick={() => handleDeleteAdmin(admin.id, admin.user_id)}
                          >
                            <Trash size={18} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-500 mb-4">No admins found</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
            >
              <PlusCircle size={18} />
              <span>Add your first admin</span>
            </button>
          </div>
        )}
      </div>

      {/* Add Admin Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Admin</h2>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4">{error}</div>
            )}

            <form onSubmit={handleAddAdmin}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newAdmin.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter admin name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newAdmin.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter admin email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <select
                    name="role"
                    value={newAdmin.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="admin">Admin</option>
                    <option value="super_admin">Super Admin</option>
                  </select>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-md text-sm">
                  <div className="flex items-center mb-1">
                    <Shield size={16} className="mr-2" />
                    <span className="font-medium">Important Note</span>
                  </div>
                  <p>A random secure password will be generated. You'll need to share it with the admin.</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                  Add Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

