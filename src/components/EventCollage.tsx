"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EventCollage = () => {
    // Generate array of image paths for carousel-1 to carousel-17
    const images = Array.from({ length: 17 }, (_, i) => `/carousel-images/carousel-${i + 1}.jpg`);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-20 px-4 md:px-6 lg:px-14 bg-white dark:bg-[#0A0A0B]">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-[62px] font-bold leading-[120%] tracking-[-3%] text-[#10141D] dark:text-white"
                    >
                        Our <span className="text-[#704FE6]">Events</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#646669] text-base md:text-lg max-w-2xl mx-auto mt-4"
                    >
                        Relive the moments from our past workshops, hackathons, and community gatherings.
                    </motion.p>
                </div>

                <motion.div
                    className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative rounded-2xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="relative w-full">
                                <img
                                    src={src}
                                    alt={`MyPath2Tech Event ${index + 1}`}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EventCollage;
