"use client";

import { motion } from "framer-motion";
import Button from "../Button";

const reasons = [
    {
        number: "1",
        title: "100% Free",
        description: "All our courses are completely free. No hidden costs, no tuition fees."
    },
    {
        number: "2",
        title: "Industry Experts",
        description: "Learn from instructors working at top tech companies like Google, Meta, and Amazon."
    },
    {
        number: "3",
        title: "Career Support",
        description: "Get personalized career coaching, resume reviews, and interview prep."
    },
    {
        number: "4",
        title: "Community",
        description: "Join a supportive community of 30,000+ students and alumni."
    }
];

const WhyChoose = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[36px] md:text-[54px] lg:text-[72px] font-bold leading-[120%] tracking-[-3%] text-[#10141D]"
                    >
                        Why <span className="text-[#704FE6]">Choose</span> MyPath2Tech?
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-[16px] space-y-3 border border-[#E5E7EB] p-8 transition-all duration-300 flex flex-col items-start text-left h-full"
                        >
                            <Button className="!w-[53px] !h-[53px] rounded-full text-white" text={reason.number}/>
                                
                            <h3 className="text-[#10141D] text-[20px] font-bold mb-4 font-helvetica leading-[126%] tracking-[-2%]">
                                {reason.title}
                            </h3>
                            <p className="text-[#646669] text-[16px] font-helvetica leading-[146%] tracking-[-1%]">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
