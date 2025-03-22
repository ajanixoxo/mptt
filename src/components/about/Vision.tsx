"use client";

import { motion } from "framer-motion";

const visionPoints = [
  "Connect with peers in our active Discord community",
  "Get feedback through regular code reviews",
  "Access job search resources and career support",
  "Join a network of ambitious tech professionals",
];

const VisionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Vision
            </h2>
            <p className="text-[#7A7979] text-lg mb-8">
              We envision a world where everyone has the opportunity to build a
              fulfilling career in technology
            </p>

            <div className="space-y-4">
              {visionPoints.map((point, index) => (
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
                        stroke="#704FE6"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[#6A6464]">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 inline-block bg-gray-900 rounded-lg p-4"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative z-10"
          >
            <motion.div
              className="absolute -bottom-12 w-max z-10 h-20  lg:-left-10 border-2 border-black bg-white rounded-2xl p-2 px-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex i flex-col space-x-2">
                <span className="text-3xl font-bold text-purple-500">50+</span>
                <span className="text-gray-400">Expert Mento</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-10 w-max z-20 lg:-left-10 border-2 border-black bg-white rounded-2xl p-2 px-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex i flex-col space-x-2">
                <span className="text-3xl font-bold text-black">50+</span>
                <span className="text-gray-400">Expert Mentor</span>
              </div>
            </motion.div>

            <img
              src="/vision.png"
              alt="Problem illustration"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
