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
            // Check session storage to see if already shown in this session
            const hasShown = sessionStorage.getItem("deadlineModalShown");
            if (!hasShown) {
                setIsVisible(true);
                sessionStorage.setItem("deadlineModalShown", "true");
            }
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
                <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="bg-white rounded-[32px] overflow-hidden flex flex-col md:flex-row max-w-[650px] w-full shadow-2xl relative"
                    >
                        {/* Close Button (Mobile Absolute / Desktop Absolute) */}
                        <button
                            onClick={closeBox}
                            className="absolute top-4 right-4 z-20 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                        >
                            <X size={24} />
                        </button>

                        {/* Left Side - Pink/Purple Gradient with Countdown */}
                        <div className="w-full md:w-[45%] bg-[#704FE6] text-white p-8 relative overflow-hidden flex flex-col justify-center items-center min-h-[300px]">
                            {/* Blob Effect Background */}
                            {/* Blob Effect Background */}
                            <img
                                src="/v2-images/blog.svg"
                                alt=""
                                className="absolute -bottom-20 left-0 w-full h-full object-contain pointer-events-none"
                            />

                            {/* Countdown Grid */}
                            <div className="grid grid-cols-2 gap-x-8 gap-y-8 relative z-10 text-center">
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl md:text-5xl font-bold font-mono leading-none mb-1">
                                        {String(timeLeft.days).padStart(2, "0")}
                                    </span>
                                    <span className="text-sm text-white/80 font-light">Days</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl md:text-5xl font-bold font-mono leading-none mb-1">
                                        {String(timeLeft.hours).padStart(2, "0")}
                                    </span>
                                    <span className="text-sm text-white/80 font-light">Hours</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl md:text-5xl font-bold font-mono leading-none mb-1">
                                        {String(timeLeft.minutes).padStart(2, "0")}
                                    </span>
                                    <span className="text-sm text-white/80 font-light">Minutes</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl md:text-5xl font-bold font-mono leading-none mb-1">
                                        {String(timeLeft.seconds).padStart(2, "0")}
                                    </span>
                                    <span className="text-sm text-white/80 font-light">Seconds</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - White Content */}
                        <div className="w-full md:w-[55%] bg-white p-8 md:p-10 flex flex-col justify-center relative">
                            <div className="space-y-1 mb-6">
                                <h3 className="text-2xl font-bold text-[#10141D] leading-tight">
                                    Application <br /> Deadline:
                                </h3>
                            </div>

                            <div className="mb-8">
                                <p className="text-3xl font-bold text-[#10141D]">Feb 1, 2026</p>
                            </div>

                            <Link
                                href="/apply"
                                className=""
                                onClick={closeBox}
                            >
                                <Button
                                    text="Apply Now"
                                    onClick={closeBox}
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
