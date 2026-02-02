"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const alumniStories = [
    {
        quote: "MyPath2Tech gave me the skills and confidence to land my dream job at Google.",
        name: "Sarah Chen",
        role: "Software Engineer at Google",
        image: "/v2-images/post-1.png"
    },
    {
        quote: "From zero experience to Meta engineer in less than a year. MyPath2Tech changed everything.",
        name: "Marcus Johnson",
        role: "Full Stack Developer at Meta",
        image: "/v2-images/post-2.png"
    },
    {
        quote: "Now I'm building apps used by millions every day. Thank you MyPath2Tech!",
        name: "Priya Patel",
        role: "iOS Developer at Apple",
        image: "/v2-images/post-3.png"
    }
];

const ProgramSuccessStories = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[36px] md:text-[54px] lg:text-[62px] font-bold leading-[120%] tracking-[-3%] text-[#10141D]">
                        Success <span className="text-[#704FE6]">Stories</span>
                    </h2>
                    <p className="text-[#646669] text-base md:text-lg mt-4 font-helvetica max-w-2xl mx-auto">
                        Hear from students who transformed their careers with MyPath2Tech
                    </p>
                </motion.div>

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h3 className="text-[24px] md:text-[26px] font-bold text-[#10141D] tracking-[-2%] leading-[130%]">
                        Alumni Perspectives
                    </h3>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {alumniStories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-[16px] border border-[##E5E7EB] p-8 transition-all duration-300 flex flex-col justify-between h-full"
                        >
                            <p className="text-[#364153] text-lg md:text-[18px] font-helvetica italic mb-8 leading-[146%] tracking-[-1%]">
                                "{story.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                                    <Image
                                        src={story.image}
                                        alt={story.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#10141D] text-lg leading-tight">{story.name}</h4>
                                    <p className="text-[#646669] text-sm font-helvetica mt-1">{story.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramSuccessStories;
