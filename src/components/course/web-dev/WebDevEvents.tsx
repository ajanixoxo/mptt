"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import Button from "@/components/Button";

const events = [
    {
        tag: "Webinar",
        title: "Intro to Web Dev: Course Overview",
        date: "Feb 15, 2026",
        time: "6:00 PM - 7:30 PM",
        location: "Zoom Online",
        image: "/v2-images/post-1.png"
    },
    {
        tag: "Q&A Session",
        title: "Meet the Mentors: Q&A Session",
        date: "Feb 22, 2026",
        time: "5:00 PM - 6:30 PM",
        location: "Live on YouTube",
        image: "/v2-images/post-2.png"
    },
    {
        tag: "Alumni Panel",
        title: "Alumni Panel: Life After MyPath2Tech",
        date: "Mar 05, 2026",
        time: "4:00 PM - 5:30 PM",
        location: "Zoom Online",
        image: "/v2-images/post-3.png"
    }
];

const WebDevEvents = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[36px] md:text-[54px] font-bold text-[#10141D] tracking-[-2%]">
                        Upcoming <span className="text-[#704FE6]">Events</span>
                    </h2>
                    <p className="text-[#646669] text-base md:text-lg mt-4 font-helvetica">
                        Join us for our upcoming informational sessions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-[16px] border border-[#E5E7EB] overflow-hidden  transition-all group"
                        >
                            <div className="p-8">
                                <span className="inline-block px-3 py-2 rounded-full bg-[#F9C23A] text-[#10141D] text-xs font-medium font-helvetica   tracking-wider mb-4">
                                    {event.tag}
                                </span>
                                <h3 className="text-[#10141D] text-xl font-bold mb-6 group-hover:text-[#704FE6] transition-colors">
                                    {event.title}
                                </h3>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-[#646669] text-[16px] font-helvetica">
                                        <Calendar size={16} className="text-[#99A1AF]" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#646669] text-[16px] font-helvetica">
                                        <Clock size={16} className="text-[#99A1AF]" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#646669] text-[16px] font-helvetica">
                                        <MapPin size={16} className="text-[#99A1AF]" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                <Button
                                    text="Register Now"
                                    className="w-full !bg-[#10141D] hover:!bg-black text-white"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebDevEvents;
