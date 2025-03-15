"use client"

import { motion } from "framer-motion"
import { Users, BookOpen, Award, Briefcase } from "lucide-react"
import FloatingShape from "@/components/FloatingShape"

const benefits = [
    {
        icon: Users,
        title: "Expert Mentorship",
        description: "Get guidance from industry professionals who have worked at top tech companies.",
    },
    {
        icon: BookOpen,
        title: "Project-Based Learning",
        description: "Build a portfolio of real-world projects that demonstrate your skills to employers.",
    },
    {
        icon: Award,
        title: "Industry-Recognized Certification",
        description: "Earn credentials that validate your expertise and boost your resume.",
    },
    {
        icon: Briefcase,
        title: "Career Support",
        description: "Receive job placement assistance, interview prep, and networking opportunities.",
    },
]

const ProgramBenefits = () => {
    return (
        <section className="py-20 px-4 bg-gray-900/30 relative">
            {/* Floating shape */}
            <FloatingShape
                size="w-80 h-80"
                color="bg-gradient-to-r from-purple-500/20 to-blue-500/20 top-20 right-20"
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

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Program Benefits</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our comprehensive approach ensures you get everything you need to succeed in tech.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
                        >
                            <div className="bg-[#def134] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <benefit.icon className="text-black" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProgramBenefits

