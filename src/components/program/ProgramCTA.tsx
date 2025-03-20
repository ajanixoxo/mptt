"use client"

import { motion } from "framer-motion"
import { CircleArrowUp } from "lucide-react"
import FloatingShape from "@/components/FloatingShape"

const ProgramCTA = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden bg-green-600/10">
            {/* Floating shapes */}
            <FloatingShape
                size="w-96 h-96"
                color="bg-gradient-to-r from-green-500/20 to-emerald-500/20"
                // className="-bottom-48 right-0"
                delay={0.2}
                top=""
                left=""
                position="absolute"
            />
            <FloatingShape
                size="w-96 h-96"
                color="bg-gradient-to-r from-green-500/20 to-emerald-500/20"
                // className="-bottom-48 right-0"
                delay={0.2}
                top="10%"
                left="80%"
                position="absolute"
            />

            {/* Stars */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-20 left-1/4"
            >
                <motion.img
                    src="/s-star.png"
                    alt="Shining star"
                    className="w-8 h-8"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-40 right-40"
            >
                <motion.img
                    src="/s-star.png"
                    alt="Shining star"
                    className=" w-4 lg:w-8 lg:h-8"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
            </motion.div> */}

            {/* Half star */}
            <div className="absolute left-0 bottom-20">
                <img src="/s_half.png" className="w-7 md:w-12 rotate-180" />
            </div>

            <div className=" mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className=" text-center relative "
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Tech Journey?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Applications for our next cohort are now open. Spaces fill up quickly, so apply today to secure your spot.
                        </p>

                        <div className="flex flex-col w-1/2 mx-auto sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#def134] text-black md:px-8  p-4 py-3 rounded-2xl font-medium flex items-center justify-center space-x-2"
                            >
                                <span className="w-max">Apply Now</span>
                                <CircleArrowUp className="rotate-45" size={20} />
                            </motion.button>

                          
                        </div>
                    </div>

                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                </motion.div>
            </div>
        </section>
    )
}

export default ProgramCTA

