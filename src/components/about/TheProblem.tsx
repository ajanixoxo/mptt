import { motion } from "framer-motion";
import Image from "next/image";

const WhySection = () => {
  const cards = [
    {
      title: "The Problem",
      description: "Many talented individuals in underrepresented communities face systemic barriers to entry in the tech industry. These barriers include limited access to high-quality resources, mentorship, and professional networks.",
      image: "/v2-images/why1.jpg",
      delay: 0.1
    },
    {
      title: "Our Solution",
      description: "We provide a structured environment where students can learn, build, and connect. By offering free industry-leading curriculum and direct mentorship, we're breaking down barriers and opening doors to high-impact careers.",
      image: "/v2-images/why2.png",
      delay: 0.2
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] md:text-[54px] lg:text-[62px] font-bold leading-[120%] tracking-[-3%] text-[#10141D]">
            Why <span className="text-[#704FE6]">MyPath2Tech</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: card.delay }}
              className="flex flex-col h-full bg-white rounded-[16px] overflow-hidden group shadow-black/10 shadow-sm hover:shadow-lg transition-all duration-500 p-2"
            >
              <div className="relative h-auto w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={636}
                  height={400}
                  className="object-cover rounded-[16px] mx-auto transition-transform duration-700"
                />
                <div className="absolute w-[636px] mx-auto inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/40 rounded-[16px] to-transparent  transition-opacity duration-500" />
              </div>

              <div className="p-3 md:p-6 flex-1 flex flex-col">
                <h3 className="text-2xl md:text-[26px] font-bold text-[#10141D] mb-4">
                  {card.title}
                </h3>
                <p className="text-[#646669] text-base md:text-[16px]  leading-[140%] tracking-[-1%] font-helvetica">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
