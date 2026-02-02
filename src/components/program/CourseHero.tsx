"use client";

import { motion } from "framer-motion";

const CourseHero = () => {
    return (
        <section className="relative h-screen  flex items-center justify-center overflow-hidden bg-[#F4F0FF]">
            {/* Radial Glows - Same as About page */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#F9C23A]/30 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute z-10 bottom-[0px] right-0 w-[350px] h-[350px] bg-[#F9C23A]/30 rounded-full blur-[136px] pointer-events-none translate-x-1/3 " />


            <div className="container mx-auto px-4 md:px-6 lg:px-14 relative z-10">
                <div className="mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[55px] lg:text-[96px] leading-[0.9] font-extrabold tracking-[-3%] text-[#10141D] mb-8"
                    >
                        EXPLORE OUR 
                        <span className="text-[#10141D]"> COURSES.</span>
                    </motion.h1>        

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#646669] text-[18px] md:text-[20px] tracking-[-1%] leading-[154%] font-helvetica max-w-2xl mx-auto"
                    >
                        Whether you're starting your journey or leveling up, our industry-led programs provide the skills and support you need to succeed.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default CourseHero;
