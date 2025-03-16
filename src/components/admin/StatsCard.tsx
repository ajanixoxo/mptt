import type React from "react"

interface StatsCardProps {
  title: string
  value: number
  icon: React.ReactNode
  bgColor?: string
}

export default function StatsCard({ title, value, icon, bgColor = "bg-blue-50" }: StatsCardProps) {
  return (
    <div className={`${bgColor} rounded-lg p-6 shadow-sm`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
        <div className="rounded-full p-3">{icon}</div>
      </div>
    </div>
  )
}

