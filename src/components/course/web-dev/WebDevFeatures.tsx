"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const featuresData = [
    {
        icon: "/v2-images/Calendar2.svg",
        items: [
            { label: "START DATE", value: "March 15, 2026" },
            { label: "LIVE SESSIONS", value: "Wed, 6:00 PM - 7:30 PM EST" }
        ],
        colSpan: "lg:col-span-2"
    },
    {
        icon: "/v2-images/Caution.svg",
        items: [
            { label: "APPLICATION DEADLINE", value: "February 28, 2026" }
        ],
        colSpan: "lg:col-span-1"
    },
    {
        icon: "/v2-images/Location.svg",
        items: [
            { label: "LOCATION", value: "Remote" }
        ],
        colSpan: "lg:col-span-1"
    }
];

const WebDevFeatures = () => {
    return (
        <section className="py-12 bg-white relative z-20 md:-mt-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {featuresData.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`p-3 bg-white rounded-[16px] border border-[#E5E7EB] flex flex-col gap-4 ${feature.colSpan}`}
                        >
                            <div className="w-[53px] h-[53px]">
                                <Image src={feature.icon} alt="Icon" width={53} height={53} />
                            </div>
                            <div className={`flex flex-col gap-8 ${feature.items.length > 1 ? 'md:flex-row md:gap-12' : ''}`}>
                                {feature.items.map((item, i) => (
                                    <div key={i}>
                                        <p className="text-[#646669] text-sm font-helvetica tracking-[-1%] mb-2">{item.label}</p>
                                        <h3 className="text-[#10141D] font-bold text-[24px] tracking-[-2%] leading-[126%] md:w-max">{item.value}</h3>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebDevFeatures;
