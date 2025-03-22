"use client"
import { motion, useInView } from "framer-motion"
import { Monitor, Code, Database, Shield, CircleArrowUp } from "lucide-react"
import { useRef } from "react"

const pathways = [
  {
    title: "UI/UX Design",
    description: "Learn modern design principles and tools.",
    icon: Monitor,
    image: "/course (1).png",
  },
  {
    title: "Software Engineering",
    description: "Master coding and software development.",
    icon: Code,
    image: "/course (2).png",
  },
  {
    title: "DevOps",
    description: "Bridge development and operations.",
    icon: Database,
    image: "/course (3).png",
  },
  {
    title: "Cybersecurity",
    description: "Protect Computer systems and networks.",
    icon: Shield,
    image: "/course (4).png",
  }
  // {
  //   title: "Data Engineering",
  //   description: " Work with real data and analytics.",
  //   icon: Shield,
  //   image: "/course (5).png",
  // },
]

const PathwaysSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-8xl">
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
              className="bg-[#232224B2] backdrop-blur-sm  rounded-xl overflow-hidden"
            >
              <div className="relative h-48 p-1">
                <img
                  src={pathway.image || "/placeholder.svg"}
                  alt={pathway.title}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" /> */}
                <div className="absolute bottom-4 left-4">
                  <pathway.icon className="text-purple-400" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 w-max">{pathway.title}</h3>
                <p className="text-gray-400 mb-4">{pathway.description}</p>
                <motion.div
                  className="mt-12 text-center"
                  variants={itemVariants}
                  initial="visible"
                  animate={isInView ? "visible" : "visible"}
                >
                  <motion.button
                    className="bg-[#74767F] hover:bg-[#666870] w-full text-center  justify-center   text-white px-6 py-3 rounded-2xl font-medium inline-flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Explore Path</span>

                    <CircleArrowUp className="rotate-45" />
                  </motion.button>
                  {/* <Button text="Register Now" bg="bg-[#2B2B2B]" /> */}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PathwaysSection

