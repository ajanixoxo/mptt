"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import Button from "./Button";

const DeadlineModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    const targetDate = new Date("2026-02-01T00:00:00").getTime();

    useEffect(() => {
        // Show modal after 5 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const closeBox = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-4 right-4 z-[9999] flex items-end justify-end p-4 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, x: 100, y: 100 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, x: 100, y: 100 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-white rounded-[20px] overflow-hidden flex flex-row max-w-[400px] md:max-w-[550px] w-full shadow-2xl relative pointer-events-auto border border-gray-100 dark:border-gray-800"
                    >
                        {/* Left Side - Purple Gradient with Countdown */}
                        <div className="w-[45%] bg-[#704FE6] text-white p-3 md:p-6 relative overflow-hidden flex flex-col justify-center items-center min-h-[180px]">
                            {/* Blob Effect Background */}
                            <img
                                src="/v2-images/blog.svg"
                                alt=""
                                className="absolute -bottom-10 left-0 w-full h-full object-contain pointer-events-none opacity-50 contrast-125"
                            />

                            {/* Countdown Grid */}
                            <div className="grid grid-cols-2 gap-x-2 md:gap-x-6 gap-y-3 md:gap-y-6 relative z-10 text-center w-full">
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl md:text-3xl font-bold font-mono leading-none mb-0.5">
                                        {String(timeLeft.days).padStart(2, "0")}
                                    </span>
                                    <span className="text-[9px] md:text-xs text-white/80 font-light">Days</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl md:text-3xl font-bold font-mono leading-none mb-0.5">
                                        {String(timeLeft.hours).padStart(2, "0")}
                                    </span>
                                    <span className="text-[9px] md:text-xs text-white/80 font-light">Hours</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl md:text-3xl font-bold font-mono leading-none mb-0.5">
                                        {String(timeLeft.minutes).padStart(2, "0")}
                                    </span>
                                    <span className="text-[9px] md:text-xs text-white/80 font-light">Min</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl md:text-3xl font-bold font-mono leading-none mb-0.5">
                                        {String(timeLeft.seconds).padStart(2, "0")}
                                    </span>
                                    <span className="text-[9px] md:text-xs text-white/80 font-light">Sec</span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/20 rounded-full overflow-hidden z-10">
                                <motion.div
                                    className="h-full bg-white rounded-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "35%" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </div>

                        {/* Right Side - White Content */}
                        <div className="w-[55%] bg-white p-4 md:p-6 flex flex-col justify-center relative items-start">
                            {/* Close Button */}
                            <button
                                onClick={closeBox}
                                className="absolute top-2 right-2 z-20 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
                            >
                                <X size={18} />
                            </button>

                            <div className="space-y-0.5 mb-3 mt-2">
                                <h3 className="text-sm font-bold text-[#10141D] leading-tight">
                                    Application <br /> Deadline:
                                </h3>
                                <p className="text-lg md:text-xl font-extrabold text-[#10141D] tracking-tight">Feb 1, 2026</p>
                            </div>

                            <Link
                                href="/apply"
                                className="w-full mt-auto"
                                onClick={closeBox}
                            >
                                <Button
                                    text="Apply Now"
                                    onClick={closeBox}
                                    className="w-full justify-center !bg-[#10141D] !text-white !text-xs !py-2.5 !h-auto rounded-full hover:!bg-gray-900 border-none"
                                />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DeadlineModal;
