import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Moshood Saka",
    role: "Co Founder",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Richard Nonso",
    role: "Co Founder",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Favour Atere",
    role: "Operational Volunteer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
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
          <h2 className="text-[36px] md:text-[54px] lg:text-[62px] font-bold leading-[120%] tracking-[-3%] text-[#10141D] mb-2">
            Meet Our <span className="text-[#704FE6]">Team</span>
          </h2>
          <p className="text-[#646669] text-[16px] md:text-lg tracking-[-1%] leading-[140%] max-w-2xl mx-auto font-helvetica">
            Led by industry professionals passionate about tech education and community growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12  mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-[4/3] md:aspect-[5/6] mb-6 overflow-hidden rounded-[24px]">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-2xl md:text-[28px] font-bold text-[#10141D] mb-1">
                {member.name}
              </h3>
              <p className="text-[#646669] text-base md:text-lg font-helvetica font-regular">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

