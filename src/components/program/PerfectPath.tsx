"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, User, Briefcase, Clock } from "lucide-react";
import Button from "../Button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const PerfectPath = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Shape */}
            <div className="absolute left-[7%] bottom-[7%] w-[250px] h-auto -z-0 opacity-80 pointer-events-none">
                <Image
                    src="/v2-images/purple-shape.svg"
                    alt="Decorative background"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-14 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[36px] md:text-[54px] lg:text-[62px] font-bold leading-[120%] tracking-[-3%] text-[#10141D]">
                        Find Your <span className="text-[#704FE6]">Perfect Path</span>
                    </h2>
                    <p className="text-[#646669] text-base md:text-lg mt-4 font-helvetica max-w-2xl mx-auto leading-[1.6] tracking-[0.02em]">
                        See how students typically progress through our curriculum.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-[#FF6A5C] rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#10141D]"
                >
                    {/* Header */}
                    <div className=" py-6 px-8 text-center">
                        <h3 className="text-[#10141D] text-xl md:text-2xl font-bold">Build Your Learning Path</h3>
                    </div>

                    {/* Form Body */}
                    <div className="p-8 bg-white border rounded-t-[40px]  space-y-8">
                        {/* Row 1 */}
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full">
                            <span className="text-[#10141D] font-semibold text-[14px] whitespace-nowrap">I'm a</span>

                            <div className="w-full lg:w-auto flex-1">
                                <Select>
                                    <SelectTrigger className="w-full pl-12 pr-4 py-6 rounded-xl border border-gray-200 bg-white text-gray-500 hover:border-[#704FE6] focus:ring-2 focus:ring-[#704FE6] transition-all relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <User size={20} />
                                        </div>
                                        <SelectValue placeholder="Select your level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="beginner">Beginner (Year 1)</SelectItem>
                                        <SelectItem value="intermediate">Intermediate (Year 2)</SelectItem>
                                        <SelectItem value="advanced">Advanced (Year 3)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <span className="text-[#10141D] font-semibold text-[14px] whitespace-nowrap">looking to</span>

                            <div className="w-full lg:w-auto flex-1">
                                <Select>
                                    <SelectTrigger className="w-full pl-12 pr-4 py-6 rounded-xl border border-gray-200 bg-white text-gray-500 hover:border-[#704FE6] focus:ring-2 focus:ring-[#704FE6] transition-all relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <Briefcase size={20} />
                                        </div>
                                        <SelectValue placeholder="Select your interest" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="web-dev">Web Development</SelectItem>
                                        <SelectItem value="ai">AI & Machine Learning</SelectItem>
                                        <SelectItem value="data">Data Science</SelectItem>
                                        <SelectItem value="security">Cybersecurity</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full">
                            <span className="text-[#10141D] font-semibold text-[14px] whitespace-nowrap">on a</span>

                            <div className="w-full">
                                <Select>
                                    <SelectTrigger className="w-full pl-12 pr-4 py-6 rounded-xl border border-gray-200 bg-white text-gray-500 hover:border-[#704FE6] focus:ring-2 focus:ring-[#704FE6] transition-all relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <Clock size={20} />
                                        </div>
                                        <SelectValue placeholder="Select your availability" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="full-time">Full-time (40h/week)</SelectItem>
                                        <SelectItem value="part-time">Part-time (20h/week)</SelectItem>
                                        <SelectItem value="self-paced">Self-paced</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button className="w-full bg-[#10141D] hover:bg-black/90 text-white font-medium py-5 rounded-full flex items-center justify-center gap-2 transition-all group">
                                Get My Complete Roadmap <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-center text-gray-400 text-sm mt-4 font-helvetica">
                                Free personalized guidance based on your goals
                            </p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PerfectPath;
