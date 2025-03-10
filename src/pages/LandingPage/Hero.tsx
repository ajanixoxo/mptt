"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Hero1 from '/hero (1).png'
import Hero2 from '/hero (2).png'
import { CircleArrowUp } from 'lucide-react'
import Tag from "../../components/Tag"
import Star from "../../components/Star"
const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false)
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
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

    // Fix the floating animation with proper TypeScript types
    const floatingAnimation = {
        initial: { y: 0 },
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse" as const, // Type assertion to fix the error
            },
        },
    }

    const lineVariants = {
        hidden: { width: "0%" },
        visible: { width: "100%", transition: { duration: 0.6 } },
        exit: { width: "0%", transition: { duration: 0.6 } },
    }

    return (
        <motion.section
            ref={ref}
            className="pt-28 pb-16 px-4 md:px-6 lg:px-8 bg-cream relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* Decorative Elements */}
            {/* Decorative Elements */}
            {/* <motion.div
                className=" top-20 left-10 text-purple-600 text-3xl"
                variants={decorationVariants}
                initial={floatingAnimation.initial}
                animate={floatingAnimation.animate}
            >
                <Tag />
            </motion.div> */}

            <motion.div
                className="absolute bottom-20 right-10 w-8 h-8 bg-red-400 rounded-sm rotate-45"
                variants={decorationVariants}
                initial={floatingAnimation.initial}
                animate={floatingAnimation.animate}
            />

            <motion.div
                className="absolute top-20 right-20 w-6 h-6  rounded-sm rotate-12"
                variants={decorationVariants}
                custom={1}
                initial={floatingAnimation.initial}

            >
                <Star classes="50" style="" />
            </motion.div>

            {/*  <motion.div
                className="absolute bottom-1/4 left-1/4 text-yellow-400 text-2xl"
                variants={decorationVariants}
                custom={2}
                initial={floatingAnimation.initial}
                animate={floatingAnimation.animate}
            >
                *
            </motion.div> */}

            <div className="container mx-auto max-w-6xl">

                <div className="flex justify-center flex-col items-center">

                    <div className="order-2 lg:order-1 flex flex-col items-center relative">
                        <div className="flex justify-between w-full ">
                            <motion.div
                                className=" top-20 left-10 text-purple-600 text-3xl"

                            >
                                <Tag />
                            </motion.div>

                        </div>
                        <motion.h1
                            className="text-4xl md:text-5xl  lg:text-6xl text-center font-bold mb-4 leading-tight"
                            variants={itemVariants}
                        >
                            Level Up Your 
                            <span className="iniline-flex items-center    justify-center text-white px-2 py-1 rounded ">
                                <img src="/rec.png" className="absolute child top-5 -right-5  z-10 " /> 
                                <span className="relative z-20">Tech Skills</span>
                                </span>
                            <br />
                        <div className="mt-5"></div>                            with{" "}
                            <span
                                className="relative inline-block"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                Hack-A-Path
                                {isHovered && (
                                    <svg width="438" height="24" viewBox="0 0 438 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M145.206 2.12004C96.9059 1.62272 48.4084 3.44018 1.65752 11.0717C0.823403 11.2074 0.477134 11.4741 0.408888 11.5352C0.00952396 11.8968 -0.0335196 12.2811 0.0170328 12.5976C0.0473642 12.7897 0.25219 13.6013 1.37193 13.6849C2.14538 13.7414 7.63529 13.3458 9.75344 13.2441C19.7249 12.7671 29.6763 12.0867 39.6224 11.3001C62.1739 9.52328 84.6949 7.98612 107.282 6.58685C119.963 5.80019 132.649 5.14913 145.327 4.61565C175.828 4.93438 206.253 6.1777 236.11 7.46168C224.242 8.11497 213.338 8.7773 204.297 9.2068C189.05 9.93017 173.832 10.7846 158.615 11.9104C150.797 12.4868 142.989 13.113 135.187 13.8522C134.322 13.9358 132.353 14.0217 131.4 14.1235C130.996 14.1642 130.703 14.2297 130.571 14.2749C129.747 14.5598 129.644 15.1429 129.634 15.4368C129.628 15.6154 129.697 16.5897 131.087 16.7796C195.726 25.6906 263.163 15.3238 328.034 23.9862C328.795 24.0879 329.508 23.6177 329.621 22.935C329.735 22.2546 329.209 21.6171 328.446 21.5154C267.348 13.3571 203.973 22.0805 142.797 15.6764C148.143 15.213 153.492 14.7948 158.845 14.3992C174.034 13.2758 189.225 12.4235 204.446 11.7002C219.763 10.9745 240.47 9.55718 262.144 8.66427C280.745 9.59109 299.335 10.6309 317.939 11.5125C325.787 11.8833 333.638 12.1907 341.484 12.5682C344.709 12.7219 353.007 13.3662 354.21 13.1266C355.145 12.9389 355.37 12.3399 355.426 12.0393C355.484 11.7137 355.449 11.3091 355.024 10.9225C354.893 10.8005 354.498 10.5473 353.69 10.3393C331.813 4.73547 295.992 4.82362 262.442 6.17768C255.226 5.816 248.01 5.4724 240.791 5.16271C224.265 4.45064 207.558 3.7363 190.754 3.17343C238.109 2.1268 285.487 2.42746 332.877 3.18474C352.774 3.50348 406.408 5.42494 427.531 7.1226C427.274 7.35995 427.122 7.68999 427.14 8.04941C427.175 8.73661 427.83 9.2701 428.601 9.23845C432.958 9.05761 435.478 8.82704 436.477 8.58968C437.098 8.44275 437.437 8.20765 437.594 8.05394C437.978 7.68321 438.049 7.28534 437.973 6.90783C437.925 6.67274 437.806 6.41504 437.533 6.17768C437.351 6.01493 436.906 5.76628 436.148 5.59674C427.845 3.74988 356.619 1.06661 332.928 0.686842C270.321 -0.312314 207.74 -0.515742 145.206 2.12004ZM336.754 9.84652C324.521 8.36135 310.179 7.83918 295.218 7.87308C302.839 8.26868 310.462 8.65524 318.088 9.01693C324.308 9.31306 330.531 9.56622 336.754 9.84652ZM87.5057 5.34582C71.4553 6.40375 55.4225 7.54757 39.3772 8.81347C37.5245 8.95815 35.6742 9.10056 33.8215 9.24072C51.5654 7.29666 69.4939 6.06015 87.5057 5.34582Z" fill="#F9C23A" />
                                    </svg>

                                )}
                            </span>
                        </motion.h1>

                        <motion.p className="text-gray-700 mb-8 max-w-lg text-center" variants={itemVariants}>
                            Join MagentaTech's supportive tech community and accelerate your career journey!
                        </motion.p>

                        <motion.button
                            className="bg-yellow-400 hover:bg-yellow-500 button font-semibold text-gray-900 px-6 py-3 rounded-full  flex items-center space-x-2"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Discover Your Path</span>
                            <CircleArrowUp className="rotate-45" />
                        </motion.button>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <motion.div className="relative  flex justify-center items-center z-10" variants={itemVariants}>
                            <motion.img
                                src={Hero2}
                                alt="Students with tech devices"
                                className="w-full h-auto object-contain"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            />
                            <motion.img
                                src={Hero1}
                                alt="Students with tech devices"
                                className="w-full h-auto object-contain"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            />
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-10 -right-10 w-10 h-10 bg-yellow-300 rounded-full"
                            variants={decorationVariants}
                            {...floatingAnimation}
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default HeroSection

