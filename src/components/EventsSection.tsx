"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, CircleArrowUp, Loader2, RefreshCw } from "lucide-react"
import FloatingShape from "./FloatingShape"

interface Event {
  id: string
  title: string
  eventDate: string
  location: string
  description: string
  isOnline: boolean
  status: string
  thirdPartyLink?: string | null
  imageUrl: string
}

const EventsSection = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    additionalInfo: "",
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [fetchError, setFetchError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [redirectCountdown, setRedirectCountdown] = useState(3)

  const truncateTitle = (title: string, wordLimit: number) => {
    const words = title.split(" ")
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : title
  }

  const fetchEvents = useCallback(async () => {
    setLoading(true)
    setFetchError(false)

    try {
      const response = await fetch("/api/events/")

      if (!response.ok) {
        throw new Error("Failed to fetch events")
      }

      const data: Event[] = await response.json()
      const activeEvents = data.filter((event) => event.status === "active")
      console.log("Event Data ", data)

      if (activeEvents.length === 0) {
        console.log("No active events found")
        setEvents([])
      } else {
        setEvents(activeEvents)
      }
    } catch (error) {
      console.error("Error fetching events:", error)
      setFetchError(true)
      setEvents([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchEvents()

    // Set up polling interval (every 5 minutes instead of 5 seconds to reduce server load)
    const interval = setInterval(fetchEvents, 300000)

    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [fetchEvents])

  // Handle redirect countdown
  useEffect(() => {
    if (success && redirectCountdown > 0) {
      const timer = setTimeout(() => {
        setRedirectCountdown(redirectCountdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [success, redirectCountdown])

  const handleRegister = async () => {
    if (!selectedEvent) return

    // Basic validation
    if (!formData.userName.trim()) {
      setError("Please enter your name")
      return
    }

    if (!formData.userEmail.trim()) {
      setError("Please enter your email")
      return
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.userEmail)) {
      setError("Please enter a valid email address")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: selectedEvent.id,
          userName: formData.userName,
          userEmail: formData.userEmail,
          userPhone: formData.userPhone,
          additionalInfo: formData.additionalInfo,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Registration failed")
      }

      setSuccess(true)

      // If there's a redirect URL, redirect the user after countdown
      if (data.redirectUrl) {
        setTimeout(() => {
          window.location.href = data.redirectUrl
        }, 3000)
      } else {
        // If no redirect URL, just close the modal after 3 seconds
        setTimeout(() => {
          setSelectedEvent(null)
          setSuccess(false)
          setFormData({
            userName: "",
            userEmail: "",
            userPhone: "",
            additionalInfo: "",
          })
        }, 3000)
      }
    } catch (error) {
      console.error("Error registering for event:", error)
      setError(error instanceof Error ? error.message : "Failed to register. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative">
      <section id="events">
        <div className="absolute flex flex-row-reverse justify-between w-full -mt-10 lg:mt-10 right-0">
          <img src="/s_half.png" alt="" className="w-5 rotate-10 md:w-15" />

          <div className=" left-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5,
              }}
              className="absolute top-[0%] left-[5%] text-[#1D1FB175]"
            >
              <img src="/s-star.png" alt="" className="w-7 md:w-12" />
            </motion.div>
            <FloatingShape
              color="from-[#1F22CA] to-transparent"
              size="w-60 h-60 "
              top=""
              position="absolute left-[-20%] lg:left-0 lg:-top-[30%]"
              left=""
              delay={0}
            />
          </div>
        </div>
        <div className="container mx-auto max-w-7xl">
          <motion.div className="text-center mb-12 mt-2">
            <h2 className="main_text text-3xl font-bold">Upcoming Events</h2>
            <p className="sec_text text-[#a09c9c] max-w-2xl mx-auto px-2">
              Join us at these awesome events to learn, meet our team, and connect!
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 size={40} className="animate-spin text-[#989BAE]" />
            </div>
          ) : fetchError ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <p className="text-[#a09c9c] text-center">Unable to load events. Please try again.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={fetchEvents}
                className="flex items-center space-x-2 bg-[#74767F] text-white px-6 py-3 rounded-2xl"
              >
                <RefreshCw size={20} />
                <span>Retry</span>
              </motion.button>
            </div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#232224B2] backdrop-blur-sm rounded-xl overflow-hidden relative"
                >
                  <div className="p-6 space-y-2">
                    <div>
                      <img
                        src={event.imageUrl || "/placeholder-event.jpg"}
                        alt={event.title}
                        className="rounded-sm w-full h-48 object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder-event.jpg"
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-bold text-white w-max">{truncateTitle(event.title, 5)}</h3>
                      <span
                        className={`text-xs px-3 py-1 rounded-full bg-[#2B2B2B] w-max ${
                          event.isOnline ? " text-[#1E6EBC]" : " text-[#167B96]"
                        }`}
                      >
                        {event.isOnline ? "Online" : "In-person"}
                      </span>
                    </div>

                    <div className="text-gray-400 mb-2">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{new Date(event.eventDate).toDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        <span>{new Date(event.eventDate).toLocaleTimeString(undefined, { timeStyle: "short" })}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{truncateTitle(event.location, 5)}</span>
                      </div>
                    </div>

                    <p className="text-[#a09c9c] p-1 h-14">{truncateTitle(event.description, 10)}</p>

                    <a
                      href={event.thirdPartyLink ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!event.thirdPartyLink) {
                          e.preventDefault()
                          setSelectedEvent(event)
                        }
                      }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-[#74767F] text-white border transition border-gray-700 px-6 py-3 rounded-2xl font-medium flex items-center cursor-pointer justify-center space-x-2"
                      >
                        <span>Register Now</span>
                        <CircleArrowUp className="rotate-45 cursor-pointer" size={20} />
                      </motion.button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <p className="text-[#a09c9c] text-center">No active events available at the moment.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={fetchEvents}
                className="flex items-center space-x-2 bg-[#74767F] text-white px-6 py-3 rounded-2xl"
              >
                <RefreshCw size={20} />
                <span>Check Again</span>
              </motion.button>
            </div>
          )}

          {/* Registration Form */}
          {selectedEvent && (
            <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-[#2B2B2B]/90 p-6 rounded-lg w-96 text-white shadow-lg">
                {success ? (
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
                      <p className="text-[#a09c9c] mb-4">Thank you for registering for {selectedEvent.title}.</p>

                      {selectedEvent.thirdPartyLink ? (
                        <>
                          <p className="text-[#a09c9c] mb-4">
                            You will be redirected to complete your registration in {redirectCountdown} seconds...
                          </p>
                          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-400 mx-auto"></div>
                        </>
                      ) : (
                        <p className="text-gray-300">This window will close in {redirectCountdown} seconds...</p>
                      )}
                    </motion.div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center">
                      Register for <br /> {selectedEvent.title}
                    </h3>

                    {error && (
                      <div className="bg-red-500/20 border border-red-400/30 text-red-300 px-3 py-2 rounded mb-4 text-sm">
                        {error}
                      </div>
                    )}

                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={formData.userName}
                      onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                      className="bg-[#3B3B3B] text-white border border-gray-600 p-2 w-full mt-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                      required
                    />

                    <input
                      type="email"
                      placeholder="Your Email *"
                      value={formData.userEmail}
                      onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
                      className="bg-[#3B3B3B] text-white border border-gray-600 p-2 w-full mt-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                      required
                    />

                    <input
                      type="text"
                      placeholder="Phone (optional)"
                      value={formData.userPhone}
                      onChange={(e) => setFormData({ ...formData, userPhone: e.target.value })}
                      className="bg-[#3B3B3B] text-white border border-gray-600 p-2 w-full mt-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />

                    <textarea
                      placeholder="Additional Info (optional)"
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="bg-[#3B3B3B] text-white border border-gray-600 p-2 w-full mt-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />

                    <div className="flex justify-between mt-4">
                      <button
                        onClick={handleRegister}
                        disabled={loading}
                        className="bg-[#989BAE] text-white px-4 py-2 rounded w-1/2 hover:bg-gray-500 disabled:opacity-50 flex items-center justify-center"
                      >
                        {loading ? (
                          <>
                            <Loader2 size={16} className="animate-spin mr-2" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          "Submit"
                        )}
                      </button>
                      <button
                        onClick={() => setSelectedEvent(null)}
                        className="text-red-400 w-1/2 ml-4 hover:text-red-600"
                        disabled={loading}
                      >
                        Cancel
                      </button>
                    </div>

                    {selectedEvent.thirdPartyLink && (
                      <p className="text-xs text-gray-400 mt-4 text-center">
                        After registration, you'll be redirected to complete the process on the event platform.
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default EventsSection

