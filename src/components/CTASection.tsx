"use client";

import Image from "next/image";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
    return (
        <section className="relative w-full bg-[#704FE6] overflow-hidden">
            {/* Coral shape background */}
            {/* Coral shape background - Positioned to be visible but subtle */}
            <div className="absolute md:w-[400px] w-[300px] md:h-[400px] right-[-100px] md:right-[-50px] bottom-[-100px] pointer-events-none opacity-80">
                <Image
                    src="/v2-images/coral.svg"
                    alt="Background shape"
                    width={400}
                    height={400}
                    className="object-contain"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-14 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[350px] pt-12 lg:pt-0">

                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl mb-8 lg:mb-0 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-white mb-4 leading-[120%] tracking-[-3%]">
                            Ready to Start Your Journey
                        </h2>
                        <p className="text-[#D1D5DC] text-[18px] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            Join 30,000+ students who are building their future in tech. Applications are open now.
                        </p>

                        <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
                            <Button
                                text="Apply Now"
                                variant="secondary"
                                icon={<ArrowRight size={18} />}
                                onClick={() => window.location.href = "/apply"}
                                className=" !bg-white w-max !text-[#10141D] !border-white hover:!bg-gray-100 !px-4 sm:!px-6 !text-sm sm:!text-base whitespace-nowrap"
                            />
                            <Button
                                text="Plan Your Path"
                                variant="outline"
                                onClick={() => window.location.href = "/program"}
                                className="!text-white !border-white hover:!bg-white/10 w-max !text-sm sm:!text-base whitespace-nowrap min-w-0"
                            />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 relative h-[700px] lg:h-[500px] w-full flex items-end justify-center lg:justify-end mt-8 lg:mt-0">
                        {/* Image container using width/height for stability */}
                        <div className="relative w-auto h-full flex items-end">
                            <Image
                                src="/v2-images/cta-user.png"
                                alt="Student pointing"
                                width={600}
                                height={700}
                                className="object-contain h-full scale-125 lg:scale-100 lg:w-auto translate-x-[100px] lg:translate-x-[300px] lg:translate-y-6 rotate-[-10deg]"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTASection;
