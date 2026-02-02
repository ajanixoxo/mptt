"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const curriculumItems = [
    "JavaScript", "React", "Node.js", "APIs", "Databases", "Git & Github", "Testing"
];

const projectsItems = [
    "Social media application", "E-commerce platform", "Personal portfolio website", "Mobile app with React Native"
];

const potentialRoles = [
    "Front-End Developer", "Back-End Developer", "Full-Stack Engineer", "Mobile Developer"
];

const LearningPath = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[20%] -right-[5%] w-[250px] h-[295px] z-0 pointer-events-none">
                <Image src="/v2-images/purple-shape.svg" alt="" fill className="object-contain" />
            </div>
            <div className="absolute bottom-0 left-[5%] w-[250px] h-[250px] z-0 pointer-events-none rotate-180">
                <Image src="/v2-images/purple-shape.svg" alt="" fill className="object-contain" />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-14 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[36px] md:text-[54px] lg:text-[72px] font-bold text-[#10141D] tracking-[-3%] leading-[120%]"
                    >
                        What you'll <span className="text-[#704FE6]">Learn</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#646669] text-base md:text-lg mt-4 font-helvetica max-w-2xl mx-auto tracking-[-1%] leading-[140%]"
                    >
                        We serve students, colleges, and employers to create a more inclusive tech ecosystem
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 inline-block bg-[#F9C23A] text-[#10141D] font-bold px-6 py-2 rounded-[8px] text-[16px]"
                    >
                        Web Explorer
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Main Curriculum Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-[2] bg-white rounded-[16px] border-2 border-[#10141D] p-5 md:p-6 shadow-sm"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-4 mb-3">
                            <div className="w-20 h-14 relative rounded-[8px] overflow-hidden bg-gray-100 flex-shrink-0">
                                <Image
                                    src="/v2-images/post-1.png"
                                    alt="Foundations"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-[#10141D] mb-0.5">Foundations of Web Development</h3>
                                <p className="text-[#646669] text-sm font-helvetica">HTML, CSS, JavaScript basics</p>
                            </div>
                        </div>

                        <p className="text-[#646669] text-[16px] font-helvetica leading-[140%] mb-4 max-w-4xl">
                            Learn to design, develop, and deploy web and mobile applications that solve real-world problems. Master modern programming languages and frameworks while building a portfolio of projects.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[#E5E7EB] pt-4">
                            <div>
                                <h4 className="text-[#10141D] text-xl font-bold mb-3">What You'll Learn</h4>
                                <ul className="space-y-2">
                                    {curriculumItems.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[#646669] text-[16px] font-helvetica">
                                            <div className="flex-shrink-0 text-[#F9C23A]">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M7 12L10.5 15.5L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[#10141D] text-xl font-bold mb-3">Projects You'll Build</h4>
                                <ul className="space-y-2">
                                    {projectsItems.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[#646669] text-[16px] font-helvetica">
                                            <div className="w-3 h-[2px] bg-[#F9C23A] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Career Outcomes Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-white rounded-[16px] border-2 border-[#10141D] p-8 md:p-10 shadow-sm flex flex-col"
                    >
                        <h3 className="text-[#10141D] text-3xl font-bold mb-10">Career Outcomes</h3>

                        <div className="space-y-10 flex-grow">
                            <div>
                                <h3 className="text-[#10141D] text-xl font-bold mb-6">Potential Roles</h3>
                                <ul className="space-y-4">
                                    {potentialRoles.map((role, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[#646669] text-[18px] font-helvetica">
                                            <div className="w-2 h-2 rounded-full bg-[#F9C23A]" />
                                            {role}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="font-bricolage">
                                <p className="text-[#10141D] text-xl font-bold mb-2">Average Salary Range</p>
                                <p className="text-[#F9C23A] text-2xl md:text-3xl font-bold">$70,000 - $120,000</p>
                            </div>

                            <div className="font-bricolage">
                                <p className="text-[#10141D] text-xl font-bold mb-2">Industry Demand</p>
                                <p className="text-[#F9C23A] text-3xl font-bold">86%</p>
                                <p className="text-[#646669] text-sm !font-helvetica mt-1 text-opacity-70">From Google</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LearningPath;
