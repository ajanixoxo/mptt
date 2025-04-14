"use client";

import { motion } from "framer-motion";
import FloatingShape from "../../components/FloatingShape";

const features = [
  {
    title: "Cohort-Based Learning",
    description: "Join a community of peers on the same journey",
    image: "/what.png",
    points: [
      "Learn alongside a diverse group of 20-30 students",
      "Build lasting connections with peers in your field",
      "Collaborate on team projects that simulate real work environments",
      "Celebrate milestones and overcome challenges together",
    ],
  },
  {
    title: "Career-Focused Workshops",
    description: "Develop the professional skills employers demand",
    image: "/what (1).png",
    points: [
      "Resume building and optimization workshops",
      "LinkedIn profile enhancement sessions",
      "Technical interview preparation",
      "Portfolio development and presentation",
    ],
  },
  {
    title: "Industry Mentorship",
    description: "Learn directly from experienced professionals",
    image: "/what (3).png",
    points: [
      "Weekly 1-on-1 sessions with your dedicated mentor",
      "Personalized guidance tailored to your career goal",
      "Direct feedback on your projects and progress",
      "Insider advice on navigating the tech industry",
    ],
  },
  {
    title: "Networking Events",
    description: "Build connections that launch your career",
    image: "/what (4).png",
    points: [
      "Tech career fairs with hiring companies",
      "Industry panels featuring tech leaders",
      "Hackathons and collaborative coding events",
      "Alumni mixers and community gatherings",
    ],
  },
];

const ProgramFeatures = () => {
  return (
    <section className="py-20 px-4 relative dark:bg-gradient-to-b from-[#0A0A0B] to-[#0F0F1A]">
                    <img src="/h_b (2).png" className="absolute right-0 w-5 dark:hidden md:w-8" />
                    <img src="/h_b (1).png" className="absolute left-0 bottom-0 w-5 dark:hidden md:w-8" />
      {/* Floating shape */}
      <FloatingShape
        size="w-60 h-60"
        color="bg-gradient-to-r from-[#1F22CA] to-transparent -left-[40%] -top-20 lg:-left-[10%]"
        // className=""
        position="absolute hidden dark:flex"
        top=""
        left=""
        delay={0.3}
      />

      {/* Stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-40 left-20 hidden dark:flex"
      >
        <motion.img
          src=" /s-star.png"
          alt="Shining star"
          className="w-8 h-8"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>

      {/* Half star */}
      <div className="absolute right-0 lg:right-10 top-40 hidden dark:flex">
        <img src="/s_half.png" className="w-7 md:w-12" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl relative z-30 md:text-5xl font-bold mb-1 dark:text-white">
            What Makes Hack-A-Path Special
          </h2>
          <p className="text-[#a09c9c]  max-w-2xl mx-auto">
            Our comprehensive program combines technical training with career
            development to prepare you for success in tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-2 border-black dark:bg-[#2B2B2B]/80 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-[#6A6464] dark:text-[#a09c9c]">{feature.description}</p>
                  </div>
                </div>
                <div className="absolute  left-0 w-full h-[1px] bg-[#716D6D]">

                </div>
                <div className="mt-6 space-y-3">
                  {feature.points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="mt-1 mr-3 text-[#def134]">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            stroke="#22C55E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.75 12L10.58 14.83L16.25 9.17004"
                            stroke="#22C55E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[#6A6464] dark:text-[#a09c9c]">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
