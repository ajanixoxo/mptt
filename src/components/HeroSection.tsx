"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { CircleArrowUp } from "lucide-react";
// import Image from "next/image";
import FloatingShape from "@/components/FloatingShape";
import AnimatedCodeBrackets from "./AnimatedCodeBrackets";

const HeroSection = () => {
  const router = useRouter();
  const tagControls = useAnimation();
  const { theme, systemTheme } = useTheme();
  // const MotionImage = motion(Image);

  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const handleNavigate = () => router.push("/path");

  // Tag animation sequence
  useEffect(() => {
    const animateTag = async () => {
      while (true) {
        await tagControls.start({ opacity: 0.5, rotate: 15, transition: { duration: 0.1 } });
        await new Promise((res) => setTimeout(res, 300));
        await tagControls.start({ opacity: 1, rotate: 15, transition: { duration: 0.2 } });
        await new Promise((res) => setTimeout(res, 1000));
        await tagControls.start({ opacity: 0.5, transition: { duration: 0.2 } });
        await new Promise((res) => setTimeout(res, 300));
        await tagControls.start({ opacity: 1, rotate: 0, transition: { duration: 0.2 } });
        await new Promise((res) => setTimeout(res, 2000));
      }
    };
    animateTag();
  }, [tagControls]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Reusable animation variant
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const twinkleStar = {
    initial: { opacity: 0 },
    animate: { opacity: [0, 1, 0] },
    transition: { duration: 2, repeat: Infinity },
  };

  return (
    <section
      className={`pt-20 px-4 relative overflow-hidden lg:pt-28 ${isDark ? "dark:hero hero" : "hero2 bg-[#FEFBEA]"
        }`}
    >
      {/* Floating Elements */}
      <FloatingShape
        color="from-[#1F22CA] to-transparent"
        size="w-60 h-60"
        top="-5%"
        left="88%"
        position="absolute hidden dark:flex"
        delay={0}
      />
      <FloatingShape
        color="from-[#1F22CA] to-transparent"
        size="w-60 h-60"
        top="35%"
        left="1%"
        position="absolute hidden  dark:flex"
        delay={0}
      />

      {/* Twinkling Stars */}
      <motion.div {...twinkleStar} className="absolute top-20 right-1 md:right-[20%]">
        <img src="/s-star.png" className="w-7 md:w-12 hidden dark:flex" />
        <img src="/star.png" className="w-7 md:w-12 dark:hidden flex" />
      </motion.div>

      <motion.div {...twinkleStar} className="absolute top-40 left-[20px] md:left-[15%]">
        <img src="/s-star.png" className="w-7 md:w-12 hidden dark:flex" />
        <img src="/star.png" className="w-7 md:w-12 dark:hidden flex" />
      </motion.div>

      <motion.div {...twinkleStar} className="absolute bottom-40 left-20">
        <img src="/s-star.png" className="w-7 md:w-12 hidden dark:flex" />
      </motion.div>

      <motion.div {...twinkleStar} className="absolute top-[40%] -right-0 md:right-[5%]">
        <img src="/s-star.png" className="w-7 md:w-12 hidden dark:flex" />
      </motion.div>

      {/* Hero Content */}
      <div className="container mx-auto max-w-6xl text-center">
        {/* Blinking Animated Tag */}
        <motion.div className="absolute lg:top-12 w-[10%] lg:left-[30%]">
          <AnimatedCodeBrackets
            width={70}
            height={70}
            color="#F9C23A"
            strokeWidth={5}
            className="w-10 md:w-auto"
          />
        </motion.div>

        {/* Main Headings */}
        <div className="lg:flex flex-col items-center justify-center">
          <motion.h1
            className="main_text max-w-2xl text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight mb-2"
            variants={itemVariants}
          >
            Shape Your Future.
          </motion.h1>

          <div className="relative z-40 flex justify-center items-center flex-col md:flex-row">
            <motion.h1
              className="main_text max-w-2xl text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight mb-2"
              variants={itemVariants}
            >
              Start with
            </motion.h1>
            <img src="/d-skills.png" className="lg:w-[50%] w-full z-10 ml-1" />
          </div>
        </div>

        {/* Sub Text */}
        <motion.p
          className="sec_text z-50 relative text-[#817e7e] text-[14px] lg:text-[18px] font-medium max-w-lg mx-auto my-3"
          variants={itemVariants}
        >
          Build What Matters.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={handleNavigate}
          className="bg-[#F9C23A] main_text z-50 relative sec_text mx-auto lg:my-4 font-semibold p-3 md:py-1 md:px-2 lg:text-base text-gray-900 lg:px-6 lg:py-3 rounded-xl flex items-center space-x-2"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Discover Your Path</span>
          <CircleArrowUp className="rotate-45 w-4 lg:w-auto" />
        </motion.button>

        {/* Hero Images */}
        <motion.div className="relative flex justify-center items-center w-full z-10" variants={itemVariants}>
          {isDark ? (
            <>
              <img
                src="/4.png"
                alt="Floating shape 4"
                width={400}
                height={400}
                className="w-[50%] lg:w-[30%] hidden dark:flex"
              
              />
              <img
                src="/2.png"
                alt="Hero visual dark"
                width={800}
                height={600}
                className="w-[95%] lg:w-[60%] hidden dark:flex"
              />
            </>
          ) : (
            <>
              <img
                src="/3.png"
                alt="Floating shape 3"
                width={400}
                height={400}
                className="w-[50%] lg:w-[30%] dark:hidden flex"
                
              />
              <img
                src="/1.png"
                alt="Hero visual light"
                width={800}
                height={600}
                className="w-[95%] lg:w-[50%] dark:hidden flex"
              />
            </>
          )}
        </motion.div>


        {/* Background Decoration */}
        <div className="absolute -bottom-2 left-0 w-full z-20 pointer-events-none">
          <img src="/Bg.png" className="w-full hidden dark:block" />
          <img src="/white_bg.png" className="w-full block dark:hidden" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
