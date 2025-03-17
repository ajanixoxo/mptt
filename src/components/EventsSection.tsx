"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, CircleArrowUp } from "lucide-react";

interface Event {
  id: string;
  title: string;
  eventDate: string;
  location: string;
  description: string;
  isOnline: boolean;
  status: string;
}

const EventsSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    additionalInfo: "",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/admin/events");
        const data: Event[] = await response.json();
        setEvents(data.filter((event) => event.status === "active")); // Only show active events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const handleRegister = async () => {
    if (!selectedEvent) return;
    try {
      await fetch("/api/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: selectedEvent.id,
          ...formData,
        }),
      });
      alert("Registration successful!");
      setSelectedEvent(null);
    } catch (error) {
      console.error("Error registering for event:", error);
    }
  };

  return (
    <div className="relative">
      <section id="events">
        <div className="container mx-auto max-w-7xl">
          <motion.div className="text-center mb-12">
            <h2 className="main_text text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="sec_text text-[#a09c9c] max-w-2xl mx-auto">
              Join us at these awesome events to learn, meet our team, and connect!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#2B2B2B]/80 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        event.isOnline
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-green-500/20 text-green-300"
                      }`}
                    >
                      {event.isOnline ? "Online" : "In-person"}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4 text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(event.eventDate).toDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{new Date(event.eventDate).toLocaleTimeString()}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{event.description}</p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-[#989BAE] text-white border border-gray-700 px-6 py-3 rounded-full font-medium flex items-center justify-center space-x-2"
                  >
                    <span>Register Now</span>
                    <CircleArrowUp className="rotate-45" size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedEvent && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg w-96">
                <h3 className="text-xl font-bold mb-4">
                  Register for {selectedEvent.title}
                </h3>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.userName}
                  onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                  className="border p-2 w-full mt-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.userEmail}
                  onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
                  className="border p-2 w-full mt-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Phone (optional)"
                  value={formData.userPhone}
                  onChange={(e) => setFormData({ ...formData, userPhone: e.target.value })}
                  className="border p-2 w-full mt-2 rounded"
                />
                <textarea
                  placeholder="Additional Info (optional)"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="border p-2 w-full mt-2 rounded"
                />
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handleRegister}
                    className="bg-blue-500 text-white px-4 py-2 rounded w-1/2"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-red-500 ml-4 w-1/2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsSection;
