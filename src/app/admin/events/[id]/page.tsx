// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { createClient } from "@supabase/supabase-js"
// import { Calendar, MapPin, Users, ArrowLeft, Edit, Trash, Download, Mail, Globe } from "lucide-react"
// import AdminSidebar from "@/components/admin/AdminSidebar"

// // Initialize Supabase client
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
// const supabase = createClient(supabaseUrl, supabaseKey)

// export default function EventDetailsPage({ params }) {
//   const router = useRouter()
//   const { id } = params
//   const [event, setEvent] = useState(null)
//   const [registrations, setRegistrations] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     if (id) {
//       fetchEventDetails()
//     }
//   }, [id])

//   const fetchEventDetails = async () => {
//     setLoading(true)
//     try {
//       // Fetch event details
//       const { data: eventData, error: eventError } = await supabase.from("events").select("*").eq("id", id).single()

//       if (eventError) throw eventError

//       // Fetch registrations for this event
//       const { data: registrationsData, error: registrationsError } = await supabase
//         .from("registrations")
//         .select("*")
//         .eq("event_id", id)
//         .order("created_at", { ascending: false })

//       if (registrationsError) throw registrationsError

//       setEvent(eventData)
//       setRegistrations(registrationsData)
//     } catch (error) {
//       console.error("Error fetching event details:", error)
//       alert("Failed to load event details")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleDelete = async () => {
//     if (window.confirm("Are you sure you want to delete this event? This will also delete all registrations.")) {
//       try {
//         // First delete all registrations for this event
//         await supabase.from("registrations").delete().eq("event_id", id)

//         // Then delete the event
//         const { error } = await supabase.from("events").delete().eq("id", id)

//         if (error) throw error

//         router.push("/admin/events")
//       } catch (error) {
//         console.error("Error deleting event:", error)
//         alert("Failed to delete event")
//       }
//     }
//   }

//   const exportRegistrations = () => {
//     if (registrations.length === 0) {
//       alert("No registrations to export")
//       return
//     }

//     // Create CSV content
//     const headers = Object.keys(registrations[0]).join(",")
//     const rows = registrations.map((reg) => Object.values(reg).join(","))
//     const csvContent = [headers, ...rows].join("\n")

//     // Create download link
//     const blob = new Blob([csvContent], { type: "text/csv" })
//     const url = URL.createObjectURL(blob)
//     const link = document.createElement("a")
//     link.href = url
//     link.download = `registrations-${event.title.replace(/\s+/g, "-")}.csv`
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   // Format date
//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A"
//     const date = new Date(dateString)
//     return new Intl.DateTimeFormat("en-US", {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     }).format(date)
//   }

//   if (loading) {
//     return (
//       <div className="flex min-h-screen bg-gray-100">
//         <AdminSidebar />
//         <div className="flex-1 p-8 flex items-center justify-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//         </div>
//       </div>
//     )
//   }

//   if (!event) {
//     return (
//       <div className="flex min-h-screen bg-gray-100">
//         <AdminSidebar />
//         <div className="flex-1 p-8">
//           <div className="bg-white rounded-lg shadow p-12 text-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h2>
//             <p className="text-gray-500 mb-6">The event you're looking for doesn't exist or has been deleted.</p>
//             <button
//               onClick={() => router.push("/admin/events")}
//               className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
//             >
//               <ArrowLeft size={18} />
//               <span>Back to Events</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <AdminSidebar />

//       <div className="flex-1 p-8">
//         <div className="mb-8">
//           <button
//             onClick={() => router.push("/admin/events")}
//             className="flex items-center text-gray-600 hover:text-gray-900"
//           >
//             <ArrowLeft size={18} className="mr-2" />
//             <span>Back to Events</span>
//           </button>
//         </div>

//         {/* Event Details */}
//         <div className="bg-white rounded-lg shadow mb-8">
//           <div className="p-6">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-800">{event.title}</h1>
//                 <div className="flex items-center mt-2">
//                   <span
//                     className={`text-sm px-3 py-1 rounded-full ${
//                       event.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
//                     }`}
//                   >
//                     {event.status === "active" ? "Active" : "Closed"}
//                   </span>
//                 </div>
//               </div>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => router.push(`/admin/events/edit/${event.id}`)}
//                   className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
//                 >
//                   <Edit size={16} />
//                   <span>Edit</span>
//                 </button>
//                 <button
//                   onClick={handleDelete}
//                   className="flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 rounded-md hover:bg-red-100"
//                 >
//                   <Trash size={16} />
//                   <span>Delete</span>
//                 </button>
//               </div>
//             </div>

//             <div className="mt-6">
//               <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
//             </div>

//             <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex items-center text-gray-600">
//                 <Calendar size={18} className="mr-3" />
//                 <span>{formatDate(event.event_date)}</span>
//               </div>

//               {event.is_online ? (
//                 <div className="flex items-center text-gray-600">
//                   <Globe size={18} className="mr-3" />
//                   <span>Online Event</span>
//                 </div>
//               ) : (
//                 <div className="flex items-center text-gray-600">
//                   <MapPin size={18} className="mr-3" />
//                   <span>{event.location || "No location specified"}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Registrations */}
//         <div className="bg-white rounded-lg shadow">
//           <div className="p-6 border-b">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold text-gray-800">Registrations ({registrations.length})</h2>

//               <div className="flex gap-2">
//                 <button
//                   onClick={exportRegistrations}
//                   disabled={registrations.length === 0}
//                   className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-md hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <Download size={16} />
//                   <span>Export CSV</span>
//                 </button>
//                 <button
//                   disabled={registrations.length === 0}
//                   className="flex items-center gap-1 px-3 py-1 bg-purple-50 text-purple-600 rounded-md hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <Mail size={16} />
//                   <span>Email All</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {registrations.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Email
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Phone
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Registered On
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {registrations.map((registration) => (
//                     <tr key={registration.id}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-gray-900">{registration.user_name}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-500">{registration.user_email}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-500">{registration.user_phone || "N/A"}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {new Date(registration.created_at).toLocaleDateString()}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div className="p-12 text-center">
//               <div className="flex justify-center mb-4">
//                 <Users size={48} className="text-gray-300" />
//               </div>
//               <h3 className="text-lg font-medium text-gray-800 mb-2">No Registrations Yet</h3>
//               <p className="text-gray-500">When users register for this event, they will appear here.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

