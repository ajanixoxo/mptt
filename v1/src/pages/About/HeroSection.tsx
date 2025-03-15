"use client"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import FloatingShape from "../../components/FloatingShape"
import Shining_Star from '/s-star.png'
import { CircleArrowUp } from "lucide-react"
import Tag from "/tag.png"
const WhyChooseSection = () => {
  const tagControls = useAnimation()


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
    <section className="min-h-screen hero  pt-20 px-4 relative overflow-hidden">
      {/* Decorative Elements */}

      <FloatingShape color='from-[#1F22CA] to-transparent' size='w-60 h-60' top='70%' position="absolute" left='-5%' delay={0} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-0 left-0"
      >

        <img src={Shining_Star} className="w-7 md:w-12 ml-28 -mt-32" />
      </motion.div>
      <FloatingShape color='from-[#1F22CA] to-transparent' size='w-60 h-60' top='0%' position="absolute" left='95%' delay={0} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 right-10"
      >

        <img src={Shining_Star} className="w-7 md:w-12 " />
      </motion.div>
     
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>

            <div className="absolute flex justify-between w-full -mt-10  left-0">

              <div
                className="-10 text-purple-400">
                <motion.div
                  className="top-0  text-purple-600 text-3xl"
                  animate={tagControls}
                  initial={{ opacity: 1, rotate: 0 }}
                >
                  {/* The tag is </> so i want it to tilt rotate and blink so it will blink non-visible and rotate to another angle and becomes visble back thenblink non-visble and gets back to the normal angle  */}
                  <img src={Tag || "/placeholder.svg"} className="w-10  ml-40 lg:w-auto" />
                </motion.div>

              </div>

              <motion.div
                variants={decorationVariants}
                custom={1}
                initial={floatingAnimation.initial}
                // animate={floatingAnimation.animate}
                className=" bottom-40 left-20 mt-0 text-blue-400"
              >
                <img src='/ws-star.png' className="w-7 md:w-12" />
              </motion.div>




            </div>


            <h1 className="main_text text-4xl md:text-8xl font-bold  text-white">
              Why Choose{" "}
              <span className="inline-block">
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
                  <img src="/d-skills.png" className="lg:w-[100%]   w-44  z-10 " />

                </motion.span>
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Many young people want a tech career but don't know where to start. That's where we come in!
            </p>
            <motion.button
              className="bg-[#def134] sec_text hover:bg-yellow-500 button font-semibold text-gray-900 px-6 py-3 rounded-full  flex items-center space-x-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore our Program</span>
              <CircleArrowUp className="rotate-45" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Pink Circle */}
            <div className="relative ">
              <img
                src="about_hero (2).png"
                className="  top-0"

              />

              {/* Stats */}
              <motion.div
                className="absolute bottom-1/4 w-[155px] left-0 border-2 border-black bg-white rounded-2xl p-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">★</span>
                  <div>
                    <div className="font-bold text-black text-lg">85%</div>
                    <div className="text-sm text-gray-600">Success rate</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute bottom-[26%] w-[155px] h-20 left-0 border-2 border-black bg-white rounded-2xl p-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">★</span>
                  <div>
                    <div className="font-bold text-black text-lg">85%</div>
                    <div className="text-sm text-gray-600">Success rate</div>
                  </div>
                </div>
              </motion.div>



              <motion.div
                className="absolute top-[27%]  w-[155px] h-20 right-0 border-2 border-black bg-white rounded-2xl p-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >

              </motion.div>
              <motion.div
                className="absolute top-1/4 right-0 border-2 border-black bg-white rounded-2xl p-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">★</span>
                  <div>
                    <div className="font-bold text-black text-lg">99.24%</div>
                    <div className="text-sm text-gray-600">User satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection

