"use client";

// import { Code, ArrowRight } from "lucide-react"
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { CircleArrowUp } from "lucide-react";
import FloatingShape from "@/components/FloatingShape";
import { useRouter } from "next/navigation";
const HeroSection = () => {
  // const isInView = useInView(ref, { once: true })
  const tagControls = useAnimation();
 const router = useRouter()
  const handlePush = () => {
    console.log("Reahced")
    router.push('/path')
  }
  // // Animation for the tag component
  useEffect(() => {
    // Start the animation sequence for the tag
    const animateTag = async () => {
      while (true) {
        // Blink out and rotate
        await tagControls.start({
          opacity: 0,
          rotate: 25,
          transition: { duration: 0.2 },
        });
        // Pause briefly
        await new Promise((resolve) => setTimeout(resolve, 300));
        // Blink in with new rotation
        await tagControls.start({
          opacity: 1,
          rotate: 25,
          transition: { duration: 0.2 },
        });
        // Pause at rotated position
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Blink out again
        await tagControls.start({
          opacity: 0,
          transition: { duration: 0.2 },
        });
        // Pause briefly
        await new Promise((resolve) => setTimeout(resolve, 300));
        // Return to original position and blink in
        await tagControls.start({
          opacity: 1,
          rotate: 0,
          transition: { duration: 0.2 },
        });
        // Pause at original position before repeating
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    };

    animateTag();
  }, [tagControls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="pt-20  lg:pt-28 hero opacity-65  px-4 relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 right-0 w-32 blur-xl h-32 rounded-full bg-gradient-to-t from-blue-500 to-transparent z-20 pointer-events-none"></div> */}

      <FloatingShape
        color="from-[#1F22CA] to-transparent"
        size="w-60 h-60"
        top="-5%"
        position="absolute"
        left="88%"
        delay={0}
      />
      {/* Animated stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20  right-6 md:right-20 text-purple-400"
      >
        <img src="/s-star.png" alt="" className="w-7 md:w-12" />
      </motion.div>
      {/* Animated stars */}
      <div className="absolute top-[30%] -left-40 lg:-left-20 text-purple-400">
        <FloatingShape
          color="from-[#1F22CA] to-transparent"
          size="w-60 h-60"
          position=""
          top="35%"
          left="18%"
          delay={0}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <img src="/s-star.png" className="w-7 md:w-12 ml-40 -mt-32" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.5,
        }}
        className="absolute bottom-40 left-20 text-blue-400"
      >
        <img src="/s-star.png" className="w-7 md:w-12" />
      </motion.div>

      <div className="container flex flex-col  mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="flex justify-between w-full ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5,
              }}
              className="absolute top-40 left-[20] md:left-[15%] text-blue-400"
            >
              <img src="/s-star.png" className="w-7 md:w-12" />
            </motion.div>
            <motion.div
              className="top-15 lg:top-15 absolute w-[10%] lg:left-[24%] text-purple-600 text-3xl"
              animate={tagControls}
              initial={{ opacity: 1, rotate: 0 }}
            >
              {/* The tag is </> so i want it to tilt rotate and blink so it will blink non-visible and rotate to another angle and becomes visble back thenblink non-visble and gets back to the normal angle  */}
              <img src="/tag.png" className="w-8 lg:w-16" />
            </motion.div>
          </div>
          <div className="lg:flex flex-col items-center justify-center">
            <motion.h1
              className="inline-flex main_text max-w-2xl flex-col md:flex-col items-center justify-center text-[40px]  md:text-5xl main_text lg:text-6xl text-center font-bold mb-2 realtive leading-tight"
              variants={itemVariants}
            >
              Level Up Your Tech Skills
             
            </motion.h1>
            <div className="relative  z-40 flex justify-center items-center flex-col md:flex-row">
            <motion.h1
              className="inline-flex main_text max-w-2xl flex-col md:flex-col items-center justify-center text-[40px]  md:text-5xl main_text lg:text-6xl text-center font-bold mb-2 realtive leading-tight"
              variants={itemVariants}
            >
               with
             
            </motion.h1>
              <img src="/d-skills.png" className="lg:w-[70%]   w-full  z-10 " />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}
            className="absolute top-[40%] -right-0 md:right-[5%] text-blue-400"
          >
            <img src="/s-star.png" className="w-7 md:w-12" />
          </motion.div>
          <motion.p
            className="text-[#817e7e] sec_text font-medium inline-block mb-3 text-[14px] lg:text-[18px] max-w-lg text-center relative  z-20"
            variants={itemVariants}
          >
            Join Mypath2tech's awesome 3-month program and kickstart your tech
            journey!
          </motion.p>

          <motion.button
            className="bg-[#F9C23A] main_text sec_text mx-auto   transition button font-semibold cursor-pointer  p-3 md:py-1 md:px-2 lg:text-base text-gray-900 lg:px-6 lg:py-3 rounded-xl  flex items-center space-x-2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePush}
          >
            <span className="main_text">Discover Your Path</span>
            <CircleArrowUp className="rotate-45 w-4 lg:w-auto" />
          </motion.button>
        </div>

        <motion.div
          className="relative flex w-full justify-center -mt-15 items-center z-10"
          variants={itemVariants}
        >
          <motion.img
            src="/4.png"
            alt="Students with tech devices"
            className="w-[50%] lg:w-[30%] -mt- h-auto object-contain"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.img
            src="/2.png"
            alt="Students with tech devices"
            className="w-[95%] lg:w-[60%] h-auto object-contain"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="absolute -bottom-2 left-0  w-full z-20 pointer-events-none">
          <img src="/Bg.png" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
