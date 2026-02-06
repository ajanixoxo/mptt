"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";

const WebDevHero = () => {
    return (
        <section className="relative pt-40 pb-24 overflow-hidden bg-black min-h-[600px] flex items-center">
            {/* Background Effects */}


            <div className="container mx-auto px-4 md:px-6 lg:px-14 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-bold leading-[1.1] tracking-[-3%] text-white">
                                WEB <br />
                                <span className="text-[#F9C23A]">DEVELOPMENT.</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-xl font-helvetica leading-relaxed">
                                Build a real website. Explore if tech is right for you. Your first website, built from scratch. By the end, you&apos;ll have a live site in your portfolio and a much clearer idea if coding is your thing.
                            </p>

                            <div className="flex flex-wrap  justify-center lg:justify-start gap-4 mt-8">
                                <div className="flex items-center gap-2 rounded-full  text-white text-sm">
                                    <img src="/v2-images/certifcate.png" alt="Location" className="w-[45px] " />
                                    <span className="text-[14px] font-bold logo text-[#F9C23A]">100% Free</span>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Button
                                    text="Get Started"
                                    variant="secondary"
                                    className="!bg-white w-max !text-black mx-auto md:mx-0 !border-white hover:!bg-gray-100 px-10 py-4 text-lg"
                                    icon={<ArrowRight size={20} />}
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <Image
                                src="/v2-images/code.png"
                                alt="Code and Web Development Assets"
                                width={700}
                                height={500}
                                className="w-full h-auto scale-[200%] md:scale-[300%] object-contain relative z-10"
                                priority
                            />

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDevHero;
