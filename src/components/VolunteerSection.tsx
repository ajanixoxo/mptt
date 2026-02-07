"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

const VolunteerSection = () => {
    return (
        <section className="py-16 px-4 md:px-6 lg:px-14 bg-[#FEFBEA] dark:bg-[#0A0A0B]">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center bg-[#FEFBEA] dark:bg-[#0A0A0B] rounded-[32px] overflow-hidden border border-black dark:border-white/20">

                    {/* Image Side (Left) */}
                    <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative">
                        <img
                            src="/carousel-images/carousel-12.jpg"
                            alt="Volunteers"
                            className="w-full h-full object-cover"
                        />
                        {/* Decorative Elements - optional to match upbeat vibe */}
                        <div className="absolute top-4 left-4 text-white font-bold text-xl drop-shadow-md">
                            {/* Potential sticking element or badge if needed */}
                        </div>
                    </div>

                    {/* Text Side (Right) */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center items-start text-left bg-[#FEFBEA] dark:bg-[#0A0A0B]">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-[#10141D] dark:text-white mb-6 tracking-tight leading-tight"
                        >
                            Volunteer <br /> With Us_
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6 max-w-lg"
                        >
                            <p className="text-[#10141D]/80 dark:text-white/80 text-lg leading-relaxed">
                                Tech is changing the world and you can be part of that change.
                                Volunteering with us gives you the opportunity to empower the next
                                generation of women and introduce them to world of tech!
                            </p>

                            <div className="pt-4">
                                <Button
                                    text="BECOME A VOLUNTEER"
                                    variant="primary"
                                    className="w-max "
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VolunteerSection;
