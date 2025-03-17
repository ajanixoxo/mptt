"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, CircleArrowUp } from "lucide-react";
import FloatingShape from "@/components/FloatingShape";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: "Virtual" | "In-Person" | "Hybrid";
}

const UpcomingEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/admin/events");
        if (!response.ok) throw new Error("Failed to fetch events");
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p className="text-center text-white">Loading events...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <section className="py-20 px-4 relative">
      <FloatingShape
        size="w-96 h-96"
        color="bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        position="absolute"
        delay={0.3}
        top=""
        left=""
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-20"
      >
        <motion.img
          src="/s-star.png"
          alt="Shining star"
          className="w-8 h-8"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>

      <div className="absolute right-0 bottom-20">
        <img src="/s_half.png" className="w-7 md:w-12" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Upcoming Events</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join us at these awesome events to learn more, meet our team, and connect with other tech enthusiasts!
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
                      event.type === "Virtual"
                        ? "bg-blue-500/20 text-blue-300"
                        : event.type === "In-Person"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-purple-500/20 text-purple-300"
                    }`}
                  >
                    {event.type}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock size={16} className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{event.description}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#989BAE] text-white border border-gray-700 px-6 py-3 rounded-full font-medium flex items-center justify-center space-x-2"
                >
                  <span>Register Now</span>
                  <CircleArrowUp className="rotate-45" size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2B2B2B] text-white border border-gray-700 px-8 py-3 rounded-full font-medium inline-flex items-center space-x-2"
          >
            <span>View All Events</span>
            <CircleArrowUp className="rotate-45" size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
