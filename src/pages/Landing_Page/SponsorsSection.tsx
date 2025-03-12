"use client"

import { motion } from "framer-motion"

const sponsors = [
  { name: "Sponsor 1", logo: "https://placehold.co/200x100" },
  { name: "Sponsor 2", logo: "https://placehold.co/200x100" },
  { name: "Sponsor 3", logo: "https://placehold.co/200x100" },
]

const SponsorsSection = () => {
  return (
    <section className="py-20 px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl"
            >
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection

