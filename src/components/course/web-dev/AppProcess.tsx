"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "1",
        title: "Online Application",
        description: "Fill out our simple interest form to get started."
    },
    {
        number: "2",
        title: "Cognitive Assessment",
        description: "A quick test to understand your aptitude."
    },
    {
        number: "3",
        title: "Interview",
        description: "A friendly chat with our recruitment team."
    },
    {
        number: "4",
        title: "Get Accepted",
        description: "Receive your offer and join the cohort."
    }
];

const AppProcess = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[36px] md:text-[54px] font-bold text-[#10141D] tracking-[-2%]">
                        Application <span className="text-[#704FE6]">Process</span>
                    </h2>
                    <p className="text-[#646669] text-base md:text-lg mt-4 font-helvetica-light">
                        How to join our next cohort
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Progress line for desktop */}
                    <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gray-100 -z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center relative z-10"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#10141D] text-white flex items-center justify-center text-xl font-bold mb-6 border-4 border-white shadow-lg">
                                {step.number}
                            </div>
                            <h3 className="text-[#10141D] text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-[#646669] text-sm font-helvetica-light leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppProcess;
