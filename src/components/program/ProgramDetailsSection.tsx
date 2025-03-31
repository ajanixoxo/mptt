"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import FloatingShape from "../FloatingShape";

const ProgramDetailsSection = () => {
  return (
    <section className="relative py-20  overflow-hidden">
      {/* Background decorative elements */}
      <FloatingShape
        color="from-[#1F22CA] to-transparent"
        size="w-60 h-60"
        top="-5%"
        position="absolute"
        left="88%"
        delay={0}
      />
      {/* Animated stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute z-40 top-20 right-10 text-purple-400"
      >
        <img src="/s-star.png" alt="" className="w-7 md:w-7" />
      </motion.div>
      <FloatingShape
        color="from-[#1F22CA] to-transparent"
        size="w-60 h-60"
        top="70%"
        position="absolute"
        left="0%"
        delay={0}
      />
      {/* Animated stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute z-40 bottom-20 left-10 text-purple-400"
      >
        <img src="/s-star.png" alt="" className="w-7 md:w-7" />
      </motion.div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Next Cohort */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#232224B2]/80 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="md:text-3xl text-2xl font-bold text-white mb-4">
              Next Cohort: Summer 2025
            </h3>
            <div className="flex items-center text-gray-400">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="text-sm md:text-base">June 16th, 2025 - August 16th, 2025</span>
            </div>
          </motion.div>

          {/* Application Deadline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#232224B2]/80 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="md:text-3xl text-2xl font-bold text-white mb-4">
              Application Deadline
            </h3>
            <div className="flex items-center text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <span>June 1st, 2025</span>
            </div>
          </motion.div>
        </div>

        {/* Limited Spots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-2 border-[#F9C23A]  rounded-xl p-7 bg-[#232224B2]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Limited Spots Available!
          </h3>
          <p className="text-[#a09c9c] text-base lg:text-lg">
            Apply now to secure your place in our
            Summer 2025 cohort.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDetailsSection;
