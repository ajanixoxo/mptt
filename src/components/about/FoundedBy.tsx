import { motion } from "framer-motion";
import Image from "next/image";

const FoundedBy = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full max-w-xl"
                    >
                        <div className="relative w-full  rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
                            <Image
                                src="/v2-images/founded.jpg"
                                alt="Founded by Educators"
                                width={576}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <div className="flex-1 max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[36px] md:text-[54px] lg:text-[62px] max-w-xl font-bold leading-[120%] tracking-[-3%] text-[#10141D] mb-8"
                        >
                            Founded by <span className="text-[#704FE6]">Educators</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-6"
                        >
                            <p className="text-[#646669] text-[16px] leading-[140%] tracking-[-1%] font-helvetica">
                                MyPath2Tech was founded in 2013 by engineers who saw firsthand the gap between what students learn in school and what employers need in the workplace.
                            </p>
                            <p className="text-[#646669] text-[16px] leading-[140%] tracking-[-1%] font-helvetica">
                                We started with a simple idea: create high-quality, industry-relevant courses and make them completely free for students. Today, we've trained over 30,000 students and partnered with hundreds of companies.
                            </p>
                            <p className="text-[#646669] text-[16px] leading-[140%] tracking-[-1%] font-helvetica">
                                Our success comes from staying true to our mission—we don't charge students, we don't take equity, and we don't compromise on quality. We're supported by companies that believe in building a more diverse and skilled tech workforce.
                            </p>

                            
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FoundedBy;
