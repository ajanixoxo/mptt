"use client"

import { motion } from "framer-motion"
import {  CircleArrowUp } from "lucide-react"

const ApplicationProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Apply",
      description: "Complete our online application form",
    },
    {
      number: "2",
      title: "Interview",
      description: "Virtual interview to discuss your goals",
    },
    {
      number: "3",
      title: "Career Path",
      description: "Receive pathway recommendations",
    },
    {
      number: "4",
      title: "Decision",
      description: "Receive our admission decision",
    },
    {
      number: "5",
      title: "Onboarding",
      description: "Prepare for your Hack-A-Path journey",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 left-10 w-8 h-8 opacity-30"
      >

        <img src='/s-star.png' alt="" className="w-7 md:w-12" />



      </motion.div>
      {/* Background decorative elements */}
 
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Application Process</h2>
          <p className="text-[#a09c9c] text-xl">Your journey to joining Hack-A-Path</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(20%-1.6rem)]"
            >
              <div className="w-24 h-24 rounded-full bg-[#1E1E1E] flex items-center justify-center mb-6">
                <span className="text-5xl font-bold text-[#F9C23A]">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-[#a09c9c]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center"
        >
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-[#F9C23A]  text-black font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Start Your Application
            <CircleArrowUp className="rotate-45" />

          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ApplicationProcessSection

