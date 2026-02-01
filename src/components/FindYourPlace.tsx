"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const courses = [
  {
    title: "Web Development",
    description: "Master full-stack development with React, Node.js, and modern tools.",
    duration: "12 weeks",
    students: "2,500+ students",
    image: "/v2-images/webdev.jpg",
    link: "/courses/web-development"
  },
  {
    title: "Mobile Development",
    description: "Build iOS and Android apps with Swift, Kotlin, and React Native.",
    duration: "10 weeks",
    students: "1,800+ students",
    image: "/v2-images/mobiledev.jpg",
    link: "/courses/mobile-development"
  },
  {
    title: "Cybersecurity",
    description: "Learn to protect systems and data with industry-standard practices.",
    duration: "8 weeks",
    students: "1,200+ students",
    image: "/v2-images/cyber.jpg",
    link: "/courses/cybersecurity"
  }
];

const FindYourPlace = () => {
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
    <section ref={ref} className="py-20 px-4 md:px-6 lg:px-14 relative bg-white ">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-3xl md:text-[62px] mt-4 font-semibold leading-[120%] tracking-[-3%"
            >
              Industry-Designed <span className="text-[#704FE6]">Courses</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-[#646669] text-[14px] max-w-2xl  tracking-[-1%] leading-[140%] "
            >
              Learn the skills that matter most to employers through hands-on, project-based courses.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/courses"
              className=""
            >
              <Button
              text="View All Courses"
              icon={<ArrowRight size={18} />}
              className="w-max"
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="group flex flex-col gap-4"
              variants={itemVariants}
            >
              {/* Image Card */}
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                {/* Bottom Stats */}
                <div className="absolute bottom-6 left-6 text-white text-sm font-bold flex items-center gap-2 font-helvetica-bold">
                  <span>{course.duration}</span>
                  <span className="w-1 h-1 bg-white rounded-full" />
                  <span>{course.students}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 p-1">
                <h3 className="text-[26px] font-bold text-[#10141D] group-hover:text-[#704FE6] transition-colors leading-[130%] tracking-[-2%]">
                  {course.title}
                </h3>
                <p className="text-[#4A5565] text-[16px] leading-[140%] tracking-[-1%]  mb-2">
                  {course.description}
                </p>

                <Link
                  href={course.link}
                  className=""
                >
                  <Button
                  text="Learn More"
                  variant="outline"
                  icon={<ArrowRight size={16} />}
                  className="w-max"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FindYourPlace;
