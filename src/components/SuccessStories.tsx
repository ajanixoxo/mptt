"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MoreHorizontal, ThumbsUp, Globe } from "lucide-react";

const stories = [
    {
        name: "Matin Ghanavatpour",
        role: "Software Engineering Student",
        time: "1d •",
        image: "/avatar1.png",
        content: "Excited to share that I’ve received my Certificate of Participation from MyPath2Tech for completing the Hack-A-Path Summer Program in Software Engineering! This program gave me hands-on experience, mentorship, and valuable opportunities to strengthen my skills in technology and problem-solving.",
        likes: "Richard and 45 others",
        comments: "12 comments",
        link: "https://www.linkedin.com/posts/matin-ghanavatpour_softwareengineering-learningjourney-hackapath-activity-7419487779245449216-vD64?utm_source=share&utm_medium=member_ios&rcm=ACoAACpHD2sBqPwvdcH3ez1iQZy9vTfds8iFDd0"
    },
    {
        name: "Kalkidan Wubshet",
        role: "Community Builder Awardee",
        time: "2d •",
        image: "/avatar2.png",
        content: "On August 29, 2025, I had the wonderful opportunity to speak at Impact Night hosted by MyPath2Tech and was recognized as a Community Builder during their Hack a Path Summer Program. Looking back now, that experience marked a real turning point for me.",
        likes: "Moshood and 80 others",
        comments: "12 comments",
        link: "https://www.linkedin.com/posts/kalkidanwubshet_mypathtotech-securityengineering-softwareengineering-ugcPost-7411646109988646912-TZvb?utm_medium=ios_app&rcm=ACoAACpHD2sBqPwvdcH3ez1iQZy9vTfds8iFDd0&utm_source=social_share_send&utm_campaign=whatsapp"
    },
    {
        name: "Roqeeb Olamide Ayorinde",
        role: "Program Graduate",
        time: "3d •",
        image: "/avatar1.png",
        content: "I’m excited to share that I completed the Hack-A-Path Software Engineering Program, where my team and I built a fully functional Discord bot that gamifies community engagement through budgeting, savings, and achievement systems.",
        likes: "Sarah and 50 others",
        comments: "8 comments",
        link: "https://www.linkedin.com/posts/roqeeb-olamide-ayorinde_softwareengineering-teamwork-backenddevelopment-activity-7402009330151202816-K8o8?utm_medium=ios_app&rcm=ACoAACpHD2sBqPwvdcH3ez1iQZy9vTfds8iFDd0&utm_source=social_share_send&utm_campaign=whatsapp"
    },
    {
        name: "Mukhtar Hamzat",
        role: "Rising Star Award Winner",
        time: "4d •",
        image: "/avatar2.png",
        content: "Today, I had the privilege of being part of MyPath2Tech Impact Night 2025. I was featured under the student spotlight winning the 'Rising Star Award'. I worked with Matin Ghanavatpour, Olamide Ayorinde, and Pouyan Nazarzadeh to build a Discord bot.",
        likes: "Team and 90 others",
        comments: "15 comments",
        link: "https://www.linkedin.com/posts/mukhtar-hamzat-b53760380_today-i-had-the-privilege-of-being-part-activity-7367716194688180224-PbsL?utm_medium=ios_app&rcm=ACoAACpHD2sBqPwvdcH3ez1iQZy9vTfds8iFDd0&utm_source=social_share_send&utm_campaign=whatsapp"
    },
    {
        name: "Noah Campbell",
        role: "CISSP, Moderator",
        time: "1w •",
        image: "/avatar1.png",
        content: "Events that genuinely motivate you to come early and stay late are few and far between but that's exactly what Richard Nonso, Moshood Saka, and the MyPath2Tech team had in store at Impact Night 2025! It was inspiring to hear about their accomplishments.",
        likes: "Community and 120 others",
        comments: "22 comments",
        link: "https://www.linkedin.com/posts/noahcampbell1_industry-education-community-ugcPost-7369431475466792966-oZzk?utm_medium=ios_app&rcm=ACoAACpHD2sBqPwvdcH3ez1iQZy9vTfds8iFDd0&utm_source=social_share_send&utm_campaign=whatsapp"
    },
    {
        name: "Mukhtar Hamzat",
        role: "Hack-A-Path Participant",
        time: "5d •",
        image: "/avatar2.png",
        content: "I am very grateful for the opportunity to participate in the Hack-A-Path Summer Program in Software Engineering. A big thank you to Moshood Saka and Richard Nonso for their mentorship and guidance throughout the program.",
        likes: "Peers and 30 others",
        comments: "5 comments",
        link: "https://www.linkedin.com/posts/mukhtar-hamzat-b53760380_moshood-saka-richard-nonso-i-am-very-grateful-activity-7380246531876081664-OzKg?utm_medium=ios_app&rcm=ACoAACpHD2sBqPwvdcH3ez1iQZy9vTfds8iFDd0&utm_source=social_share_send&utm_campaign=whatsapp"
    }
];

