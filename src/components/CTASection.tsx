"use client";

import Image from "next/image";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
    return (
        <section className="relative w-full bg-[#704FE6] overflow-hidden">
            {/* Coral shape background */}
            <div className="absolute w-1/2   -right-[230px] bottom-0 rotate-[230deg] pointer-events-none">
                <Image
                    src="/v2-images/coral.svg"
                    alt="Background shape"
                    width={400}
                    height={400}
                    className="object-cover object-right-bottom"
                />
            </div>  

            <div className="container mx-auto px-4 md:px-6 lg:px-14 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[350px] pt-12 lg:pt-0">

                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl mb-8 lg:mb-0 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-white mb-4 leading-[120%] tracking-[-3%]">
                            Ready to Start Your Journey
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-light">
                            Join 30,000+ students who are building their future in tech. Applications are open now.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button
                                text="Apply Now"
                                variant="secondary"
                                icon={<ArrowRight size={18} />}
                                onClick={() => window.location.href = "/apply"}
                                className=" !bg-white w-max !text-[#10141D] !border-white hover:!bg-gray-100"
                            />
                            <Button
                                text="Plan Your Path"
                                variant="outline"
                                onClick={() => window.location.href = "/path"}
                                className="w-full sm:w-auto min-w-[160px] !text-white !border-white hover:!bg-white/10"
                            />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 relative h-[250px] md:h-[350px] lg:h-[450px] w-full flex items-end justify-center lg:justify-end">
                        <div className="absolute right-[-250px] bottom-[-30px] w-full h-full ">
                            <Image
                                src="/v2-images/cta-user.png"
                                alt="Student pointing"
                                fill
                                className="object-contain rotate-[-20deg] object-bottom"
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
