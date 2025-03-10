"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import F1 from '/f (1).png'
import F2 from '/f (2).png'
import F3 from '/f (3).png'
import Star from "../../components/Star"
const cards = [
    {
        title: "Join a Cohort",
        description: "Want to start a tech career, meet mentors, or connect with top companies? Hack-A-Path is your chance!",
        icon: F1,
        color: "bg-[#e9d9ff]",
        borderColor: "border-black border-2",
        bg: "f1"
    },
    {
        title: "Find a Mentor",
        description: "Volunteer with Us Passionate about tech and helping others? Join us to mentor, inspire, and make an impact in the next generation of tech leaders!",
        icon: F3,
        color: "bg-[#fff9ac]",
        borderColor: "border-black border-2",
        bg: "f2"
    },
    {
        title: "Partner with Us",
        description: "Want to start a tech career, meet mentors, or connect with top companies? Hack-A-Path is your chance!",
        icon: F2,
        color: "bg-[#ffe4e4]",
        borderColor: "border-black border-2",
        bg: "f3"
    },
]

const FindYourPlace = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, threshold: 0.2 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const starVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    }

    return (
        <section ref={ref} className="py-16 px-4 md:px-6 lg:px-8 bg-cream relative">
            <motion.div
                className="absolute top-10 left-10 text-purple-600 text-2xl"
                variants={starVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={1}
            >

            </motion.div>

            <motion.div
                className="absolute bottom-10 right-10 w-6 h-6 bg-yellow-400 rounded-sm rotate-45"
                variants={starVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={2}
            />
            <div className="absolute flex justify-between w-full mt-10 right-0">
                <Star classes="52" style="" />
                <div className="absolute right-20"><svg width="55" height="49" viewBox="0 0 55 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.183 21.4372C52.8897 23.0232 52.8851 25.7264 51.1732 27.3066L41.7135 36.0384L32.9501 45.4687C31.3641 47.1754 28.6609 47.1709 27.0807 45.4589L18.3489 35.9992L8.91859 27.2358C7.21192 25.6499 7.21645 22.9467 8.92843 21.3664L18.3881 12.6347L27.1515 3.20434C28.7375 1.49767 31.4406 1.50219 33.0209 3.21417L41.7527 12.6738L51.183 21.4372Z" fill="black" />
                    <path d="M45.4689 21.4372C47.1756 23.0232 47.171 25.7264 45.459 27.3066L35.9994 36.0384L27.236 45.4687C25.65 47.1754 22.9468 47.1709 21.3666 45.4589L12.6348 35.9992L3.20448 27.2358C1.49781 25.6499 1.50234 22.9467 3.21432 21.3664L12.674 12.6347L21.4374 3.20434C23.0234 1.49766 25.7265 1.50219 27.3068 3.21417L36.0385 12.6738L45.4689 21.4372Z" fill="#CEED12" />
                </svg></div>


            </div>
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-12 relative"
                >
                    <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center" variants={itemVariants}>
                     
                        Find Your Place in Tech
                    </motion.h2>
                    <motion.p className="text-gray-700 max-w-2xl mx-auto" variants={itemVariants}>
                        Want to start a tech career, meet mentors, or connect with top companies? Hack-A-Path is your chance!
                    </motion.p>

                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={`${card.color} ${card.borderColor} border ${card.bg} rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >

                            <div className="mb-4 text-4xl relative">
                                <div className="absolute top-0 left-0">
                                    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L8.71539 14.4111" stroke="black" stroke-width="2" stroke-linecap="round" />
                                        <path d="M4.71533 21.895L8.60809 14.4111" stroke="black" stroke-width="2" stroke-linecap="round" />
                                        <path d="M9 9L16.7154 12.4111" stroke="black" stroke-width="2" stroke-linecap="round" />
                                        <path d="M9 8.48389L12.8928 0.999934" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    </svg>

                                </div>
                                <img src={card.icon} className="" alt=
                                    "" />

                                <div className="absolute bottom-0 right-0">
                                    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L8.71539 14.4111" stroke="black" stroke-width="2" stroke-linecap="round" />
                                        <path d="M4.71533 21.895L8.60809 14.4111" stroke="black" stroke-width="2" stroke-linecap="round" />
                                        <path d="M9 9L16.7154 12.4111" stroke="black" stroke-width="2" stroke-linecap="round" />
                                        <path d="M9 8.48389L12.8928 0.999934" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    </svg>

                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                            <p className="text-[#6A6464] text-center">{card.description}</p>

                            {/* Background Pattern */}
                            <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full opacity-10 bg-black"></div>
                            <div className="absolute right-10 bottom-10 w-4 h-4 rounded-full opacity-10 bg-black"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default FindYourPlace

