"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";
import { ArrowRight } from "lucide-react";

const PathHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-black">
            {/* Glows */}
           <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#F9C23A]/50 rounded-full blur-[136px] pointer-events-none " />
      <div className="absolute  bottom-0 -right-0 w-[350px] h-[350px] bg-[#F9C23A]/50 rounded-full blur-[136px] pointer-events-none translate-x-1/3 " />

            <div className="container mx-auto px-4 md:px-6 lg:px-14 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[55px] lg:text-[96px] leading-[0.9] font-extrabold tracking-[-3%] mb-8"
                        >
                            <span className="text-white">PLAN YOUR</span> <br />
                            <span className="text-[#F9C23A]">TECH PATH.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[#D1D5DC] text-[18px] md:text-[20px] tracking-[2%] leading-[154%] mb-10 max-w-xl mx-auto lg:mx-0 font-helvetica"
                        >
                            Whether you're just starting or looking to advance, our free program provides the clear roadmap you need to succeed in the technology world.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Button
                                text="Get Started"
                                variant="secondary"
                                icon={<ArrowRight size={18} />}
                                className="!bg-white w-max !text-black !border-white hover:!bg-gray-100"
                            />
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative  w-full"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/v2-images/map.png"
                                alt="Plan Your Path"
                                width={672}
                                height={481}
                                className="object-contain scale-150"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default PathHero;
