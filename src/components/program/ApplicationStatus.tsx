"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import { ArrowRight } from "lucide-react";

const ApplicationStatus = () => {
    return (
        <section className="relative w-full bg-[#704FE6] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-14 py-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className=" rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col items-center text-center group"
                >



                    <h2 className="text-2xl md:text-[72px] font-bold text-white mb-4 relative z-10 leading-[120%] tracking-[-3%]">Check Your Application Status</h2>
                    <p className="text-[#D1D5DC] text-base md:text-[20px] mb-8 max-w-2xl relative z-10 font-helvetica">
                        Enter your email to view the status of your MyPath2Tech application.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl relative z-10 items-center justify-center">
                        <div className="relative  w-full md:w-[70%] group/input">
                            <div className="absolute left-7 top-1/2 -translate-y-1/2 text-white/80">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_32_3770)">
                                        <path d="M14.1583 2.91602H5.83333C3.99238 2.91602 2.5 4.4084 2.5 6.24935V13.7493C2.5 15.5903 3.99238 17.0827 5.83333 17.0827H14.1583C15.9993 17.0827 17.4917 15.5903 17.4917 13.7493V6.24935C17.4917 4.4084 15.9993 2.91602 14.1583 2.91602Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.5 8.74219C2.5 9.26719 2.775 9.75052 3.225 10.0172L8.84165 13.3672C9.54999 13.7922 10.45 13.7922 11.1583 13.3672L16.775 10.0172C17.225 9.75052 17.5 9.26719 17.5 8.74219" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_32_3770">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </div>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-white/10 border border-white/30 rounded-full py-6 pl-16 pr-8 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all font-helvetica text-lg md:text-xl"
                            />
                        </div>
                        <Button
                            text="Check Status"
                            variant="secondary"
                            icon={<ArrowRight size={18} />}
                            className="!bg-white w-full sm:w-max !text-[#704FE6] !border-white hover:!bg-gray-100 !py-6 px-10 rounded-full font-bold text-lg"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ApplicationStatus;
