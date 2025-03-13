"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const missionPoints = [
  "Project-based learning with real-world applications",
  "Mentorship from industry professionals",
  "Flexible learning paths tailored to your goals",
  "Affordable programs with scholarship opportunities",
]

const MissionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:flex flex-row-reverse gap-12 items-center">



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
                <span className="text-3xl font-bold text-purple-500">12k+</span>
                <span className="text-gray-400">Students Launched</span>

              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-10 w-max z-20 lg:-left-10 border-2 border-black bg-white rounded-2xl p-2 px-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex i flex-col space-x-2">
              <span className="text-3xl font-bold text-black">12k+</span>
                <span className="text-gray-400">Students Launched</span>
              </div>
            </motion.div>

            <img src="https://placehold.co/600x400" alt="Problem illustration" className="rounded-2xl shadow-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-gray-400 text-lg mb-8">
              We're democratizing access to tech education through practical, industry-focused learning
            </p>

            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="mt-1">
                    <Check className="text-red-500" size={20} />
                  </div>
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection

