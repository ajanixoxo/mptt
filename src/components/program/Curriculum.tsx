"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import FloatingShape from "@/components/FloatingShape"

const modules = [
    {
        id: 1,
        title: "Foundations",
        duration: "2 weeks",
        description: "Build a solid foundation in programming fundamentals and development environments.",
        topics: [
            "Programming basics and syntax",
            "Development environment setup",
            "Version control with Git",
            "Command line essentials",
        ],
    },
    {
        id: 2,
        title: "Core Concepts",
        duration: "3 weeks",
        description: "Master the core concepts and patterns used in modern software development.",
        topics: [
            "Data structures and algorithms",
            "Object-oriented programming",
            "Functional programming concepts",
            "Testing methodologies",
        ],
    },
    {
        id: 3,
        title: "Frontend Development",
        duration: "4 weeks",
        description: "Learn to build responsive, interactive user interfaces with modern frameworks.",
        topics: [
            "HTML, CSS, and JavaScript",
            "React and component architecture",
            "State management",
            "Responsive design principles",
        ],
    },
    {
        id: 4,
        title: "Backend Development",
        duration: "4 weeks",
        description: "Develop server-side applications and APIs to power your web applications.",
        topics: [
            "Server-side programming",
            "Database design and queries",
            "RESTful API development",
            "Authentication and authorization",
        ],
    },
    {
        id: 5,
        title: "Capstone Project",
        duration: "3 weeks",
        description: "Apply everything you've learned to build a complete, production-ready application.",
        topics: [
            "Project planning and architecture",
            "Full-stack implementation",
            "Deployment and DevOps",
            "Performance optimization",
        ],
    },
]

const Curriculum = () => {
    const [openModule, setOpenModule] = useState<number | null>(1)

    const toggleModule = (id: number) => {
        setOpenModule(openModule === id ? null : id)
    }

    return (
        <section className="py-20 px-4 relative">
            {/* Floating shape */}
            <FloatingShape
                size="w-96 h-96"
                color="bg-gradient-to-r from-blue-500/20 to-purple-500/20 -bottom-48 right-0"
                position="absolute"
                delay={0.3}
                top=""
                left=""
            />
            <FloatingShape
                size="w-96 h-96"
                color="bg-gradient-to-r from-blue-500/20 to-purple-500/20 bottom-48 left-0"
                top=""
                left=""
                delay={0}
                position="absolute"
            />
            {/* Half star */}
            <div className="absolute left-10 top-20">
                <img src="/s_half.png" className="w-7 md:w-12" />
            </div>

            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Curriculum Overview</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our comprehensive curriculum is designed to take you from beginner to job-ready.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {modules.map((module) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: module.id * 0.1 }}
                            className="border border-gray-700 rounded-lg overflow-hidden"
                        >
                            <motion.button
                                onClick={() => toggleModule(module.id)}
                                className="w-full flex items-center justify-between p-6 bg-gray-800/50 text-left"
                                whileHover={{ backgroundColor: "rgba(75, 85, 99, 0.5)" }}
                            >
                                <div className="flex items-center">
                                    <div className="bg-[#def134] w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-black font-bold">{module.id}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                                        <p className="text-gray-400 text-sm">{module.duration}</p>
                                    </div>
                                </div>
                                <motion.div animate={{ rotate: openModule === module.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                    <ChevronDown className="text-gray-400" size={20} />
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {openModule === module.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 bg-gray-900/50">
                                            <p className="text-gray-300 mb-4">{module.description}</p>
                                            <h4 className="text-white font-semibold mb-2">Topics covered:</h4>
                                            <ul className="space-y-2">
                                                {module.topics.map((topic, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                                        className="flex items-center text-gray-400"
                                                    >
                                                        <div className="w-2 h-2 bg-[#def134] rounded-full mr-3"></div>
                                                        {topic}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Curriculum

