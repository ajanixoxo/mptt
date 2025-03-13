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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src="https://placehold.co/600x400" alt="Mission illustration" className="rounded-lg shadow-2xl" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-gray-900 rounded-lg p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-purple-500">12k+</span>
                <span className="text-gray-400">Students Launched</span>
              </div>
            </motion.div>
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

