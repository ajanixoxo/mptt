import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#F4F0FF]">
      {/* Radial Glows */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#F9C23A]/50 rounded-full blur-[136px] pointer-events-none " />
      <div className="absolute z-10 bottom-[0px] right-0 w-[350px] h-[350px] bg-[#F9C23A]/30 rounded-full blur-[136px] pointer-events-none translate-x-1/3 " />

      <div className="container mx-auto px-4 md:px-6 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[55px]  lg:text-[96px] leading-[0.9] font-extrabold tracking-[-3%]"
            >
              <span className="text-[#10141D]">OUR</span> <br />
              <span className="text-[#F9C23A]">MISSION.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#646669] text-[18px] md:text-[20px] tracking-[2%] leading-[154%]  mx-auto lg:mx-0  font-helvetica font-regular"
            >
              At MyPath2Tech, we believe that education is the ultimate equalizer. Our mission is to bridge the gap between passion and opportunity, empowering individuals from all backgrounds to thrive in the ever-evolving world of technology.
            </motion.p>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative aspect-[4/3] w-full max-w-2xl lg:max-w-none"
          >
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/v2-images/mission-hero.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Subtle glow / decoration */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
