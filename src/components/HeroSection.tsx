"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Button from "./Button";

const HeroSection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Marquee column variants
  const marqueeVariants = (direction: 'up' | 'down') => ({
    animate: {
      y: direction === 'up' ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  });

  const images = [
    "/v2-images/hero1.png",
    "/v2-images/hero2.jpg",
    "/v2-images/hero3.png",
    "/v2-images/hero4.png",
  ];

  return (
    <section className="relative w-full h-max-content bg-black text-white overflow-hidden  pb-12 px-4 sm:px-6 lg:px-14">

      {/* Radial Glows */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#F9C23A]/50 rounded-full blur-[136px] pointer-events-none " />
      <div className="absolute z-10 bottom-[10px] -right-10 w-[350px] h-[150px] bg-[#F9C23A]/30 rounded-full blur-[136px] pointer-events-none translate-x-1/3 " />

      {/* Sticky Banner */}
      <div className="flex md:bg-black w-screen -mx-4 sm:-mx-6 lg:-mx-14 pt-5 md:py-7 md:shadow-lg justify-center  lg:mb-20 sticky top-[50px] md:top-20 z-30">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=" p-1.5 pr-6 flex flex-col md:flex-row items-center gap-4 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-3 px-3">
            <span className="text-sm font-medium text-white">Spring 2026 Applications Now Open</span>
            <span className="text-[#99A1AF] text-xs flex items-center gap-1">
              <Clock size={12} />
              Closes in: 15d 8h 40m 22s
            </span>
          </div>
          <Button
            text="Apply Now"
            variant="secondary"
            className="!h-[36px] !px-4 !text-xs !w-auto !rounded-full bg-white text-black font-bold border-none"
            icon={<ArrowRight size={14} />}
          />
        </motion.div>
      </div>

      <div className="container  mx-auto ">
        <div className="grid grid-cols-1 pt-20 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center md:items-start  md:text-left gap-6 lg:gap-8 z-10"
          >
            <div className="space-y-2  leading-[110%]">
              <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-[96px] leading-[0.9] font-extrabold tracking-[-3%]">
                LEARN IT.
              </motion.h1>
              <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-[96px] leading-[0.9] font-extrabold tracking-[-3%]">
                BUILD IT.
              </motion.h1>
              <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-[96px] leading-[0.9] font-extrabold tracking-[-3%] text-[#F9C23A]">
                LAUNCH IT.
              </motion.h1>
            </div>

            <motion.p variants={fadeIn} className="text-[#D1D5DC] text-lg md:text-xl max-w-xl leading-relaxed tracking-[2%] leading-[154%] ">
              Free, industry-leading computer science courses designed to prepare you for high-impact careers. Learn from the best, build real projects, and join a thriving community.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                text="Explore Courses"
                variant="secondary"
                className="!border-white !text-[#10141D] !w-full sm:!w-auto justify-center font-bold !px-[20px] !py-[14px] w-[174px] h-[56px]"
                icon={<ArrowRight size={18} />}
              />
            </motion.div>

            <motion.p variants={fadeIn} className="text-xs text-[#99A1AF] tracking-[-2%] leading-[138%] mt-4">
              By proceeding you agree to our Platform Terms & Privacy Notice.
            </motion.p>
          </motion.div>

          {/* Right Column: Auto-Scrolling Images */}
          <div className=" md:block h-[400px] md:h-[600px] w-full max-w-full overflow-hidden relative rotate-[-5.13deg] z-30">

            <div className="grid grid-cols-2 gap-2 md:gap-4 h-full">
              {/* Column 1 - Scrolling Down */}
              <div className="relative h-full overflow-hidden">
                <motion.div
                  variants={marqueeVariants('down')}
                  animate="animate"
                  className="absolute w-full flex flex-col gap-4"
                >
                  {[...images, ...images].map((src, i) => (
                    <div key={`col1-${i}`} className="relative h-[300px] w-full rounded-2xl overflow-hidden">
                      <img src={src} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Column 2 - Scrolling Up */}
              <div className="relative h-full overflow-hidden mt-7">
                <motion.div
                  variants={marqueeVariants('up')}
                  animate="animate"
                  className="absolute w-full flex flex-col gap-4"
                >
                  {[...images, ...images].map((src, i) => (
                    <div key={`col2-${i}`} className="relative h-[300px] w-full rounded-2xl overflow-hidden">
                      <img src={src} alt="Student learning" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Gradient Overlays for smooth entry/exit */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black z-20" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
