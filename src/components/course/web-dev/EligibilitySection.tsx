"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const requirements = [
    "Must be at least 18 years old",
    "Access to a computer and stable internet connection",
    "Commitment to attend live sessions 2x per week",
    "Willingness to dedicate 10-15 hours per week to coursework",
    "No prior programming experience required"
];

const EligibilitySection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[36px] md:text-[54px] lg:text-[72px] font-bold text-[#10141D] tracking-[-3%] leading-[120%]">
                        Eligibility <span className="text-[#704FE6]">Requirements</span>
                    </h2>
                    <p className="text-[#646669] text-base md:text-lg mt-4 font-helvetica tracking-[-1%]">
                        Here's what you need to apply
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-white rounded-[40px] border-2 border-[#10141D] p-6 md:p-10"
                >
                    <div className="space-y-8">
                        {requirements.map((req, idx) => (
                            <div key={idx} className="flex items-center gap-6">
                                <div className="flex-shrink-0 text-[#704FE6]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
                                        <path d="M7 12L10.5 15.5L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-[#2C2B2DB2]/70 text-lg md:text-[20px] font-helvetica tracking-[-1%] leading-tight">
                                    {req}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EligibilitySection;
