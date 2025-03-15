"use client"

import { motion } from "framer-motion"
import FloatingShape from "@/components/FloatingShape"


const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    color: "bg-[#F9C23A]",
  },
  {
    name: "Zoe Rodriguez",
    role: "Chief Technology Officer",
    color: "bg-green-400",
  },
  {
    name: "Mia Patel",
    role: "Director of Partnerships",
    color: "bg-pink-500",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    color: "bg-purple-400",
  },
]

const TeamSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute flex justify-between w-full -mt-10  right-0">

        <div
          className=" -ml-10 text-purple-400">
          <FloatingShape color='from-[#1F22CA] to-transparent' size='lg:w-60 w-32 h-32 lg:h-60' position="" top='35%' left='18%' delay={0} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}

          >

            <img src="/s-star.png" className="w-7 md:w-12 ml-40 -mt-32" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          className=" bottom-40 left-20 mt-20 text-blue-400"
        >
          <img src='/s_half.png' className="w-7 md:w-12" />
        </motion.div>




      </div>
      <div className="container mx-auto max-w-7xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-4 gap-10 w-full">
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
              <div className="relative overflow-hidden rounded-lg z-10 h-max ">


                <div
                  className={`mt-4 mr-5 rounded-2xl h-36  w-60 ${member.color} z-10`}
                />
                <div className="top-0 absolute flex items-center  ml-2 h-36 w-[250px] bg-white rounded-2xl  z-20  h-30 object-contain" >
                  <div className="relative bottom-0 left-0 right-0 p-4 ">
                    <h3 className="text-xl font-semibold text-black mb-1">{member.name}</h3>
                    <p className="text-gray-800 text-sm">{member.role}</p>
                  </div>
                </div>
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

