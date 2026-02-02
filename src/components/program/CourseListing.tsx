"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../Button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const courses = [
    {
        title: "Web Development",
        description: "Master the art of building modern, responsive websites and web applications.",
        features: [
            "Build production-ready applications with industry best practices",
            "Collaborate on real-world projects with peers and mentors",
            "Join a community of thousands of aspiring developers",
            "Get career support and interview preparation"
        ],
        duration: "12 weeks",
        commitment: "10-15 hrs",
        price: "100% Free",
        link: "/courses/web-development"
    },
    {
        title: "AI Engineering",
        description: "Build and deploy intelligent systems using machine learning and AI tools.",
        features: [
            "Develop scalable AI applications with industry-standard tools",
            "Work with real-world datasets and solve complex business problems",
            "Master machine learning frameworks and deployment strategies",
            "Build a professional AI portfolio and prepare for technical interviews"
        ],
        duration: "12 weeks",
        commitment: "12-18 hrs",
        price: "100% Free",
        badge: "Partnered by:"
    },
    {
        title: "Data Science",
        description: "Transform raw data into actionable insights with advanced analytics.",
        features: [
            "Master data analysis and visualization techniques using Python and R",
            "Build machine learning models to extract meaningful insights from complex datasets",
            "Develop data-driven strategies to solve real-world business challenges",
            "Create compelling data narratives and prepare for data science interviews"
        ],
        duration: "12 weeks",
        commitment: "10-15 hrs",
        price: "100% Free"
    },
    {
        title: "Cybersecurity",
        description: "Protect systems and networks from digital attacks and vulnerabilities.",
        features: [
            "Master network security fundamentals and defensive strategies",
            "Learn ethical hacking techniques to identify and mitigate vulnerabilities",
            "Develop risk management skills to protect sensitive information",
            "Gain hands-on experience with security tools and incident response"
        ],
        duration: "12 weeks",
        commitment: "12-15 hrs",
        price: "100% Free"
    }
];

const CourseListing = () => {
    const router = useRouter();
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-8 rounded-[32px] border-2 border-[#E5E7EB]  transition-all duration-500 overflow-hidden relative group"
                        >
                            {course.badge && (
                                <div className="hidden absolute top-6 right-8 text-[#646669] md:flex items-center font-helvetica text-sm tracking-wider">
                                    {course.badge} <Image src="/v2-images/forage.png" alt="Verified" width={147} height={45} />
                                </div>
                            )}

                            <h3 className="text-[32px] font-bold text-[#10141D] mb-4">{course.title}</h3>
                            <p className="text-[#646669] text-[16px] font-helvetica mb-8 leading-[140%] tracking-[-1%]">
                                {course.description}
                            </p>

                            <div className="bg-[#EFF0F5] rounded-2xl p-6 mb-8">
                                <h4 className="font-bold text-[#10141D] mb-4  text-[18px] leading-[126%] tracking-[-2%] font-helvetica">What You'll Learn</h4>
                                <ul className="grid grid-cols-1  gap-3">
                                    {course.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[#2C2B2DB2]/70 text-[16px] leading-[140%] tracking-[-1%] font-helvetica">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.6663 5L7.49967 14.1667L3.33301 10" stroke="#704FE6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mb-10 border-b pb-10 border-[#E5E7EB] pt-8">
                                <div>
                                    <p className="text-gray-400 text-[14px]  font-helvetica tracking-[-1%] leading-[138%] mb-1">Program Length</p>
                                    <p className="text-[#704FE6] font-bold text-[26px] leading-[126%] tracking-[-2%] font-helvetica">{course.duration}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[14px]  font-helvetica tracking-[-1%] leading-[138%] mb-1">Weekly Commitment</p>
                                    <p className="text-[#704FE6] font-bold text-[26px] leading-[126%] tracking-[-2%] font-helvetica">{course.commitment}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[14px]  font-helvetica tracking-[-1%] leading-[138%] mb-1">No Cost</p>
                                    <p className="text-[#704FE6] font-bold text-[26px] leading-[126%] tracking-[-2%] font-helvetica">{course.price}</p>
                                </div>
                            </div>

                            <div className="flex flex-row gap-4">
                                <Button
                                    text="Apply Now"
                                    variant="primary"
                                    className="flex-1 w-max !py-4"
                                    icon={<ArrowRightIcon className="w-6 h-6" />}
                                />
                                <Button
                                    text="Learn More"
                                    variant="outline"
                                    className="flex-1 !py-4"
                                    onClick={() => router.push(course.link)}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseListing;
