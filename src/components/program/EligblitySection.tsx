"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Star } from "lucide-react";
import FloatingShape from "../FloatingShape";

const EligibilitySection = () => {
  return (
    <section className="relative py-20 overflow-hidden dark:bg-transparent">
      {/* Floating shape only visible in dark mode */}
      <FloatingShape
        color="from-[#1F22CA] to-transparent"
        size="w-60 h-60"
        top="65%"
        position="absolute hidden dark:flex"
        left="88%"
        delay={0}
      />

      {/* Half star */}
      <div className="absolute left-0 rotate-180 top-40 ">
        <img src="/s_half.png" className="w-7 md:w-12 hidden dark:flex" />
        <img src="/star.png" alt="" className="w-7 md:w-12 rotate-180 dark:hidden flex" />
      </div>

      {/* Animated stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 right-20 text-purple-400 "
      >
        <img src="/s-star.png" alt="" className="w-7 md:w-12 hidden dark:flex" />
        <img src="/star.png" alt="" className="w-7 md:w-12 dark:hidden flex" />
      </motion.div>

      <div className="container rounded-3xl mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1">
            Eligibility Requirements
          </h2>
          <p className="text-gray-600 dark:text-[#a09c9c] text-base md:text-xl">
            Check if you qualify for the Hack-A-Path program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-2 border-black dark:border-black  dark:bg-[#2B2B2B]/80 backdrop-blur-sm rounded-xl mb-1"
        >
          <h3 className="text-xl md:text-3xl font-bold text-black border-2 dark:border-none border-b-black dark:text-white mb-8 bg-[#DED6E8] dark:bg-[#787881] rounded-t-xl p-3">
            Who Can Apply?
          </h3>

          <div className="space-y-10 p-4">
            {/* Age Requirement */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2  dark:border-black dark:border-none bg-white dark:bg-[#2B2B2B] flex items-center justify-center">
                <Users className="w-6 h-6 text-[#F9C23A]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Age
                </h4>
                <p className="text-gray-700 dark:text-[#a09c9c] text-[16px] md:text-lg">
                  You must be between <strong>14-20 years old</strong> at the
                  time of application.
                </p>
              </div>
            </div>

            {/* Location Requirement */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white dark:bg-[#2B2B2B] border-2  dark:border-black dark:border-none flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#F9C23A]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Location
                </h4>
                <p className="text-gray-700 dark:text-[#a09c9c] text-[16px] md:text-lg">
                  You must be a resident of <strong>Ontario</strong> to
                  participate in the program.
                </p>
              </div>
            </div>

            {/* Commitment Requirement */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white dark:bg-[#2B2B2B] border-2  dark:border-black dark:border-none flex items-center justify-center">
                <Star className="w-6 h-6 text-[#F9C23A]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Commitment
                </h4>
                <p className="text-gray-700 dark:text-[#a09c9c] text-[16px] md:text-lg">
                  You must be able to commit{" "}
                  <span className="font-medium text-gray-800 dark:text-white">
                    10 hours per week
                  </span>{" "}
                  for the program duration.
                </p>
              </div>
            </div>

            <div className="mt-10 p-4 border-2 border-black dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-[#1E1E1E]/50">
              <p className="text-gray-700 dark:text-[#a09c9c]">
                <span className="font-semibold">Note:</span> No prior coding or
                tech experience is required.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilitySection;
