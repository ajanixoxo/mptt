"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, CircleArrowUp, Check } from "lucide-react"
import FloatingShape from "@/components/FloatingShape"


const workshops = [
    {
        title: "Resume Building Workshop",
        date: "September 15, 2025",
        time: "4:00 PM - 5:30 PM",
        location: "Virtual",
        description: "Learn how to craft a tech resume that stands out to recruiters and hiring managers.",
        benefits: [
            "Understand what tech recruiters look for in resumes",
            "Create an ATS-friendly resume that gets past filters",
            "Highlight your projects and skills effectively",
            "Receive personalized feedback on your resume",
        ],
    },
    {
        title: "LinkedIn Profile Optimization",
        date: "September 22, 2025",
        time: "Various time slots",
        location: "Virtual",
        description: "Optimize your LinkedIn profile to attract recruiters and showcase your skills effectively.",
        benefits: [
            "Create a compelling headline and summary",
            "Showcase projects and skills that get noticed",
            "Build a network that opens doors",
            "Use LinkedIn's algorithm to your advantage",
        ],
    },
    {
        title: "Technical Interview Prep",
        date: "October 6, 2025",
        time: "5:00 PM - 9:00 PM PST",
        location: "In-person & Virtual",
        description: "Practice common technical interview questions and learn effective problem-solving strategies.",
        benefits: [
            "Master common algorithm challenges",
            "Learn how to communicate your thought process",
            "Practice whiteboarding techniques",
            "Understand what interviewers are really looking for",
        ],
    },
    {
        title: "Mock Interviews",
        date: "October 20, 2025",
        time: "4:00 PM - 5:30 PM",
        location: "Virtual",
        description: "Get real interview experience with feedback from industry professionals.",
        benefits: [
            "Practice with experienced tech professionals",
            "Receive immediate constructive feedback",
            "Build confidence through repetition",
            "Adapt to different interview styles",
        ],
    },
    {
        title: "Tech Industry Panel",
        date: "November 3, 2025",
        time: "5:00 PM - 7:00 PM PST",
        location: "In-person & Virtual",
        description: "Hear from professionals working in various tech roles about their career journeys.",
        benefits: [
            "Learn from diverse career paths in tech",
            "Ask questions directly to industry leaders",
            "Understand different company cultures",
            "Discover emerging trends and opportunities",
        ],
    },
    {
        title: "Portfolio Review Session",
        date: "November 17, 2025",
        time: "Various time slots",
        location: "Virtual",
        description: "Receive personalized feedback on your projects and portfolio from industry experts.",
        benefits: [
            "Get actionable feedback on your work",
            "Learn how to present projects effectively",
            "Understand what employers look for",
            "Identify areas for improvement",
        ],
    },
]

const CareerWorkshops = () => {
    return (
        <section className="py-20 px-4 relative bg-gradient-to-b from-[#0F0F1A] to-[#0A0A0B]">
            {/* Floating shape */}
            <FloatingShape
                size="w-96 h-96"
                color="bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                // className="top-20 right-20"
                position="absolute"
                top=""
                left=""
                delay={0.3}
            />

            {/* Stars */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-40 left-20"
            >
                <motion.img
                    src="/s-star.png"
                    alt="Shining star"
                    className="w-8 h-8"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
            </motion.div>

            {/* Half star */}
            <div className="absolute left-0 top-40">
                <img src="/s_half.png" className="w-7 md:w-12 rotate-180" />
            </div>

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Career Development Workshops</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Develop the professional skills you need to stand out in the tech job market
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workshops.map((workshop, index) => (
                        <motion.div
                            key={workshop.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#2B2B2B]/80 backdrop-blur-sm rounded-xl overflow-hidden"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{workshop.title}</h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-gray-400">
                                        <Calendar size={16} className="mr-2" />
                                        <span>{workshop.date}</span>
                                    </div>
                                    <div className="flex items-center text-gray-400">
                                        <Clock size={16} className="mr-2" />
                                        <span>{workshop.time}</span>
                                    </div>
                                    <div className="flex items-center text-gray-400">
                                        <MapPin size={16} className="mr-2" />
                                        <span>{workshop.location}</span>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-4">{workshop.description}</p>

                                <div className="mb-6">
                                    <h4 className="text-white font-semibold mb-2">What You'll Gain:</h4>
                                    <div className="space-y-2">
                                        {workshop.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-start">
                                                <div className="mt-1 mr-2 text-[#def134]">
                                                    <Check size={16} />
                                                </div>
                                                <p className="text-gray-300 text-sm">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-[#989BAE] text-white  px-6 py-3 rounded-2xl font-medium flex items-center justify-center space-x-2"
                                >
                                    <span>Register Interest</span>
                                    <CircleArrowUp className="rotate-45" size={20} />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CareerWorkshops

