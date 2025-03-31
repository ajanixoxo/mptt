"use client";

import { motion } from "framer-motion";
import FloatingShape from "../FloatingShape";

const ProgramStructureSection = () => {
  const weeks = [
    {
      number: 1,
      title: "Program Introduction & Orientation",
      description:
        "Get to know your cohort, mentors, and the program structure. Set up your development environment and tools.",
      learnings: [
        "Meet your cohort and mentors",
        "Introduction to your chosen pathway",
        "Set up your development environment",
        "Goal setting and planning",
      ],
    },
    {
      number: 2,
      title: "Fundamentals & Core Concepts",
      description:
        "Learn the foundational skills and concepts that will form the basis of your technical journey.",
      learnings: [
        "Core programming concepts",
        "Problem-solving methodologies",
        "Industry best practices",
        "Version control with Git",
      ],
    },
    {
      number: 3,
      title: "First Project & Skill Building",
      description:
        "Apply what you've learned to your first mini-project with guidance from your mentor.",
      learnings: [
        "Hands-on project work",
        "Collaborative problem solving",
        "Code reviews and feedback",
        "Technical documentation",
      ],
    },
    {
      number: 4,
      title: "Advanced Concepts & Tools",
      description:
        "Dive deeper into specialized topics within your pathway and learn industry-standard tools.",
      learnings: [
        "Advanced technical concepts",
        "Debugging and testing",
        "Professional tools and workflows",
        "Performance optimization",
      ],
    },
    {
      number: 5,
      title: "Team Project Kickoff",
      description:
        "Begin working on a collaborative project with peers in your cohort to simulate real-world team environments.",
      learnings: [
        "Team formation and planning",
        "Collaborative coding",
        "Agile methodologies",
        "Project management",
      ],
    },
  ];
  const weeks2 = [
    {
      number: 6,
      title: "Mid-Program Assessment & Career",
      description:
        "Receive feedback on your progress and begin focusing on career development alongside technical skills.",
      learnings: [
        "Technical skills assessment",
        "LinkedIn profile optimization",
        "Resume building workshop",
        "Industry mentor matching",
      ],
    },
    {
      number: 7,
      title: "Specialized Skills & Industry Trends",
      description:
        "Focus on specialized skills relevant to your chosen pathway and current industry demands.",
      learnings: [
        "Pathway-specific advanced topics",
        "AI integration in workflows",
        "Current industry trends",
        "Real-world case studies",
      ],
    },
    {
      number: 8,
      title: "Capstone Project Planning",
      description:
        "Begin planning your capstone project that will showcase your skills to potential employers.",
      learnings: [
        "Project scoping and planning",
        "Technical architecture design",
        "Mentor feedback sessions",
        "Resource planning",
      ],
    },
    {
      number: 9,
      title: "Capstone Project Development",
      description:
        "Focus on building your capstone project with regular feedback from mentors and peers.",
      learnings: [
        "Intensive development work",
        "Progress reviews",
        "Technical problem solving",
        "Refinement and optimization",
      ],
    },
    {
      number: 10,
      title: " Presentations & Career Launch",
      description:
        "Present your capstone project and prepare for your job search with intensive interview preparation.",
      learnings: [
        "Project presentations",
        "Portfolio finalization",
        "Mock interviews",
        "Job search strategy",
      ],
    },
  ];

  return (
    <section className="relative py-20  overflow-hidden">
      {/* Background decorative elements */}

      <div className="absolute flex justify-between w-full -mt-10 lg:mt-10 right-0">
        <img src="/s_half.png" className="w-5 rotate-180 md:w-15" />

        <div className=" right-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}
            className="absolute top-[40%] right-[5%] text-[#1D1FB175]"
          >
            <img src="/s-star.png" className="w-7 md:w-12" />
          </motion.div>
          <FloatingShape
            color="from-[#1F22CA] to-transparent"
            size="w-60 h-60"
            top="-5%"
            position="absolute"
            left="88%"
            delay={0}
          />
        </div>
      </div>

      

      <div className="absolute left-0 top-[30%]">
        <FloatingShape
          color="from-[#1F22CA] to-transparent"
          size="w-60 h-60"
          top="-5%"
          position="absolute"
          left="88%"
          delay={0}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20  right-6 md:right-20 text-purple-400"
        >
          <img src="/s-star.png" alt="" className="w-7 md:w-12" />
        </motion.div>
      </div>

      <div className="absolute left-[90%] top-[85%]">
        <FloatingShape
          color="from-[#1F22CA] to-transparent"
          size="w-60 h-60"
          top="%"
          position="absolute"
          left="%"
          delay={0}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute left-[90%] top-[85%] md:left-[90%] z-20 text-purple-400"
        >
          <img src="/s-star.png" alt="" className="w-7 md:w-12" />
        </motion.div>
      </div>

     
     
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-[#a09c9c] text-xl">
            Your 10-week journey to launching your tech career
          </p>
        </motion.div>

        <div className="space-y-8 flex flex-col lg:flex-row gap-5 relative">
          <div>
            {" "}
            {weeks.map((week, index) => (
              <motion.div
                key={week.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col  mb-4"
              >
                {/* Week info */}
                <div className="bg-[#2B2B2B]/80 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#343434] flex items-center justify-center">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx={12}
                          cy="11.998"
                          r="11.5"
                          fill="#F9C23A"
                          stroke="#F9C23A"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Week {week.number}: {week.title}
                    </h3>
                  </div>
                  <p className="text-[#a09c9c] mb-6">{week.description}</p>
{/* 
                  <div className="p-2 border-2 border-[#716D6D] rounded-2xl">
                    <h4 className="text-sm font-medium text-gray-300 mb-3">
                      What you'll learn:
                    </h4>
                    <div className="grid grid-rows-1 sm:grid-cols-2 gap-3">
                      {week.learnings.map((learning, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.9989 22C17.4989 22 21.9989 17.5 21.9989 12C21.9989 6.5 17.4989 2 11.9989 2C6.4989 2 1.9989 6.5 1.9989 12C1.9989 17.5 6.4989 22 11.9989 22Z"
                              stroke="#74767F"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.7489 12L10.5789 14.83L16.2489 9.17004"
                              stroke="#74767F"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <span className="text-sm text-gray-300">
                            {learning}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>

                {/* Arrow for desktop */}
                {/* {index < weeks.length - 1 && (
                  <div className="hidden absolute md:flex top-40  items-center justify-center">
                    <svg
                      width={36}
                      height={9}
                      viewBox="0 0 36 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.8531 6.73745C31.4364 5.5772 33.3069 5.02567 35.2086 4.58962C36.1087 4.38348 36.3365 3.48117 35.3824 3.07859C35.0877 2.95447 34.7585 2.95123 34.4498 2.87676C31.9987 2.39107 29.593 1.70139 27.2023 0.968542C27.1863 0.963698 27.1695 0.962243 27.153 0.96426C27.1364 0.966277 27.1205 0.971721 27.1062 0.980254C27.0918 0.988788 27.0795 1.00022 27.0698 1.01381C27.0601 1.02741 27.0534 1.04287 27.0501 1.05921C27.0439 1.08759 27.0472 1.1172 27.0595 1.14352C27.0718 1.16984 27.0924 1.19141 27.1181 1.20491C27.9071 1.63663 30.6172 3.36893 32.5071 3.26855C27.1947 3.55133 22.6444 3.09478 17.7346 3.16602C11.8502 3.13795 5.97046 2.95591 0.0954132 2.61988C0.0721664 2.61838 0.0492439 2.62599 0.0315132 2.6411C0.0137787 2.65622 0.00263214 2.67764 0.000434875 2.70083C-0.0017128 2.72096 0.00407791 2.74113 0.0165749 2.75706C0.0290718 2.77298 0.0472908 2.78341 0.0673523 2.7861C5.91505 3.60314 11.7962 4.29714 17.699 4.46011C22.9271 4.60474 26.9864 4.51516 31.5141 4.2885C29.838 4.37269 28.4823 6.93389 28.0085 7.81353C27.9929 7.84231 27.9876 7.87554 27.9935 7.90773C27.9994 7.93993 28.0161 7.96914 28.0409 7.99053C28.0763 8.02022 28.121 8.0365 28.1672 8.0365C28.2134 8.0365 28.2581 8.02022 28.2935 7.99053C28.8212 7.55449 29.3285 7.11845 29.8531 6.73745Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                )} */}
              </motion.div>
            ))}
          </div>

          <div>
            {weeks2.map((week, index) => (
              <motion.div
                key={week.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col mb-4"
              >
                {/* Week info */}
                <div className="bg-[#2B2B2B]/80 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#343434] flex items-center justify-center">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx={12}
                          cy="11.998"
                          r="11.5"
                          fill="#F9C23A"
                          stroke="#F9C23A"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Week {week.number}: {week.title}
                    </h3>
                  </div>
                  <p className="text-[#a09c9c] mb-6">{week.description}</p>

                  {/* <div className="p-2 border-2 border-[#716D6D] rounded-2xl">
                    <h4 className="text-sm font-medium text-gray-300 mb-3">
                      What you'll learn:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {week.learnings.map((learning, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.9989 22C17.4989 22 21.9989 17.5 21.9989 12C21.9989 6.5 17.4989 2 11.9989 2C6.4989 2 1.9989 6.5 1.9989 12C1.9989 17.5 6.4989 22 11.9989 22Z"
                              stroke="#74767F"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.7489 12L10.5789 14.83L16.2489 9.17004"
                              stroke="#74767F"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <span className="text-sm text-gray-300">
                            {learning}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStructureSection;
