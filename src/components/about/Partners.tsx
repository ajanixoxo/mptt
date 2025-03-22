
import { motion } from "framer-motion";
const cards = [
  {
    title: "Partner with Us",
    description:
      "Want to start a tech career, meet mentors, or connect with top companies? Hack-A-Path is your chance!",
    icon: "/fdc.png",
    color: "bg-[#232224B2]",
    borderColor: "border-black border-2",
    bg: "f3",
  },
];
const PartnersSection = () => {


  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proud to partner with leading organizations in tech education.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 place-items-center">
          {/* Left fade gradient */}
       
          {/* Scrolling carousel */}
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`${card.color} ${card.borderColor} border ${card.bg} rounded-xl lg:p-6 flex flex-col items-center justify-center shadow-sm p-2 md:w-1/2 hover:shadow-md transition-shadow relative overflow-hidden`}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4  text-4xl relative">
                <div className="absolute top-0 left-0">
                  <svg
                    width={18}
                    height={23}
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L8.71539 14.4111"
                      stroke="#F9C23A"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.71533 21.8951L8.60809 14.4112"
                      stroke="#F9C23A"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 8.99994L16.7154 12.4111"
                      stroke="#F9C23A"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 8.48395L12.8928 0.999995"
                      stroke="#F9C23A"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <img src={`${card.icon}`} className="" alt="" />

                <div className="absolute bottom-0 right-0">
                  <svg
                    width={18}
                    height={23}
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L8.71539 14.4111"
                      stroke="#F9C23A"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.71533 21.8951L8.60809 14.4112"
                      stroke="#F9C23A"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 8.99994L16.7154 12.4111"
                      stroke="#F9C23A"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 8.48395L12.8928 0.999995"
                      stroke="#F9C23A"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 main_text">{card.title}</h3>
              <p className="text-[#6A6464] text-center sec_text">
                {card.description}
              </p>

              {/* Background Pattern */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full opacity-10 bg-black"></div>
              <div className="absolute right-10 bottom-10 w-4 h-4 rounded-full opacity-10 bg-black"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
