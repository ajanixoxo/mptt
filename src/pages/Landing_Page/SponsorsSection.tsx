"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"

const sponsors = [
  { name: "Sponsor 1", logo: "/sp (1).png" },
  { name: "Sponsor 2", logo: "/sp (2).png" },
  { name: "Sponsor 3", logo: "/sp (3).png" },
  { name: "Sponsor 4", logo: "/sp (3).png" },
  { name: "Sponsor 5", logo: "/sp (1).png" },
  { name: "Sponsor 6", logo: "/sp (2).png" },
  { name: "Sponsor 7", logo: "/sp (3).png" },
  { name: "Sponsor 8", logo: "/sp (1).png" },
]

const SponsorsSection = () => {
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  // Calculate the width of the carousel
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  // Start the infinite scroll animation
  useEffect(() => {
    const startAnimation = async () => {
      // First animation - scroll to the end
      await controls.start({
        x: -width,
        transition: {
          duration: 20,
          ease: "linear",
        },
      })

      // Reset position without animation
      await controls.set({ x: 0 })

      // Restart the animation
      startAnimation()
    }

    if (width > 0) {
      startAnimation()
    }
  }, [controls, width])

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proud to partner with leading organizations in tech education.
          </p>
        </motion.div>

        {/* Carousel container with overflow hidden */}
        <div className="relative overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0A0A0B] to-transparent pointer-events-none" />

          {/* Scrolling carousel */}
          <motion.div ref={carouselRef} className="flex gap-8 py-8" animate={controls}>
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={`${sponsor.name}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 flex items-center justify-center p-8 rounded-xl min-w-[250px]"
              >
                <img
                  src={sponsor.logo || "https://placehold.co/200x100"}
                  alt={sponsor.name}
                  className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}

            {/* Duplicate sponsors for seamless looping */}
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={`${sponsor.name}-duplicate-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 flex items-center justify-center p-8  rounded-xl min-w-[250px]"
              >
                <img
                  src={sponsor.logo || "https://placehold.co/200x100"}
                  alt={sponsor.name}
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

export default SponsorsSection

