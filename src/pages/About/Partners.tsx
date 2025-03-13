"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"

const partners = [
  { name: "Partner 1", logo: "https://placehold.co/200x100" },
  { name: "Partner 2", logo: "https://placehold.co/200x100" },
  { name: "Partner 3", logo: "https://placehold.co/200x100" },
  { name: "Partner 4", logo: "https://placehold.co/200x100" },
  { name: "Partner 5", logo: "https://placehold.co/200x100" },
  { name: "Partner 6", logo: "https://placehold.co/200x100" },
]

const PartnersSection = () => {
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: -width,
        transition: {
          duration: 20,
          ease: "linear",
        },
      })
      await controls.set({ x: 0 })
      startAnimation()
    }

    if (width > 0) {
      startAnimation()
    }
  }, [controls, width])

  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Partners</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We collaborate with leading tech companies and educational institutions to provide the best opportunities
            for our students.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0A0A0B] to-transparent pointer-events-none" />

          {/* Scrolling carousel */}
          <motion.div ref={carouselRef} className="flex gap-8 py-8" animate={controls}>
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 flex items-center justify-center p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl min-w-[250px]"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0A0A0B] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default PartnersSection

