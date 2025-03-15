"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import FloatingShape from "../../components/FloatingShape"

const faqs = [
    {
        question: "Do I need prior coding experience?",
        answer:
            "No prior experience is required for our beginner tracks. We start with the fundamentals and gradually build up to more advanced concepts. For intermediate and advanced tracks, some prior experience is recommended.",
    },
    {
        question: "What is the time commitment?",
        answer:
            "Our full-time programs require 40-50 hours per week for 12 weeks. We also offer part-time options that require 15-20 hours per week over a longer period.",
    },
    {
        question: "Are there financing options available?",
        answer:
            "Yes, we offer various financing options including income share agreements, installment plans, and scholarships for qualified applicants.",
    },
    {
        question: "What kind of support will I receive?",
        answer:
            "You'll have access to instructors, teaching assistants, and mentors throughout the program. We also provide career coaching, resume reviews, and interview preparation.",
    },
    {
        question: "What is the job placement rate?",
        answer:
            "Our job placement rate is 94% within 6 months of graduation. We work with a network of hiring partners and provide ongoing support until you secure a position.",
    },
]

const ProgramFAQ = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }

    return (
        <section className="py-20 px-4 bg-gray-900/30 relative">
            {/* Floating shape */}
            <FloatingShape
                size="w-80 h-80"
                color="bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                // className="top-20 right-20"
                delay={0.3}
                left=""
                top=""
                position="absolute"
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

            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Find answers to common questions about our programs.</p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border border-gray-700 rounded-lg overflow-hidden"
                        >
                            <motion.button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 bg-gray-800/50 text-left"
                                whileHover={{ backgroundColor: "rgba(75, 85, 99, 0.5)" }}
                            >
                                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                                <motion.div animate={{ rotate: openFAQ === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                    <ChevronDown className="text-gray-400" size={20} />
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {openFAQ === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 bg-gray-900/50">
                                            <p className="text-gray-300">{faq.answer}</p>
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

export default ProgramFAQ

