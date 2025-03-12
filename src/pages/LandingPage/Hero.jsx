"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import anime from "animejs"
import Hero1 from "/hero (1).png"
import Hero2 from "/hero (2).png"
import { CircleArrowUp } from "lucide-react"
import Tag from "/tag.png"
import Star from "/star.png"

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
        repeatType: "reverse" , // Type assertion to fix the error
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      className=" pt-20 lg:pt-28 pb-16 px-4 md:px-6 lg:px-8 bg-cream relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Decorative Elements */}
      {/* Decorative Elements */}

      <motion.div
        className="absolute top-10 lg:top-20 right-10 mt-5 w-auto rounded-sm rotate-12"
        variants={decorationVariants}
        custom={1}
        initial={floatingAnimation.initial}
        animate={floatingAnimation.animate}
      >
        {/* The star should move up and down gently */}
        <img src={Star || "/placeholder.svg"} className="w-8 lg:w-[36px]" />
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
        <div className="flex justify-center flex-col flex-1 items-center">
          
          <div className="order-1 lg:order-1 flex flex-col items-center relative">
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
              className="inline-flex flex-col text-3xl  md:text-5xl main_text lg:text-6xl text-center font-bold mb-4 realtive leading-tight"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row justify-center items-center">
                Level Up Your
                <img src="/skills.png" className="lg:w-[33%] w-36  z-10 " />
              </div>
              <div className="">
                {" "}
                with{" "}
                <span
                  className="relative inline-block z-40"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={() => setIsHovered(true)}
                >
                  Hack-A-Path
                  {/* The drawing line path on load an on hover reverser drawing with anumejs  */}
                  <div className="absolute">
                    <svg
                      ref={svgRef}
                      width="438"
                      height="24"
                      viewBox="0 0 438 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        ref={pathRef}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M145.206 2.12004C96.9059 1.62272 48.4084 3.44018 1.65752 11.0717C0.823403 11.2074 0.477134 11.4741 0.408888 11.5352C0.00952396 11.8968 -0.0335196 12.2811 0.0170328 12.5976C0.0473642 12.7897 0.25219 13.6013 1.37193 13.6849C2.14538 13.7414 7.63529 13.3458 9.75344 13.2441C19.7249 12.7671 29.6763 12.0867 39.6224 11.3001C62.1739 9.52328 84.6949 7.98612 107.282 6.58685C119.963 5.80019 132.649 5.14913 145.327 4.61565C175.828 4.93438 206.253 6.1777 236.11 7.46168C224.242 8.11497 213.338 8.7773 204.297 9.2068C189.05 9.93017 173.832 10.7846 158.615 11.9104C150.797 12.4868 142.989 13.113 135.187 13.8522C134.322 13.9358 132.353 14.0217 131.4 14.1235C130.996 14.1642 130.703 14.2297 130.571 14.2749C129.747 14.5598 129.644 15.1429 129.634 15.4368C129.628 15.6154 129.697 16.5897 131.087 16.7796C195.726 25.6906 263.163 15.3238 328.034 23.9862C328.795 24.0879 329.508 23.6177 329.621 22.935C329.735 22.2546 329.209 21.6171 328.446 21.5154C267.348 13.3571 203.973 22.0805 142.797 15.6764C148.143 15.213 153.492 14.7948 158.845 14.3992C174.034 13.2758 189.225 12.4235 204.446 11.7002C219.763 10.9745 240.47 9.55718 262.144 8.66427C280.745 9.59109 299.335 10.6309 317.939 11.5125C325.787 11.8833 333.638 12.1907 341.484 12.5682C344.709 12.7219 353.007 13.3662 354.21 13.1266C355.145 12.9389 355.37 12.3399 355.426 12.0393C355.484 11.7137 355.449 11.3091 355.024 10.9225C354.893 10.8005 354.498 10.5473 353.69 10.3393C331.813 4.73547 295.992 4.82362 262.442 6.17768C255.226 5.816 248.01 5.4724 240.791 5.16271C224.265 4.45064 207.558 3.7363 190.754 3.17343C238.109 2.1268 285.487 2.42746 332.877 3.18474C352.774 3.50348 406.408 5.42494 427.531 7.1226C427.274 7.35995 427.122 7.68999 427.14 8.04941C427.175 8.73661 427.83 9.2701 428.601 9.23845C432.958 9.05761 435.478 8.82704 436.477 8.58968C437.098 8.44275 437.437 8.20765 437.594 8.05394C437.978 7.68321 438.049 7.28534 437.973 6.90783C437.925 6.67274 437.806 6.41504 437.533 6.17768C437.351 6.01493 436.906 5.76628 436.148 5.59674C427.845 3.74988 356.619 1.06661 332.928 0.686842C270.321 -0.312314 207.74 -0.515742 145.206 2.12004ZM336.754 9.84652C324.521 8.36135 310.179 7.83918 295.218 7.87308C302.839 8.26868 310.462 8.65524 318.088 9.01693C324.308 9.31306 330.531 9.56622 336.754 9.84652ZM87.5057 5.34582C71.4553 6.40375 55.4225 7.54757 39.3772 8.81347C37.5245 8.95815 35.6742 9.10056 33.8215 9.24072C51.5654 7.29666 69.4939 6.06015 87.5057 5.34582Z"
                        fill="#F9C23A"
                      />
                    </svg>
                  </div>
                </span>
              </div>
            </motion.h1>
            <motion.div
              className="absolute lg:top-[60%] top-[40%]  left-0 lg:-left-10"
              variants={decorationVariants}
              custom={1}
              initial={floatingAnimation.initial}
              animate={floatingAnimation.animate}
            >
              {/* The star should move up and down gently */}
              <img src={Star || "/placeholder.svg"} className=" top-[60%] -left-20" />
            </motion.div>

            <motion.p
              className="text-[#6A6464] sec_text inline-block mb-8 text-[14px] lg:text-[18px] max-w-lg text-center relative mt-5 z-20"
              variants={itemVariants}
            >
              Join Mypath2tech's awesome 3-month program and kickstart
              <div className="absolute  w-full -top-20 -right-[400px] z-5">
                <svg width="378" height="241" viewBox="0 0 378 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M324.348 234.173C322.888 237.564 318.066 236.27 318.518 233.375C319.84 224.448 315.488 211.757 307.771 204.012C307.733 203.973 307.706 203.927 307.691 203.878C307.676 203.829 307.674 203.779 307.685 203.731C307.697 203.683 307.721 203.638 307.756 203.601C307.792 203.564 307.837 203.536 307.888 203.518C308.054 203.449 308.237 203.413 308.425 203.413C308.613 203.413 308.802 203.448 308.978 203.516C314.451 205.643 323.548 213.965 322.802 218.635C333.06 154.252 281.933 124.82 217.446 111.113C184.436 103.239 150.835 99.0772 129.423 90.785C108.011 82.4928 50.0252 31.2344 38.6784 1.20679C38.632 1.13102 38.6069 1.04758 38.6051 0.963813C38.6034 0.880047 38.6251 0.798493 38.6683 0.726374C38.7116 0.654256 38.7751 0.593787 38.8532 0.550259C38.9314 0.506731 39.0217 0.481473 39.1164 0.476727C39.282 0.46281 39.4517 0.494563 39.6024 0.567614C39.7532 0.640666 39.8776 0.7515 39.9586 0.884932C53.6831 29.3029 111.253 81.2713 132.732 88.336C154.211 95.4008 185.43 100.387 218.787 107.661C287.3 119.873 343.57 150.24 326.304 218.59C326.813 216.595 338.241 210.184 345.796 211.678C346.013 211.721 346.208 211.832 346.346 211.99C346.483 212.148 346.552 212.341 346.539 212.532L346.533 212.557C346.525 212.666 346.468 212.765 346.376 212.833C346.283 212.902 346.162 212.934 346.037 212.924C337.431 212.431 327.273 227.346 324.348 234.173Z"
                    fill="url(#paint0_linear_83_888)"
                  />
                  <path
                    d="M203.598 117.93C230.745 123.419 269.942 135.892 290.666 152.523C290.735 152.563 290.815 152.582 290.894 152.577C290.973 152.573 291.047 152.545 291.103 152.498C291.158 152.451 291.193 152.387 291.201 152.318C291.21 152.249 291.191 152.177 291.148 152.116C271.945 133.256 231.598 120.327 203.683 117.346C203.605 117.35 203.534 117.376 203.479 117.421C203.424 117.466 203.388 117.527 203.379 117.594C203.369 117.661 203.385 117.731 203.425 117.792C203.465 117.853 203.526 117.901 203.598 117.93Z"
                    fill="#373737"
                  />
                  <path
                    d="M195.57 117.668C195.681 117.641 195.778 117.583 195.847 117.504C195.917 117.425 195.956 117.327 195.96 117.224C195.963 117.121 195.931 117.017 195.867 116.927C195.804 116.836 195.711 116.763 195.603 116.717C195.272 116.639 194.936 116.559 194.598 116.51C193.489 116.31 192.373 116.164 191.253 116.072C190.133 115.978 189.012 115.942 187.896 115.963C187.551 115.97 187.211 115.983 186.87 116.001C186.757 116.028 186.658 116.085 186.587 116.165C186.515 116.244 186.475 116.343 186.471 116.447C186.468 116.552 186.501 116.656 186.566 116.748C186.631 116.839 186.725 116.912 186.835 116.958C187.177 117.039 187.514 117.118 187.858 117.164C190.078 117.566 192.326 117.749 194.561 117.71C194.921 117.713 195.257 117.693 195.57 117.668Z"
                    fill="#373737"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_83_888"
                      x1="271.643"
                      y1="159.689"
                      x2="83.1882"
                      y2="55.4398"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.557948" stopColor="#373737" />
                      <stop offset="0.799114" stopColor="#FEFBEA" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
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

          <div className="order-2 lg:order-2 relative">
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

            {/* Blur effect at the bottom of the section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-20 pointer-events-none"></div>
          </div>
        </div>
        <div className="hidden">{isHovered}</div>
      </div>
    </motion.section>
  )
}

export default HeroSection

