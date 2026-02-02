"use client";

import Button from "@/components/Button";
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
                    <p className="text-[#646669] text-base md:text-lg mt-4 font-helvetica">
                        How to join our next cohort
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-[16px] space-y-3 border border-[#E5E7EB] p-8 transition-all duration-300 flex flex-col items-start text-left h-full"
                        >
                            <Button className="!w-[53px] !h-[53px] rounded-full text-white" text={step.number} />

                            <h3 className="text-[#10141D] text-[20px] font-bold mb-4 font-helvetica leading-[126%] tracking-[-2%]">
                                {step.title}
                            </h3>
                            <p className="text-[#646669] text-[16px] font-helvetica leading-[146%] tracking-[-1%]">
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
