"use client"

import { motion } from "framer-motion"
import { FileText, Users, Calendar, Award } from "lucide-react"
import FloatingShape from '@/components/FloatingShape' ;
const steps = [
  {
    icon: FileText,
    title: "1. Submit Application",
    description: "Fill out our online application form with your background and goals.",
  },
  {
    icon: Users,
    title: "2. Interview",
    description: "Meet with our team to discuss your experience and program fit.",
  },
  {
    icon: Calendar,
    title: "3. Prep Work",
    description: "Complete pre-course materials to prepare for your program.",
  },
  {
    icon: Award,
    title: "4. Begin Your Journey",
    description: "Start your program and begin building your tech career.",
  },
]

const ApplicationProcess = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/30 relative">
      {/* Floating shape */}
      <FloatingShape
        size="w-80 h-80"
        top="top-20"
        left="left-20"
        color="bg-gradient-to-r from-purple-500/20 to-blue-500/20"
        // className="top-20 left-20"
        delay={0.2}
        position="absolute"
       
      />

      {/* Stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-40 right-20"
      >
        <motion.img
          src="/s-star.png"
          alt="Shining star"
          className="w-8 h-8"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Application Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our straightforward application process is designed to find motivated students who are ready to learn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-700"></div>
              )}

              <div className="bg-[#def134] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ApplicationProcess

