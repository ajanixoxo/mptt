"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Hero1 from '/hero (1).png'
import Hero2 from '/hero (2).png'
import Arrow from "../../components/Arrow"
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

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
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
      <motion.div
        className="absolute top-20 left-10 text-purple-600 text-3xl"
        variants={decorationVariants}
        {...floatingAnimation}
      >
        &lt;/&gt;
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 w-8 h-8 bg-red-400 rounded-sm rotate-45"
        variants={decorationVariants}
        {...floatingAnimation}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-500 rounded-sm rotate-12"
        variants={decorationVariants}
        custom={1}
        {...floatingAnimation}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 text-yellow-400 text-2xl"
        variants={decorationVariants}
        custom={2}
        {...floatingAnimation}
      >
        *
      </motion.div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center flex-col gap-8 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-4 leading-tight"
              variants={itemVariants}
            >
              Level Up Your <span className="inline-block bg-purple-600 text-white px-2 py-1 rounded">Tech Skills</span>
              <br />
              with{" "}
              <span
                className="relative inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Hack-A-Path
                {isHovered && (
                  <motion.div
                    className="absolute bottom-0 button left-0 h-1 bg-yellow-400"
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  />
                )}
              </span>
            </motion.h1>

            <motion.p className="text-gray-700 mb-8 max-w-lg text-center" variants={itemVariants}>
              Join MagentaTech's supportive tech community and accelerate your career journey!
            </motion.p>

            <motion.button
              className="bg-yellow-400 hover:bg-yellow-500 button text-gray-900 px-6 py-3 rounded-full font-medium flex items-center space-x-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Discover Your Path</span>
             <Arrow />
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

