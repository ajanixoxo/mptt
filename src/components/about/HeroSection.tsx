"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FloatingShape from "@/components/FloatingShape";
import { CircleArrowUp } from "lucide-react";
const WhyChooseSection = () => {
  const tagControls = useAnimation();
  useEffect(() => {
    let mounted = true;

    const animateTag = async () => {
      while (mounted) {
        await tagControls.start({
          opacity: 0,
          rotate: 45,
          transition: { duration: 0.2 },
        });
        await new Promise((resolve) => setTimeout(resolve, 300));
        await tagControls.start({
          opacity: 1,
          rotate: 45,
          transition: { duration: 0.2 },
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await tagControls.start({ opacity: 0, transition: { duration: 0.2 } });
        await new Promise((resolve) => setTimeout(resolve, 300));
        await tagControls.start({
          opacity: 1,
          rotate: 0,
          transition: { duration: 0.2 },
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    };

    animateTag();

    return () => {
      mounted = false;
    }; // Cleanup function to stop animations on unmount
  }, [tagControls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const decorationVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
  };

  return (
    <section className="min-h-screen hero flex flex-col items-center justify-center pt-20 px-3 lg:px-9 relative overflow-hidden">
      {/* Decorative Elements */}

      <FloatingShape
        color="from-[#1F22CA] to-transparent"
        size="w-60 h-60"
        top="70%"
        position="absolute"
        left="-5%"
        delay={0}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute -bottom-0 md:-bottom-14 left-0"
      >
        <img src="/s-star.png" className="w-10 md:w-9 ml-20 lg:ml-28 mt-3" />
      </motion.div>
      <FloatingShape
        color="from-[#1F22CA] to-transparent"
        size="w-60 h-60"
        top="0%"
        position="absolute"
        left="95%"
        delay={0}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 right-10"
      >
        <img src="/s-star.png" className="w-7 md:w-12 " />
      </motion.div>

      <div className="container mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-content-center place-items-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute flex justify-between w-full -mt-10  left-0">
              <div className="-10 text-purple-400">
                <motion.div className="top-5 md:-top-20 absolute lg:top-0  text-purple-600 text-3xl">
                  {/* The tag is </> so i want it to tilt rotate and blink so it will blink non-visible and rotate to another angle and becomes visble back thenblink non-visble and gets back to the normal angle  */}
                  <img
                    src="/tag.png"
                    className="w-10 ml-10  md:ml-10  lg:w-18"
                  />
                </motion.div>
              </div>

              <motion.div
                variants={decorationVariants}
                custom={1}
                initial={floatingAnimation.initial}
                // animate={floatingAnimation.animate}
                className=" bottom-28 left-20 mt-0 text-blue-400"
              >
                <img src="/ws-star.png" className="w-7 md:w-12" />
              </motion.div>
            </div>

            <h1 className="main_text text-center md:text-left text-5xl md:text-7xl font-bold  text-white">
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
                  <img src="/whychoose.png" className="lg:w-[70%]  z-10 " />
                </motion.span>
              </span>
            </h1>
            <p className="text-gray-400 sec_text text-center md:text-left text-lg mb-8 max-w-lg">
              Many young people want a tech career but don't know where to
              start. That's where we come in!
            </p>

            <motion.button
              className="bg-[#F9C23A] main_text font-semibold z-20 button mx-auto lg:mx-0 f text-gray-900 px-6 py-3 rounded-2xl  flex items-center space-x-2"
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
              <img src="/about_hero.png" className="w-full  top-0" />

              {/* Stats */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
