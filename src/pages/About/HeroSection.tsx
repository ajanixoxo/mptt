"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"

const WhyChooseSection = () => {
  return (
    <section className="min-h-screen pt-20 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/4 right-1/4 text-purple-400"
      >
        ✦
      </motion.div>

      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/3 left-1/4 text-purple-500/30"
      >
        <Code size={32} />
      </motion.div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-yellow-400 mb-4">
              <Code size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Why Choose{" "}
              <span className="inline-block">
                <motion.span
                  className="inline-block  text-white px-4 py-1 rounded-md"
                  animate={{
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                             <img src="/d-skills.png" className="lg:w-[67%]   w-44  z-10 " />

                </motion.span>
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Many young people want a tech career but don't know where to start. That's where we come in!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium inline-flex items-center space-x-2"
            >
              <span>Explore Our Programs</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Pink Circle */}
            <div className="relative aspect-square">
              <motion.div
                className="absolute inset-0 bg-pink-200 rounded-full"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              {/* Stats */}
              <motion.div
                className="absolute top-1/4 left-0 bg-white rounded-lg p-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">★</span>
                  <div>
                    <div className="font-bold text-black">85%</div>
                    <div className="text-sm text-gray-600">Success rate</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 right-0 bg-white rounded-lg p-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">★</span>
                  <div>
                    <div className="font-bold text-black">99.24%</div>
                    <div className="text-sm text-gray-600">User satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection

