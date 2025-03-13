"use client"

import { motion } from "framer-motion"

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    color: "from-green-400 to-blue-500",
  },
  {
    name: "Zoe Rodriguez",
    role: "Chief Technology Officer",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Mia Patel",
    role: "Director of Partnerships",
    color: "from-red-400 to-pink-500",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    color: "from-purple-400 to-indigo-500",
  },
]

const TeamSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Meet Our Team</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Led by industry veterans passionate about tech education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                />
                <img src="https://placehold.co/400x500" alt={member.name} className="w-full h-full object-cover" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

