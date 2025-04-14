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
      <img src="/h_b (2).png" className="absolute right-0 w-5 dark:hidden md:w-8" />
      <img src="/star.png" className="absolute left-[30%] top-10 w-5 dark:hidden md:w-8" />
      <img src="/h_b (1).png" className="absolute left-0 bottom-0 w-5 dark:hidden md:w-8" />
      <div className="absolute hidden dark:flex justify-between w-full -mt-10 lg:mt-10 right-0">
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

      

      <div className="absolute  hidden dark:flexleft-0 top-[30%]">
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
          position="absolute hidden dark:"
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
          <h2 className="text-5xl font-bold dark:text-white mb-4">How It Works</h2>
          <p className="dark:text-[#a09c9c] text-[#6A6464] text-xl">
            Your 10-week journey to launching your tech career
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
          <div>
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
                <div className="border-2 border-black dark:bg-[#2B2B2B]/80 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-[#343434] flex items-center justify-center">
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
                    <h3 className="text-xl font-bold dark:text-white">
                      Week {week.number}: {week.title}
                    </h3>
                  </div>
                  <p className="dark:text-[#a09c9c] text-[#6A6464] mb-6">{week.description}</p>
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
                className="flex flex-col  mb-4"
              >
                {/* Week info */}
                <div className="border-2 border-black dark:bg-[#2B2B2B]/80 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-[#343434] flex items-center justify-center">
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
                    <h3 className="text-xl font-bold dark:text-white">
                      Week {week.number}: {week.title}
                    </h3>
                  </div>
                  <p className="dark:text-[#a09c9c] text-[#6A6464] mb-6">{week.description}</p>
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

             
              </motion.div>
            ))}
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default ProgramStructureSection;