const SuccessStories = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section ref={ref} className="py-20 px-4 md:px-6 lg:px-14 relative bg-[#FDFDFD] dark:bg-black overflow-hidden hover:cursor-grab active:cursor-grabbing">
            <div className="container mx-auto ">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-3xl md:text-[62px] mt-4 font-semibold leading-[120%] tracking-[-3%] text-[#10141D] dark:text-white"
                    >
                        Success <span className="text-[#704FE6]">Stories</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-[#646669] text-[14px] max-w-2xl mx-auto tracking-[-1%] leading-[140%] mt-4"
                    >
                        Hear from students who transformed their careers with MyPath2Tech
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                            variants={itemVariants}
                        >
                            <a href={story.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex gap-3">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={story.image}
                                                alt={story.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-sm text-[#10141D] dark:text-white group-hover:text-[#704FE6] transition-colors">{story.name}</h3>
                                            <p className="text-xs text-gray-500">{story.role}</p>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <span>{story.time}</span>
                                                <Globe size={10} />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-full">
                                        <MoreHorizontal size={20} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="mb-4">
                                    <p className="text-sm text-[#10141D] dark:text-gray-300 leading-relaxed line-clamp-4">
                                        {story.content}
                                    </p>
                                    <button className="text-[#704FE6] text-xs font-semibold mt-2 hover:underline">See more</button>
                                </div>

                                {/* Reactions Count */}
                                <div className="flex justify-between items-center text-xs text-gray-500 dark:border-gray-800">
                                    <div className="flex items-center gap-1">
                                        <div className="flex -space-x-1">
                                            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center border border-white z-20">
                                                <ThumbsUp size={8} className="text-white fill-white" />
                                            </div>
                                            <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center border border-white z-10">
                                                <svg width="8" height="8" viewBox="0 0 24 24" fill="white" className="w-2 h-2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                            </div>
                                            <div className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center border border-white z-0">
                                                <div className="w-2 h-2 text-[6px] text-white flex items-center justify-center">💡</div>
                                            </div>
                                        </div>
                                        <span className="hover:text-blue-600 hover:underline cursor-pointer ml-1 font-helvetica-bold">{story.likes}</span>
                                    </div>
                                    <span className="hover:underline cursor-pointer font-helvetica-bold">{story.comments}</span>
                                </div>

                                {/* Action Buttons */}
                                {/* <div className="flex justify-between items-center pt-1">
                                    <button className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 transition-colors flex-1 justify-center">
                                        <ThumbsUp size={18} />
                                        <span className="text-sm font-semibold">Like</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 transition-colors flex-1 justify-center">
                                        <MessageSquare size={18} />
                                        <span className="text-sm font-semibold">Comment</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 transition-colors flex-1 justify-center">
                                        <Share2 size={18} />
                                        <span className="text-sm font-semibold">Share</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 transition-colors flex-1 justify-center">
                                        <Send size={18} />
                                        <span className="text-sm font-semibold">Send</span>
                                    </button>
                                </div> */}
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SuccessStories;
