"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Milestone {
    title: string;
    description: string;
    iconColor: string;
    iconLetter: string;
}

interface YearData {
    year: number;
    subtitle: string;
    milestones: Milestone[];
}

const journeyData: YearData[] = [
    {
        year: 1,
        subtitle: "Foundations",
        milestones: [
            {
                title: "Intro to Web Development",
                description: "Basic HTML, CSS & JS fundamentals",
                iconColor: "bg-[#704FE6]",
                iconLetter: "W"
            },
            {
                title: "Advanced Web Development",
                description: "Complex React apps & UI/UX principles",
                iconColor: "bg-[#704FE6]",
                iconLetter: "A"
            }
        ]
    },
    {
        year: 2,
        subtitle: "Logic & Scalability",
        milestones: [
            {
                title: "Backend Engineering",
                description: "Node.js, Databases & API Design",
                iconColor: "bg-[#704FE6]",
                iconLetter: "B"
            },
            {
                title: "Systems Architecture",
                description: "Scalable systems and cloud computing",
                iconColor: "bg-[#704FE6]",
                iconLetter: "S"
            }
        ]
    },
    {
        year: 3,
        subtitle: "Specialization",
        milestones: [
            {
                title: "AI Engineering",
                description: "Machine Learning & AI Integration",
                iconColor: "bg-[#704FE6]",
                iconLetter: "AI"
            },
            {
                title: "Mobile Development",
                description: "Native apps with React Native",
                iconColor: "bg-[#704FE6]",
                iconLetter: "M"
            }
        ]
    },
    {
        year: 4,
        subtitle: "Professional Launch",
        milestones: [
            {
                title: "Capstone Project",
                description: "Real-world production deployment",
                iconColor: "bg-[#704FE6]",
                iconLetter: "C"
            },
            {
                title: "Industry Ready",
                description: "Interview prep & job placement",
                iconColor: "bg-[#704FE6]",
                iconLetter: "I"
            }
        ]
    }
];

const JourneyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = journeyData.length - 1;
            if (nextIndex >= journeyData.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-[36px] md:text-[54px] lg:text-[62px] font-bold leading-[120%] tracking-[-3%] text-[#10141D]">
                        Your <span className="text-[#704FE6]">4-Year</span> Journey
                    </h2>
                    <p className="text-[#646669] text-base md:text-lg mt-4 font-helvetica">
                        Plan your tech career step-by-step with our comprehensive roadmap.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation Arrows */}
                    <div className="absolute top-10 right-4 flex gap-4 z-20">
                        <button
                            onClick={() => paginate(-1)}
                            className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black transition-colors  border-[#000612]
        shadow-[0px_12px_13.1px_-8px_rgba(61,61,61,0.05),inset_0px_2px_4px_rgba(255,255,255,0.31)]"
                            aria-label="Previous year"
                        >
                            <ChevronLeft size={24} className="text-white" />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black transition-colors  border-[#000612]
        shadow-[0px_12px_13.1px_-8px_rgba(61,61,61,0.05),inset_0px_2px_4px_rgba(255,255,255,0.31)]"
                            aria-label="Next year"
                        >
                            <ChevronRight size={24} className="text-white" />
                        </button>
                    </div>

                    <div className="relative h-[400px] md:h-[350px] overflow-hidden rounded-[32px] border-[3px] border-[#10141D] bg-white p-6 md:p-12 shadow-sm">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute inset-0 p-6 md:p-12 flex flex-col justify-center"
                            >
                                <div className="mb-8">
                                    <h3 className="text-[28px] md:text-[32px] font-bold text-[#10141D]">Year {journeyData[currentIndex].year}</h3>
                                    <p className="text-[#646669] font-regular text-[16px] leading-[140%] tracking-[-1%]">{journeyData[currentIndex].subtitle}</p>
                                </div>

                                <div className="space-y-4">
                                    {journeyData[currentIndex].milestones.map((milestone, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-[#EFF0F5] border border-[#F4F0FF]">
                                            <div className={`w-10 h-10 rounded-lg ${milestone.iconColor} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                                                {milestone.iconLetter}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#10141D] leading-tight">{milestone.title}</h4>
                                                <p className="text-[#646669] text-sm md:text-base font-helvetica">{milestone.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {journeyData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-8 bg-[#704FE6]" : "bg-gray-200"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneyCarousel;
