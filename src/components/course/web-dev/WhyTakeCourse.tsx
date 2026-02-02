"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
    {
        icon: "/v2-images/shield2.svg",
        title: "80% Job Placement ",
        description: "Our graduates land roles at top tech companies within 6 months",

    },
    {
        icon: "/v2-images/hand-on.svg",
        title: "Expert Mentorship",
        description: " Learn from engineers at Google, Meta, Amazon, and more",

    },
    {
        icon: "/v2-images/mentorship.svg",
        title: "Expert Mentorship",
        description: "Get weekly 1-on-1 sessions with senior developers.",
    },
    {
        icon: "/v2-images/career-support.svg",
        title: "Career Counseling",
        description: "Resume reviews, interview prep, and hiring connections.",
    }
];

const WhyTakeCourse = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[36px] md:text-[54px] font-bold text-[#10141D] tracking-[-2%]">
                        Why Take This <span className="text-[#704FE6]">Course</span>
                    </h2>
                    <p className="text-[#646669] text-base md:text-lg mt-4 font-helvetica">
                        Accelerate your journey into software engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-[32px] border border-[#E5E7EB] bg-white  group"
                        >
                            <div
                                className=" mb-6 rounded-2xl flex r transition-transform group-hover:scale-110"

                            >
                                <Image src={benefit.icon} alt={benefit.title} width={67} height={63} />
                            </div>
                            <h3 className="text-[#10141D] text-xl font-bold mb-3">{benefit.title}</h3>
                            <p className="text-[#646669] text-sm font-helvetica leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTakeCourse;
