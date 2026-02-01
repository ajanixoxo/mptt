import { motion } from "framer-motion";

const RealPaths = () => {
    return (
        <section className="py-16 md:py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                <div className="">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[36px] md:text-[54px] text-center md:text-left lg:text-[62px] font-semibold leading-[120%] tracking-[-3%] mb-8 text-[#10141D]"
                    >
                        Building <span className="text-[#704FE6]">Real Paths</span> Into Tech
                    </motion.h2>

                    <div className="space-y-6 text-center md:text-left">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[#646669] text-[18px] md:text-[20px] leading-[154%] tracking-[-2%] font-helvetica"
                        >
                            At MyPath2Tech, we are dedicated to creating accessible and direct avenues for students to enter the tech industry. Our programs are designed with the future in mind, ensuring that every student has the tools they need to succeed in a competitive landscape.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[#646669] text-[18px] md:text-[20px] leading-[154%] tracking-[-2%] font-helvetica"
                        >
                            We believe that tech education should not be a luxury, but a right. That's why we focus on providing high-quality, free resources and mentorship to those who need it most, bridging the socio-economic gap in the technology sector.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-[#646669] text-[18px] md:text-[20px] leading-[154%] tracking-[-2%] font-helvetica"
                        >
                            From software engineering to data science, our paths are built by industry experts who know what it takes to land a job and grow in a career. Our community-driven approach ensures that you're never alone on your journey. Join us as we build the next generation of tech leaders.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealPaths;
