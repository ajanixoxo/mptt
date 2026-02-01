"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MoreHorizontal, ThumbsUp, MessageSquare, Share2, Send, Globe } from "lucide-react";

const stories = [
    {
        name: "Stephanie Asoegwu",
        role: "326 followers",
        time: "20 h •",
        image: "/v2-images/post-1.png",
        content: "I had zero tech background before joining, and honestly didn't think I could learn to code. The structure and mentorship made everything click. Within a few months, I built real projects and landed my first junior role.",
        likes: "Ayushi and 20 others",
        comments: "5 comments"
    },
    {
        name: "Micah Jones",
        role: "1000 followers",
        time: "10 h •",
        image: "/v2-images/post-2.png",
        content: "What I loved most was how practical everything was. We weren't just watching videos, we were actually building. The curriculum made complex concepts feel simple.",
        likes: "Sarah and 50 others",
        comments: "25 comments"
    },
    {
        name: "Priya Rasak",
        role: "5000 followers",
        time: "10 h •",
        image: "/v2-images/post-3.png",
        content: "I'd tried learning online before, but this was different. The community, feedback, and clear learning path kept me consistent. I finally feel confident calling myself a developer.",
        likes: "Makush and 100 others",
        comments: "10 comments"
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
                            className="bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm hover:shadow-md transition-shadow"
                            variants={itemVariants}
                        >
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
                                <p className="text-sm text-[#10141D] dark:text-gray-300 leading-relaxed">
                                    {story.content}
                                </p>
                                <button className="text-[#704FE6] text-xs font-semibold mt-2 hover:underline">See translation</button>
                            </div>

                            {/* Reactions Count */}
                            <div className="flex justify-between items-center text-xs text-gray-500 mb-2 border-b border-gray-200 dark:border-gray-800 pb-2">
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
                            <div className="flex justify-between items-center pt-1">
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
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SuccessStories;
