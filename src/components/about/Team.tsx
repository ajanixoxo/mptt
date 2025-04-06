"use client"

import { motion } from "framer-motion"
import FloatingShape from "@/components/FloatingShape"


const team = [
  {
    name: "Moshood Saka ",
    role: "Co Founder",
    color: "bg-[#F9C23A]",
    img:"https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Luis"
  },
  {
    name: "Richard Nonso",
    role: "Co Founder",
    color: "bg-green-400",
    img:"https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Wyatt"

  },
  {
    name: "Favour Atere",
    role: "Operational Volunteer",
    color: "bg-pink-500",
    img:"https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=Jude"

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

            <img src="/s-star.png" className="w-7 md:w-10 ml-64 -mt-32" />
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

          <h2 className="text-4xl md:text-5xl font-bold mb-1 text-white">Meet Our Team</h2>
          <p className="text-[#a09c9c] text-lg max-w-2xl mx-auto">

            Led by industry professionals passionate about tech education
          </p>
        </motion.div>

        <div className="grid grid-cols-1  place-items-center gap-5 lg:gap-1 lg:grid-cols-3 w-full">
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
                  className={`mt-4 mr-5 rounded-2xl h-20  w-60 ${member.color} z-10`}
                />
                <div className="top-0 lg:top-2 absolute gap-1  flex items-center justify-start  ml-1 h-20 w-[250px] bg-white rounded-2xl border border-black  z-20  -30 object-contain" >
                  <div className="pl-2">
                    <img src={member.img} className="rounded-2xl  border border-black w-16" />
                  </div>
                  <div className=" flex flex-col text-left justify-start  p-1 ">
                    <h3 className="text-xl font-semibold text-black mb-1 w-max">{member.name}</h3>
                    <p className="text-gray-800 text-sm w-max">{member.role}</p>
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

