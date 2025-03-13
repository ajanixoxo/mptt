"use client"

import { motion } from "framer-motion"
import { Monitor, Code, Database, Shield } from "lucide-react"

const pathways = [
  {
    title: "UI/UX Design",
    description: "Learn modern design principles and tools.",
    icon: Monitor,
    image: "https://placehold.co/600x400",
  },
  {
    title: "Software Engineering",
    description: "Master coding and software development.",
    icon: Code,
    image: "https://placehold.co/600x400",
  },
  {
    title: "DevOps",
    description: "Bridge development and operations.",
    icon: Database,
    image: "https://placehold.co/600x400",
  },
  {
    title: "Cybersecurity",
    description: "Protect systems and networks.",
    icon: Shield,
    image: "https://placehold.co/600x400",
  },
]

const PathwaysSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Tech Pathway</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our specialized career tracks designed to prepare you for the tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={pathway.image || "/placeholder.svg"}
                  alt={pathway.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <pathway.icon className="text-purple-400" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pathway.title}</h3>
                <p className="text-gray-400 mb-4">{pathway.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  Explore Path
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PathwaysSection

