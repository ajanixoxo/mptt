"use client"
import Button from "../../components/Button"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import VideoBG from '/videobgs.mp4'

const events = [
    {
        title: "Hack-A-Path Info Session",
        date: "March 15, 2025",
        time: "6:00PM - 7:30PM",
        location: "Virtual Event",
        description:
            "Learn about our upcoming cohorts, mentorship opportunities, and how to get involved with our community.",
        tag: "INFO",
    },
    {
        title: "Code Jam Weekend",
        date: "March 20-22, 2025",
        time: "9:00AM - 5:00PM",
        location: "Tech Hub Downtown",
        description:
            "A weekend-long coding event where teams collaborate to build innovative solutions to real-world problems.",
        tag: "CODING",
    },
    {
        title: "Tech Career Panel",
        date: "April 5, 2025",
        time: "5:30PM - 7:00PM",
        location: "MagentaTech HQ",
        description:
            "Hear from industry professionals about their career journeys and get advice for your own path in tech.",
        tag: "CAREER",
    },
    {
        title: "Tech Career Panel",
        date: "April 12, 2025",
        time: "5:30PM - 7:00PM",
        location: "MagentaTech HQ",
        description: "Connect with hiring managers and recruiters from top tech companies looking for fresh talent.",
        tag: "CAREER",
    },
    {
        title: "Game Dev Workshop",
        date: "April 18, 2025",
        time: "1:00PM - 4:00PM",
        location: "Virtual Event",
        description: "Learn the basics of game development and create your first mini-game in this hands-on workshop.",
        tag: "CODING",
    },
    {
        title: "Hack-A-Path Demo Day",
        date: "April 30, 2025",
        time: "3:00PM - 6:00PM",
        location: "Innovation Center",
        description:
            "Celebrate as our current cohort showcases the projects they've built during their Hack-A-Path journey.",
        tag: "SHOWCASE",
    },
]

const EventsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, threshold: 0.1 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    }

    const decorationVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    }

    const getTagColor = (tag: string) => {
        switch (tag) {
            case "INFO":
                return "bg-blue-100 text-blue-800"
            case "CODING":
                return "bg-green-100 text-green-800"
            case "CAREER":
                return "bg-purple-100 text-purple-800"
            case "SHOWCASE":
                return "bg-pink-100 text-pink-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="relative">
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    className="absolute inset-0 min-w-full min-h-full object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                   
                >
                    <source src={VideoBG} type="video/mp4" />
                    {/* Fallback message for browsers that don't support video */}
                    Your browser does not support the video tag.
                </video></div>
                <section
                    id="events"
                    ref={ref}


                >


                    {/* Decorative Elements */}
                    <motion.div
                        className="absolute top-20 left-10 w-8 h-8 bg-purple-500 rounded-sm rotate-45"
                        variants={decorationVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={1}
                    />

                    <motion.div
                        className="absolute bottom-20 right-10 text-yellow-400 text-2xl"
                        variants={decorationVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={2}
                    >
                        *
                    </motion.div>

                    <div className="container mx-auto max-w-7xl">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="text-center mb-12"
                        >
                            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center" variants={itemVariants}>
                                <span className="text-yellow-400 mr-2">✦</span>
                                Upcoming Events
                            </motion.h2>
                            <motion.p className="text-gray-700 max-w-2xl mx-auto" variants={itemVariants}>
                                Join us at these upcoming events to build skills, meet other tech enthusiasts, and expand your network.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {events.map((event, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white border-2 border-black rounded-xl py-5 px-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden transform hover:-rotate-1"
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -5,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    <div className={`absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded ${getTagColor(event.tag)}`}>
                                        {event.tag}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                    <div className="flex items-center text-gray-600 mb-1">
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <span className="text-sm">{event.date}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 mb-1">
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="text-sm">{event.time}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 mb-4">
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <span className="text-sm">{event.location}</span>
                                    </div>
                                    <p className="text-gray-700 mb-4 text-sm">{event.description}</p>
                                    <Button text="Register Now" bg="bg-[#DED6E8]" />
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="mt-12 text-center"
                            variants={itemVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <motion.button
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-medium inline-flex items-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>View All Events</span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
                </div>
            )
}

            export default EventsSection

