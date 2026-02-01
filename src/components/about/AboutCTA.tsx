
import Button from "../Button";
import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
    return (
        <section className="relative w-full bg-[#704FE6] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-14 relative z-10">
                <div className="flex  items-center justify-center min-h-[350px] pt-12 lg:pt-0">

                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl mb-8 lg:mb-0 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-white mb-4 leading-[120%] tracking-[-3%]">
                            Support Our Mission.
                        </h2>
                        <p className="text-[#D1D5DC] text-[18px] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            Become a partner and help us build a more inclusive tech future together. Our community is growing, and we want you to be part of it.
                        </p>

                        <div className="flex flex-row items-center justify-center  gap-3 sm:gap-4 w-full sm:w-auto">
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
                                onClick={() => window.location.href = "/path"}
                                className="!text-white !border-white hover:!bg-white/10 w-max !text-sm sm:!text-base whitespace-nowrap min-w-0"
                            />
                        </div>
                    </div>

                   

                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
