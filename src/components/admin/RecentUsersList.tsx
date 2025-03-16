import { User } from "lucide-react"

export default function RecentUsersList({ users }) {
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="space-y-4">
      {users.length > 0 ? (
        users.map((registration) => (
          <div key={registration.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-purple-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{registration.userName}</p>
              <p className="text-xs text-gray-500 truncate">{registration.userEmail}</p>
              <p className="text-xs text-gray-400 mt-1">
                Registered for: {registration.event?.title || "Unknown event"}
              </p>
            </div>
            <div className="text-xs text-gray-500">{formatDate(registration.createdAt)}</div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center py-4">No registrations found</p>
      )}
    </div>
  )
}

