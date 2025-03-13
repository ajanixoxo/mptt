"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import F1 from '/fdc (1).png'
import F2 from '/fdc.png'
import F3 from '/fdc (2).png'

import Shining_Star from '/s-star.png'
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
    const isInView = useInView(ref, { once: true })

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

    return (
        <section ref={ref} className="py-16 px-4 md:px-6 lg:px-8 bg-black relative">
            <div className="absolute flex justify-between w-full -mt-10 lg:mt-10 right-0">
                <img src='/s_half.png' className="w-5 rotate-180 md:w-15" />

                <div className=" right-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                        className="absolute top-[40%] right-[5%] text-blue-400"
                    >
                        <img src={Shining_Star} className="w-7 md:w-12" />
                    </motion.div>
                </div>


            </div>
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-12 relative"
                >
                    <motion.h2 className="text-3xl main_text md:text-4xl font-bold mb-4 inline-flex items-center" variants={itemVariants}>

                        Find Your Place in Tech
                    </motion.h2>
                    <motion.p className="text-[#6a6464] max-w-2xl mx-auto sec_text" variants={itemVariants}>
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
                            <h3 className="text-xl font-bold mb-2 main_text">{card.title}</h3>
                            <p className="text-[#6A6464] text-center sec_text">{card.description}</p>

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

