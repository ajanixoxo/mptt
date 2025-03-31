"use client"
import { motion, useInView } from "framer-motion"
import { Monitor, Code, Database, Shield, CircleArrowUp, Settings } from "lucide-react"
import { useRef } from "react"
import { useRouter } from "next/navigation"

const pathways = [
  {
    title: "UI/UX Design",
    description: "Learn modern web design principles and tools.",
    icon: Monitor,
    image: "/course (1).png",
    id: "design", // Added ID to match with tabs
  },
  {
    title: "Data Engineering",
    description: "Learn to collect, proceess, analyyse and extract meaningful insights.",
    icon: Database,
    image: "https://cdn.prod.website-files.com/64fef88ee8b22d3d21b715a2/657c2bfd9d07f76a47c70ce8_64c0dfda42c1ee625bb4640c_Blog%2520image%2520(1).webp",
    id: "data", // Added ID to match with tabs
  },
  {
    title: "Software Engineering",
    description: "Learn modern web application development.",
    icon: Code,
    image: "/course (2).png",
    id: "software", // Added ID to match with tabs
  },
  { 
    title: "DevOps",
    description: "Learn to bridge development and operations.",
    icon: Settings,
    image: "/course (3).png",
    id: "devops", // Added ID to match with tabs
  },
  {
    title: "Cybersecurity",
    description: "Learn to attack & protect systems and networks.",
    icon: Shield,
    image: "/course (4).png",
    id: "cyber", // Added ID to match with tabs
  }
  
]

const PathwaysSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const router = useRouter()

  // Updated to navigate to specific course tab
  const handlePush = (courseId:string) => {
    router.push(`/program?course=${courseId}`)
  }

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
          <p className="text-[#a09c9c] max-w-2xl mx-auto">
            Explore our specialized career tracks designed to prepare you for the tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-[#232224B2] backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="relative h-48 p-1">
                <img
                  src={pathway.image || "/placeholder.svg"}
                  alt={pathway.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4">
                  <pathway.icon size={24} color="#F9C23A"/>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 w-max">{pathway.title}</h3>
                <p className="text-[#a09c9c] mb-4 h-16">{pathway.description}</p>
                <motion.div
                  className="mt-12 text-center"
                  variants={itemVariants}
                  initial="visible"
                  animate={isInView ? "visible" : "visible"}
                >
                  <motion.button
                    className="bg-[#74767F] w-full text-center cursor-pointer justify-center text-white px-6 py-3 rounded-2xl font-medium inline-flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePush(pathway.id ?? "")} // Pass the course ID
                  >
                    <span>Explore Path</span>
                    <CircleArrowUp className="rotate-45" />
                  </motion.button>
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

