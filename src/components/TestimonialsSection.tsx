"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import FloatingShape from "@/components/FloatingShape";

const testimonials = [
  {
    name: "Jake Thompson",
    role: "UI/UX Designer",
    image: "/test (2).png",
    quote:
      "Hack-A-Path showed me the power of tech! I built my first website and now I work as a designer.",
    rating: 5,
  },
  {
    name: "Esther Peters",
    role: "Software Engineer",
    image: "/test (1).png ",
    quote:
      "The UX/UI track at Hack-A-Path helped me transition from graphic design to product design.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute flex justify-between w-full -mt-10  right-0">
        <div className=" -ml-10 text-purple-400 ">
          <FloatingShape
            color="from-[#1F22CA] to-transparent"
            size="w-60 h-60"
            position=""
            top="35%"
            left="18%"
            delay={0}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute left-[20%] top-[70%]"
          >
            <img src="/s-star.png" className="w-7 md:w-12 -mt-32" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.5,
          }}
          className=" bottom-40 left-20 mt-20 text-blue-400"
        >
          <img src="/s_half.png" className="w-7 md:w-12" />
        </motion.div>
      </div>
      <div className="container mx-auto max-w-7xl md:max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="main_text text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <img
            src="/line.png"
            className="absolute z-10 w-[40%] lg:top-auto top-[25%] lg:w-auto left-[5%] lg:left-[20%]"
          />
          <p className="text-[#a09c9c] max-w-2xl relative z-20 mx-auto">
            Real experiences. Real success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-[#232224B2] backdrop-blur-sm mt-7  rounded-xl p-6"
            >
              <div className="justify-between flex">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-[#a09c9c] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#F9C23A] fill-current"
                      size={16}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bg-[#716D6D] w-full h-[1px] mb-2 left-0 ext-[#979292]"></div>

              <p className="text-gray-300 inline-flex gap-2 italic mt-3 relative">
                <svg
                  width={28}
                  className=" w-12 lg:w-auto"
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12.3501H7.79999C9.32999 12.3501 10.38 13.5101 10.38 14.9301V18.1501C10.38 19.5701 9.32999 20.7301 7.79999 20.7301H4.58002C3.16002 20.7301 2 19.5701 2 18.1501V12.3501"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12.35C2 6.29998 3.13003 5.30003 6.53003 3.28003"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.6299 12.3501H19.4299C20.9599 12.3501 22.0099 13.5101 22.0099 14.9301V18.1501C22.0099 19.5701 20.9599 20.7301 19.4299 20.7301H16.2099C14.7899 20.7301 13.6299 19.5701 13.6299 18.1501V12.3501"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.6299 12.35C13.6299 6.29998 14.7599 5.30003 18.1599 3.28003"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {testimonial.quote}
                <svg
                  className="mt-14 md:mt-10 rotate-180 w-12 lg:w-auto"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12.3501H7.79999C9.32999 12.3501 10.38 13.5101 10.38 14.9301V18.1501C10.38 19.5701 9.32999 20.7301 7.79999 20.7301H4.58002C3.16002 20.7301 2 19.5701 2 18.1501V12.3501"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12.35C2 6.29998 3.13003 5.30003 6.53003 3.28003"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.6299 12.3501H19.4299C20.9599 12.3501 22.0099 13.5101 22.0099 14.9301V18.1501C22.0099 19.5701 20.9599 20.7301 19.4299 20.7301H16.2099C14.7899 20.7301 13.6299 19.5701 13.6299 18.1501V12.3501"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.6299 12.35C13.6299 6.29998 14.7599 5.30003 18.1599 3.28003"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
