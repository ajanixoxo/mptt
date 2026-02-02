"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Is this program really free?",
        answer: "Yes, MyPath2Tech is committed to providing high-quality tech education for free. We believe in removing financial barriers to entry in the tech industry."
    },
    {
        question: "Do I need prior coding experience?",
        answer: "Not at all. We have pathways designed specifically for beginners. However, some advanced courses may have prerequisites which will be clearly listed."
    },
    {
        question: "How long is the enrollment period?",
        answer: "Enrollment periods vary by cohort. Typically, applications open 4 weeks before a program starts and close 1 week before the orientation date."
    },
    {
        question: "What hardware is required?",
        answer: "A basic laptop with at least 8GB RAM and a stable internet connection is sufficient for most of our courses. We can provide guidance on software setup."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[36px] md:text-[54px] lg:text-[62px] font-bold leading-[120%] tracking-[-3%] text-[#10141D]">
                        Frequently <span className="text-[#704FE6]">Asked</span> Questions?
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-[#E5E7EB] rounded-[16px] p-5"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex justify-between items-center py-6 text-left hover:text-[#704FE6] transition-colors group"
                            >
                                <span className="text-lg md:text-xl font-bold text-[#10141D] group-hover:text-inherit">
                                    <span className="text-[#C1C4D6] mr-4">0{index + 1}</span> {faq.question}
                                </span>
                                {activeIndex === index ? (
                                    <Minus className="text-black" size={24} />
                                ) : (
                                    <Plus className="text-black group-hover:text-[#704FE6]" size={24} />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-[#646669] text-base md:text-lg font-helvetica leading-relaxed pl-10">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
