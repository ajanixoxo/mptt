"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../Button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const courses = [
    {
        title: "Web Development",
        description: "Build a real website. Explore if tech is right for you. Your first website, built from scratch. By the end, you'll have a live site in your portfolio and a much clearer idea if coding is your thing.",
        featuresLabel: "What You'll Build",
        features: [
            "Complete business website (you choose: restaurant, gym, café, barbershop, etc.)",
            "Portfolio piece for college apps"
        ],
        skills: ["HTML", "CSS", "JavaScript", "Git/GitHub"],
        secondarySection: {
            label: "What Makes This Different",
            items: [
                "Actually build something (not just follow tutorials)",
                "Designed for complete beginners",
                "Small cohort, real mentorship",
                "No pressure, just exploration"
            ]
        },
        duration: "12 weeks",
        commitment: "10 hrs",
        price: "Free",
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
        commitment: "12 hrs",
        price: "Free",
        badge: "with:",
        link: "/courses/ai-engineering"
    },
    // {
    //     title: "Data Science",
    //     description: "Transform raw data into actionable insights with advanced analytics.",
    //     features: [
    //         "Master data analysis and visualization techniques using Python and R",
    //         "Build machine learning models to extract meaningful insights from complex datasets",
    //         "Develop data-driven strategies to solve real-world business challenges",
    //         "Create compelling data narratives and prepare for data science interviews"
    //     ],
    //     duration: "12 weeks",
    //     commitment: "10-15 hrs",
    //     price: "100% Free",
    //     link: "/courses/data-science"
    // },
    // {
    //     title: "Cybersecurity",
    //     description: "Protect systems and networks from digital attacks and vulnerabilities.",
    //     features: [
    //         "Master network security fundamentals and defensive strategies",
    //         "Learn ethical hacking techniques to identify and mitigate vulnerabilities",
    //         "Develop risk management skills to protect sensitive information",
    //         "Gain hands-on experience with security tools and incident response"
    //     ],
    //     duration: "12 weeks",
    //     commitment: "12-15 hrs",
    //     price: "100% Free",
    //     link: "/courses/cybersecurity"
    // }
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

                            <div className="space-y-6 mb-8">
                                {"skills" in course && course.skills && course.skills.length > 0 && (
                                    <div className="bg-[#EFF0F5] rounded-2xl p-6">
                                        <h4 className="font-bold text-[#10141D] mb-3 text-[18px] leading-[126%] tracking-[-2%] font-helvetica">Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {course.skills.map((skill, i) => (
                                                <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-[#E5E7EB] text-[#10141D] text-[14px] font-helvetica">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="bg-[#EFF0F5] rounded-2xl p-6">
                                    <h4 className="font-bold text-[#10141D] mb-4  text-[18px] leading-[126%] tracking-[-2%] font-helvetica">{course.featuresLabel ?? "What You'll Learn"}</h4>
                                    <ul className="grid grid-cols-1  gap-3">
                                        {course.features.map((feat, i) => (
                                            <li key={i} className="flex items-center gap-2 text-[#2C2B2DB2]/70 text-[16px] leading-[140%] tracking-[-1%] font-helvetica">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.6663 5L7.49967 14.1667L3.33301 10" stroke="#704FE6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {"secondarySection" in course && course.secondarySection && (
                                    <div className="bg-[#EFF0F5] rounded-2xl p-6">
                                        <h4 className="font-bold text-[#10141D] mb-4  text-[18px] leading-[126%] tracking-[-2%] font-helvetica">{course.secondarySection.label}</h4>
                                        <ul className="grid grid-cols-1  gap-3">
                                            {course.secondarySection.items.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-[#2C2B2DB2]/70 text-[16px] leading-[140%] tracking-[-1%] font-helvetica">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.6663 5L7.49967 14.1667L3.33301 10" stroke="#704FE6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mb-10 border-b pb-10 border-[#E5E7EB] pt-8">
                                <div>
                                    <p className="text-gray-400 text-[14px]  font-helvetica tracking-[-1%] leading-[138%] mb-1">COST</p>
                                    <p className="text-[#704FE6] font-bold text-[26px] leading-[126%] tracking-[-2%] font-helvetica">{course.price}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[14px]  font-helvetica tracking-[-1%] leading-[138%] mb-1">COMMITMENT</p>
                                    <p className="text-[#704FE6] font-bold text-[26px] leading-[126%] tracking-[-2%] font-helvetica">{course.commitment}/week</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[14px]  font-helvetica tracking-[-1%] leading-[138%] mb-1">DURATION</p>
                                    <p className="text-[#704FE6] font-bold text-[26px] leading-[126%] tracking-[-2%] font-helvetica">{course.duration}</p>
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
