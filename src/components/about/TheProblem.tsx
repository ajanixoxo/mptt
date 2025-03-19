"use client";

import { motion } from "framer-motion";

const problems = [
  "Students graduate without practical experience employers value",
  "Limited access to industry mentors and real projects",
  "Overwhelming choices in a rapidly changing tech landscape",
  "High costs create barriers to quality tech education",
];

const ProblemSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:flex flex-row-reverse gap-12 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 grid items-center place-items-center lg:order-1 relative z-10"
          >
            <motion.div
              className="absolute -bottom-8 w-max z-10 h-20  -left-2 border-2 border-black bg-white rounded-2xl p-2 px-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex i flex-col space-x-2">
                <span className="text-2xl font-bold text-black">85M+</span>
                <span className="text-gray-700 text-[16px]">
                  Tech jobs by 2030
                </span>
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-6 w-max z-20 -left-0 border-2 border-black bg-white rounded-2xl p-2 px-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-end i flex-col space-x-2">
                <span className="text-2xl font-bold text-black">85M+</span>
                <span className="text-gray-700 text-[16px]">
                  Tech jobs by 2030
                </span>
              </div>
            </motion.div>

            <img
              src="/problem.png"
              alt="Problem illustration"
              className="rounded-2xl md:w-[80%] shadow-2xl"
            />
          </motion.div>
          {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 inline-block bg-gray-800 rounded-2xl p-4 transform -translate-y-1/2 translate-x-1/2"
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-blue-500">85M+</span>
                <span className="text-gray-400">Tech jobs by 2030</span>
              </div>
            </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white main_text">
              The Problem
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Traditional tech education isn't working for today's learners
            </p>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="mt-1">
                    <svg
                      width={26}
                      height={20}
                      viewBox="0 0 26 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12L8 18L24 2"
                        stroke="#CEED12"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">{problem}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
