"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import FloatingShape from "@/components/FloatingShape"
import Image from "next/image"

const testimonials = [
  {
    name: "David Chen",
    role: "Software Engineer at Google",
    image: "https://placehold.co/100x100",
    quote:
      "The program was intense but incredibly rewarding. I went from knowing basic HTML to building full-stack applications in just 12 weeks.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "UX Designer at Adobe",
    image: "https://placehold.co/100x100",
    quote:
      "The mentorship I received was invaluable. My mentor helped me build a portfolio that landed me my dream job.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Data Scientist at Microsoft",
    image: "https://placehold.co/100x100",
    quote:
      "The curriculum was cutting-edge and the instructors were experts in their field. I couldn't have asked for a better learning experience.",
    rating: 5,
  },
]

const ProgramTestimonials = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Floating shape */}
      <FloatingShape
        size="w-96 h-96"
        color="bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        // className="-bottom-48 left-0"
        delay={0.4}
        left=""
        top=""
        position="absolute"
      />

      {/* Half star */}
      <div className="absolute right-10 top-20">
        <Image src="/s_half.png" alt=""  className="w-7 md:w-12" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Success Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our graduates who have transformed their careers through our programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#F9C23A] fill-current" size={16} />
                ))}
              </div>

              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramTestimonials

