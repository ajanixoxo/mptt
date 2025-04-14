"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from 'next-themes'
import Link from "next/link";
import Card3 from "./Card3";
import Card2 from "./Card2";
import Card1 from "./Card1";

const cards = [
  {
    title: "Join a Cohort",
    description:
      "Our 3-month program gives you hands-on experience, mentorship, and a clear path into the tech industry.",
    icon: <Card1 />,
    link: "/apply",

    color: "bg-[#232224B2]",
    borderColor: "border-black border-2",
    bg: "f1",
    light_bg: "wf1"
  },
  {
    title: "Volunteer with Us",
    description:
      "Join a crew of changemakers building, mentoring, and bridging the digital gap for underserved communities.",
    icon: <Card2 />,
    link: "https://form.typeform.com/to/NJqPTWhB",
    color: "bg-[#232224B2]",
    borderColor: "border-black border-2",
    bg: "f2",
    light_bg: "wf2"
  },
  {
    title: "Partner with Us",
    description:
      "Corporate, nonprofit, and academic partners — let's create opportunities that change lives.",
    icon: <Card3 />,
    link: "https://form.typeform.com/to/btHLvGZz",

    color: "bg-[#232224B2]",
    borderColor: "border-black border-2",
    bg: "f3",
    light_bg: "wf3"
  },
];

const FindYourPlace = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(true)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  return (
    <section ref={ref} className="py-16 px-4 md:px-6 lg:px-8 bg- relative">
      <div className="absolute flex justify-between w-full -mt-10 lg:mt-10 right-0">
        <img src="/s_half.png" className="w-5 rotate-180 md:w-15 dark:flex hiddden" />
        <img src="/b_star.png" className="w-10  md:w-20 dark:hidden absolute -left-5 flex" />

        <div className=" right-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}
            className="absolute top-[40%] right-[5%] text-blue-400"
          >
            <img src="/s-star.png" className="w-7 md:w-12 dark:flex hidden" />
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 relative"
        >
          <motion.h2
            className="text-3xl main_text md:text-4xl font-bold inline-flex items-center"
            variants={itemVariants}
          >
            Find Your Place in Tech
          </motion.h2>
          <motion.p
            className="text-[#6a6464] max-w-2xl mx-auto sec_text"
            variants={itemVariants}
          >
            Learn with us. Volunteer with us. Partner with us.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cards.map((card, index) => (
            <Link href={card.link}
              key={index}>
              <motion.div
                key={index}
                className={`${card.color} ${card.borderColor} border ${isDark ? card.bg : card.light_bg}   rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mb-4 text-4xl relative">
                  <div className="absolute top-0 left-0">
                    {isDark ?
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
                      </svg> :
                      <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L8.71539 14.4111" stroke="black" stroke-width="2" stroke-linecap="round"/>
                      <path d="M4.71539 21.8951L8.60815 14.4112" stroke="black" stroke-width="2" stroke-linecap="round"/>
                      <path d="M9 9L16.7154 12.4111" stroke="black" stroke-width="2" stroke-linecap="round"/>
                      <path d="M9 8.48401L12.8928 1.00006" stroke="black" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                      
                    }


                  </div>
                  {card.icon}
                  {/* {card.icon} */}

                  <div className="absolute bottom-0 right-0">
                    {isDark ?
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
                      </svg> :
                     <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 11L8.71539 14.4111" stroke="black" stroke-width="2" stroke-linecap="round"/>
                     <path d="M4.71539 21.8951L8.60815 14.4112" stroke="black" stroke-width="2" stroke-linecap="round"/>
                     <path d="M9 9L16.7154 12.4111" stroke="black" stroke-width="2" stroke-linecap="round"/>
                     <path d="M9 8.48401L12.8928 1.00006" stroke="black" stroke-width="2" stroke-linecap="round"/>
                     </svg>
                     
                    }

                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 main_text">{card.title}</h3>
                <p className="text-[#6A6464] text-center sec_text">
                  {card.description}
                </p>

                {/* Background Pattern */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full opacity-10 bg-black"></div>
                <div className="absolute right-10 bottom-10 w-4 h-4 rounded-full opacity-10 bg-black"></div>
              </motion.div></Link>

          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FindYourPlace;
