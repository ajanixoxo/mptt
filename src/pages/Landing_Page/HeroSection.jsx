"use client"

import { Code, ArrowRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import anime from "animejs"
import Hero1 from "/2.png"
import Hero2 from "/4.png"
import { CircleArrowUp } from "lucide-react"
import Tag from "/tag.png"
import Star from "/star.png"

// Star SVG component
const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 0L14.59 8.26L23 9.27L17.5 15.47L18.9 24L12 19.77L5.1 24L6.5 15.47L1 9.27L9.41 8.26L12 0Z"
      fill="currentColor"
    />
  </svg>
)

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(true)
  const ref = useRef(null)
  const svgRef = useRef(null)
  const pathRef = useRef(null)
  const isInView = useInView(ref, { once: true })
  const tagControls = useAnimation()

  // Animation for the tag component
  useEffect(() => {
    // Start the animation sequence for the tag
    const animateTag = async () => {
      while (true) {
        // Blink out and rotate
        await tagControls.start({
          opacity: 0,
          rotate: 45,
          transition: { duration: 0.2 },
        })
        // Pause briefly
        await new Promise((resolve) => setTimeout(resolve, 300))
        // Blink in with new rotation
        await tagControls.start({
          opacity: 1,
          rotate: 45,
          transition: { duration: 0.2 },
        })
        // Pause at rotated position
        await new Promise((resolve) => setTimeout(resolve, 1000))
        // Blink out again
        await tagControls.start({
          opacity: 0,
          transition: { duration: 0.2 },
        })
        // Pause briefly
        await new Promise((resolve) => setTimeout(resolve, 300))
        // Return to original position and blink in
        await tagControls.start({
          opacity: 1,
          rotate: 0,
          transition: { duration: 0.2 },
        })
        // Pause at original position before repeating
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    }

    animateTag()
  }, [tagControls])

  // Animation for the SVG path using Anime.js
  useEffect(() => {
    if (!pathRef.current || !isInView) return

    // Set up the path for animation
    const path = pathRef.current

    // Get the total length of the path for accurate drawing
    const pathLength = path.getTotalLength ? path.getTotalLength() : 1000

    // Set initial styles
    path.style.strokeDasharray = pathLength
    path.style.strokeDashoffset = pathLength
    path.style.fillOpacity = "0"
    path.style.stroke = "#F9C23A"
    path.style.strokeWidth = "1"

    // Initial drawing animation
    const drawAnimation = anime({
      targets: path,
      strokeDashoffset: 0,
      fillOpacity: 1,
      easing: "easeInOutSine",
      duration: 2000,
      complete: () => {
        // Remove stroke after fill is complete for cleaner look
        anime({
          targets: path,
          strokeWidth: 0,
          duration: 300,
        })
      },
    })

    return () => {
      drawAnimation.pause()
    }
  }, [isInView])

  // Handle hover effect for the path
  const handleMouseEnter = () => {
    setIsHovered(true)
    if (!pathRef.current) return

    const path = pathRef.current
    const pathLength = path.getTotalLength ? path.getTotalLength() : 1000

    // Reset for animation
    path.style.strokeWidth = "1"
    path.style.stroke = "#F9C23A"

    // Reverse drawing animation
    anime({
      targets: path,
      strokeDashoffset: [0, pathLength],
      fillOpacity: [1, 0],
      easing: "easeInOutSine",
      duration: 1500,
      complete: () => {
        // Start drawing animation again
        anime({
          targets: path,
          strokeDashoffset: 0,
          fillOpacity: 1,
          easing: "easeInOutSine",
          duration: 1500,
          complete: () => {
            // Remove stroke after fill is complete
            anime({
              targets: path,
              strokeWidth: 0,
              duration: 300,
            })
          },
        })
      },
    })
  }

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
        repeatType: "reverse", // Type assertion to fix the error
      },
    },
  }

  return (
    <section className="pt-32 pb-16 px-4 relative overflow-hidden">
      {/* Animated stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 right-20 text-purple-400"
      >
        <StarIcon />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        className="absolute bottom-40 left-20 text-blue-400"
      >
        <StarIcon />
      </motion.div>

      {/* Code symbol */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-40 left-[10%] text-purple-500/30"
      >
        <Code size={32} />
      </motion.div>

      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-16">
          <div className="flex justify-between w-full ">
            <motion.div
              className="top-20 left-10 text-purple-600 text-3xl"
              animate={tagControls}
              initial={{ opacity: 1, rotate: 0 }}
            >
              {/* The tag is </> so i want it to tilt rotate and blink so it will blink non-visible and rotate to another angle and becomes visble back thenblink non-visble and gets back to the normal angle  */}
              <img src={Tag || "/placeholder.svg"} className="w-10 lg:w-auto" />
            </motion.div>
          </div>
          <motion.h1
            className="inline-flex flex-col items-center justify-center text-3xl  md:text-5xl main_text lg:text-6xl text-center font-bold mb-4 realtive leading-tight"
            variants={itemVariants}
          >
              Level Up Your
              Tech Skills <br/>
             
              <span
                className="relative inline-flex items-center justify-center z-40"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setIsHovered(true)}
              >
                 with
                <img src="/d-skills.png" className="lg:w-[57%]   w-36  z-10 " />

              </span>
            
          </motion.h1>

          <motion.p
            className="text-[#6A6464] sec_text inline-block mb-8 text-[14px] lg:text-[18px] max-w-lg text-center relative mt-5 z-20"
            variants={itemVariants}
          >
            Join Mypath2tech's awesome 3-month program and kickstart
           
            your tech journey!
          </motion.p>

          <motion.button
            className="bg-[#def134] sec_text hover:bg-yellow-500 button font-semibold text-gray-900 px-6 py-3 rounded-full  flex items-center space-x-2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Discover Your Path</span>
            <CircleArrowUp className="rotate-45" />
          </motion.button>
        </div>

        <motion.div className="relative flex justify-center items-end z-10" variants={itemVariants}>
          <motion.img
            src={Hero2}
            alt="Students with tech devices"
            className="w-1/2 lg:w-full h-auto object-contain"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.img
            src={Hero1}
            alt="Students with tech devices"
            className="w-[70%] lg:w-full h-auto object-contain"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-20 pointer-events-none"></div>

      </div>
    </section>
  )
}

export default HeroSection

