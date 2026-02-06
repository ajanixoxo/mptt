"use client";

import { motion } from "framer-motion";

const CourseOverview = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div className="w-full md:w-[50%]">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[36px] md:text-[48px] font-bold text-[#10141D] tracking-[-2%] mb-8">
                                Course Overview
                            </h2>
                            <div className="space-y-3 text-[#646669] text-[16px] font-helvetica leading-relaxed">
                                <p>
                                    Your first website, built from scratch. By the end, you&apos;ll have a live site in your portfolio and a much clearer idea if coding is your thing.
                                </p>
                                <p>
                                    You&apos;ll build a complete business website. You choose the type: restaurant, gym, café, barbershop, or something else. Skills covered include HTML, CSS, JavaScript, and Git/GitHub. The result is a real portfolio piece you can use for college apps.
                                </p>
                                <p>
                                    This course is designed for complete beginners. You&apos;ll actually build something (not just follow tutorials), in a small cohort with real mentorship. No pressure, just exploration.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Card - Course Details */}
                    <div className="w-full md:w-[50%]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#EFF0F5] w-full rounded-[16px] px-8 py-4 "
                        >
                            <h3 className="text-[#10141D] text-2xl font-bold mb-8">Course Details</h3>

                            <div className="space-y-6">
                                {[
                                    { label: "Duration", value: "12 Weeks" },
                                    { label: "Commitment", value: "10-15 Hours/Week" },
                                    { label: "Level", value: "Beginner" },
                                    { label: "Cost", value: "Fully Funded" }
                                ].map((detail, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-4 border-b border-[#D1D5DC] last:border-0">
                                        <span className="text-[#646669] font-medium">{detail.label}</span>
                                        <span className="text-[#10141D] font-bold">{detail.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseOverview;
