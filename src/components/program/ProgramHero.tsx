"use client"

import { motion } from "framer-motion"
import { CircleArrowUp } from "lucide-react"
import FloatingShape from "@/components/FloatingShape"


const ProgramHero = () => {
    return (
        <section className="pt-32 pb-16 px-4 relative overflow-hidden hero">
            {/* Floating shapes */}
            <FloatingShape
                size="w-96 h-96"
                color="bg-gradient-to-r from-purple-500/20 to-blue-500/20 -top-48 right-0"
                // className="-top-48 right-0"
                delay={0.3}
                left=""
                top=""
                position="absolute"
            />
            <FloatingShape
                size="w-96 h-96"
                color="bg-gradient-to-r from-purple-500/20 to-blue-500/20  -bottom-40 -left-10"
                // className="-top-48 right-0"
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
                className="absolute top-40 right-20"
            >
                <motion.img
                    src="/s-star.png"
                    alt="Shining star"
                    className="w-8 h-8"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
            </motion.div>

            <div className="container mx-auto max-w-8xl relative">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        {/* Code tag */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absoute top-20 left-10"
                        >
                            <img src='/tag.png' alt="Code tag" className="w-12 h-12" />
                        </motion.div>

                        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
                            Choose Your <br />
                            Tech Path with
                            <motion.span
                                className="inline-block  text-white px-4 py-1 rounded-md"
                                animate={{
                                    scale: [1, 1.02, 1],
                                    rotate: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                }}
                            >
                                <img src="/d-skills.png"alt="" className="lg:w-[100%]   w-44  z-10 " />

                            </motion.span>
                        </h1>

                        <p className="text-gray-400 text-lg mb-8">
                            Join our 3-month adventure designed for 15-25 year olds and kickstart your tech career with hands-on
                            projects and expert mentorship.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#def134] text-black px-6 py-3 rounded-2xl font-medium flex items-center justify-center space-x-2"
                            >
                                <span>Apply Now</span>
                                <CircleArrowUp className="rotate-45" size={20} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#2B2B2B] text-white px-6 py-3 rounded-2xl font-medium flex items-center justify-center space-x-2"
                            >
                                <span>Explore Paths</span>
                                <CircleArrowUp className="rotate-45" size={20} />
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex-1"
                    >
                        <div className="relative">
                            <div className="bg-pink-100 rounded-lg p-8 transform rotate-3">
                                <img src="https://placehold.co/600x400" alt="Program preview" className="rounded-lg shadow-xl" />
                            </div>

                            {/* Half star */}
                            <div className="absolute -bottom-6 -right-48">
                                <img src="/s_half.png" alt="" className="w-7 md:w-12" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ProgramHero

