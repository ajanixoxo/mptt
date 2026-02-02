"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhyPlan = () => {
    const cards = [
        {
            title: "Personalized recommendations",
            description: "Tailored course paths based on your interests and career goals.",
            icon: "/v2-images/arrow.svg",
            delay: 0.1
        },
        {
            title: "Flexible Timeline",
            description: "Learn at your own pace with modular courses that fit your schedule.",
            icon: "/v2-images/Calendar.svg",
            delay: 0.2
        },
        {
            title: "Career Support",
            description: "Direct access to mentors and industry professionals to guide your journey.",
            icon: "/v2-images/career.svg",
            delay: 0.3
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[36px] md:text-[54px] lg:text-[62px] font-bold leading-[120%] tracking-[-3%] text-[#10141D]">
                        Why <span className="text-[#704FE6]">Plan</span> With Us?
                    </h2>
                    <p className="text-[#646669] text-[16px] md:text-lg max-w-2xl mx-auto mt-4 font-helvetica leading-[140%] tracking-[-1%]">
                        We provide the roadmap and support you need to navigate your tech career.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: card.delay }}
                            className="p-8 rounded-[32px] border border-[#E5E7EB] bg-white hover:shadow-xl transition-all duration-500 text-left"
                        >
                            <div className="w-[84px] h-[84px] mb-6  md:mx-0">
                                <Image src={card.icon} alt={card.title} width={64} height={64} className="w-full h-full object-contain" />
                            </div>

                            <h3 className="text-2xl font-bold text-[#10141D] mb-4">{card.title}</h3>
                            <p className="text-[#646669] text-base md:text-[16px] leading-[140%] tracking-[-1%] font-helvetica">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyPlan;
