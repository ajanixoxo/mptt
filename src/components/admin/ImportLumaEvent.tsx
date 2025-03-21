"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LinkIcon, Loader2, ExternalLink, Check } from "lucide-react"

export default function ImportLumaEvent() {
  const router = useRouter()
  const [lumaUrl, setLumaUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [importedEventId, setImportedEventId] = useState<string | null>(null)

  const handleImport = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!lumaUrl.trim()) {
      setError("Please enter a Luma URL")
      return
    }

    if (!lumaUrl.includes("lu.ma/")) {
      setError("Please enter a valid Luma event URL")
      return
    }

    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const response = await fetch("/api/admin/events/import-luma", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lumaUrl }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to import event")
      }

      setSuccess(true)
      setImportedEventId(data.event.id)

      // Clear the input
      setLumaUrl("")

      // Refresh the events list
      router.refresh()
    } catch (error) {
      console.error("Error importing event:", error)
      setError(error instanceof Error ? error.message : "Failed to import event")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#2B2B2B] rounded-lg shadow-md p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Import Event from Luma</h2>

      {error && (
        <div className="bg-red-500/20 border border-red-400/30 text-red-300 px-4 py-3 rounded-md mb-4">{error}</div>
      )}

      {success && (
        <div className="bg-green-500/20 border border-green-400/30 text-green-300 px-4 py-3 rounded-md mb-4 flex items-center">
          <Check size={18} className="mr-2" />
          Event imported successfully!
          {importedEventId && (
            <button
              onClick={() => router.push(`/admin/events/${importedEventId}`)}
              className="ml-2 underline text-green-200 hover:text-green-100"
            >
              View event
            </button>
          )}
        </div>
      )}

      <form onSubmit={handleImport} className="space-y-4">
        <div>
          <label htmlFor="lumaUrl" className="block text-sm font-medium text-gray-300 mb-1">
            Luma Event URL
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LinkIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="lumaUrl"
              type="url"
              value={lumaUrl}
              onChange={(e) => setLumaUrl(e.target.value)}
              placeholder="https://lu.ma/your-event"
              className="w-full pl-10 px-4 py-2 bg-[#3B3B3B] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">
            Paste the URL of your Luma event to import all details automatically
          </p>
        </div>

        <div className="flex justify-between items-center">
          <a
            href="https://lu.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-300 flex items-center"
          >
            Create on Luma <ExternalLink size={14} className="ml-1" />
          </a>

          <button
            type="submit"
            disabled={loading || !lumaUrl.trim()}
            className="px-4 py-2 bg-[#989BAE] text-white rounded-md hover:bg-gray-500 disabled:opacity-50 flex items-center"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin mr-2" />
                <span>Importing...</span>
              </>
            ) : (
              "Import Event"
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

