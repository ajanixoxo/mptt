import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Moshood Saka",
    role: "Co Founder",
    color: "bg-[#F9C23A]",
    img: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Luis"
  },
  {
    name: "Richard Nonso",
    role: "Co Founder",
    color: "bg-[#704FE6]",
    img: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Wyatt"
  },
  {
    name: "Favour Atere",
    role: "Operational Volunteer",
    color: "bg-pink-400",
    img: "https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=Jude"
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] md:text-[54px] lg:text-[62px] font-bold leading-[120%] tracking-[-3%] text-[#10141D] mb-4">
            Meet Our <span className="text-[#704FE6]">Team</span>
          </h2>
          <p className="text-[#646669] text-[16px] tracking-[-1%] leading-[140%] max-w-2xl mx-auto font-helvetica">
            Led by industry professionals passionate about tech education and community growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className={`absolute inset-0 rounded-[40px] transform rotate-6 border-2 border-[#10141D] opacity-0 group-hover:opacity-10 transition-all duration-300`} />
                <div className={`relative w-48 h-48 rounded-[40px] ${member.color} overflow-hidden border-2 border-[#10141D] shadow-lg group-hover:-translate-y-2 transition-transform duration-300`}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="p-4"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#10141D] mb-1">
                {member.name}
              </h3>
              <p className="text-[#704FE6] font-medium mb-3">
                {member.role}
              </p>
              <p className="text-[#646669] text-sm leading-relaxed max-w-[240px]">
                Passionate about driving innovation and fostering the next generation of tech talent.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

