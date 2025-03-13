"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const visionPoints = [
  "Connect with peers in our active Discord community",
  "Get feedback through regular code reviews",
  "Access job search resources and career support",
  "Join a network of ambitious tech professionals",
]

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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Vision</h2>
            <p className="text-gray-400 text-lg mb-8">
              We envision a world where everyone has the opportunity to build a fulfilling career in technology
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
                    <Check className="text-purple-500" size={20} />
                  </div>
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 inline-block bg-gray-900 rounded-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-purple-500">50+</span>
                <span className="text-gray-400">Expert Mentors</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src="https://placehold.co/600x400" alt="Vision illustration" className="rounded-lg shadow-2xl" />

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full"
              animate={{
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection

