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
                                    Embark on a transformative journey into the world of web development. This comprehensive course is designed to take you from a curious beginner to a proficient developer, capable of building complex, modern web applications from scratch.
                                </p>
                                <p>
                                    Our curriculum is meticulously crafted to cover the most relevant technologies in today's tech industry. You'll dive deep into HTML5, CSS3, JavaScript (ES6+), and modern frameworks like React and Next.js.
                                </p>
                                <p>
                                    Beyond technical skills, we focus on industry best practices, collaboration tools like Git/GitHub, and project management methodologies used by top engineering teams globally.
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
                                    { label: "Level", value: "Intermediate" },
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
