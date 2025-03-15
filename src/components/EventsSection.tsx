"use client"
import Button from "@/components/Button"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
// import VideoBG from '/vids.mp4'
// import Star from "../../components/Star"
import FloatingShape from "@/components/FloatingShape"
import { CircleArrowUp } from "lucide-react"
const events = [
    {
        title: "Hack-A-Path Info Session",
        date: "July 15, 2025",
        time: "4:00PM - 6:30PM",
        location: "Online (Zoom) ",
        description:
            "Learn all about our program and how you can join the next cohort. Meet the team and get your questions answered!",
        tag: "Virtual",
    },
    {
        title: "Code Jam Weekend",
        date: "July 10-12, 2025",
        time: "9:00AM - 6:00PM",
        location: "Tech Hub 123 Innovation St",
        description:
            "A weekend of coding, fun, and prizes! Build something cool with your squad and showcase your skills.",
        tag: "In-Person",
    },
    {
        title: "Tech Career Panel",
        date: "July 25, 2025",
        time: "5:PM - 7:00PM",
        location: "Community Center 456 Future Ave",
        description:
            "Hear from young professionals who've launched successful tech careers. Get inspired by their journeys!",
        tag: "Hybrid",
    },
    {
        title: "Tech Career Panel",
        date: "July 25, 2025",
        time: "5:PM - 7:00PM",
        location: "Community Center 456 Future Ave",
        description:
            "Hear from young professionals who've launched successful tech careers. Get inspired by their journeys!",
        tag: "Hybrid",
    },
    {
        title: "Game Dev Workshop",
        date: "August 5, 2025",
        time: "1:00PM - 4:00PM",
        location: "Online (Discord)",
        description: "Learn the basics of game development and create your first mini-game in this hands-on workshop.",
        tag: "Hybrid",
    },

    {
        title: "Hack-A-Path Demo Day",
        date: "August 20, 2025",
        time: "3:00PM - 7:00PM",
        location: "Innovation Center 789 Tech Blvd",
        description:
            "Our current cohort showcases their final projects! Come see what you could build in just 3 months..",
        tag: "In-Person",
    },
]

const EventsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

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

            <section
                id="events"
                ref={ref}
            >
                <div className="absolute flex justify-between w-full -mt-10  right-0">

                    <div
                        className=" -ml-10 text-purple-400">
                        <FloatingShape color='from-[#1F22CA] to-transparent' size='lg:w-60 w-32 h-32 lg:h-60' position="" top='35%' left='18%' delay={0} />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}

                        >

                            <img src="/s-star.png"  className="w-7 md:w-12 ml-40 -mt-32" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                        className=" bottom-40 left-20 mt-20 text-blue-400"
                    >
                        <img src='/s_half.png' className="w-7 md:w-12" />
                    </motion.div>




                </div>
                <div
                        className="absolute right-0 bottom-0 -ml-10 text-purple-400">
                        <FloatingShape color='from-[#1F22CA] to-transparent' size='w-60 h-60' position="" top='35%' left='18%' delay={0} />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}

                        >

                            <img src="/s-star.png" className="w-7 md:w-12 ml-40 -mt-32" />
                        </motion.div>
                    </div>

                {/* Decorative Elements */}


                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="text-center flex justify-center items-center mb-12 relative z-20 top-5"
                    >
                        <div className="text-center mb-12 relative z-20 top-5">
                            <motion.h2 className=" main_text text-3xl md:text-4xl font-bold mb-4 inline-flex items-center" variants={itemVariants}>

                                Upcoming Events
                            </motion.h2>
                            <motion.p className="sec_text  text-[#a09c9c] max-w-2xl mx-auto" variants={itemVariants}>
                                Join us at these awesome events to learn more,meet our  <br />team, and connect with other tech enthusiasts!
                            </motion.p></div>


                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-0"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#1b1a1c] border-2 border-black rounded-xl py-5 px-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden transform hover:-rotate-1"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <div className={`absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded ${getTagColor(event.tag)}`}>
                                    {event.tag}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                                <div className="flex items-center text-[#979292]  mb-2">
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
                                <div className="absolute bg-white w-full h-[2px]  left-0 ext-[#979292]"></div>
                                <p className="text-[#979292] sec_text mb-4 text-sm mt-5">{event.description}</p>   <div className="flex items-center text-gray-600 mb-1">
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
                                    <span className="text-sm sec_text text-[#979292]">{event.time}</span>
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
                                    <span className="text-sm  sec_text text-[#979292]">{event.location}</span>
                                </div>
                                <Button text="Register Now" bg="bg-[#989BAE]" />
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
                            className="bg-[#2B2B2B]  hover:bg-gray-300 text-white px-6 mb-2 py-3 rounded-2xl font-medium inline-flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>View All Events</span>
                           
                               <CircleArrowUp className="rotate-45" />
                        </motion.button>
                        {/* <Button text="Register Now" bg="bg-[#2B2B2B]" /> */}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default EventsSection

