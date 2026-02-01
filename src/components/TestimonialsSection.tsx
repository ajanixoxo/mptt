"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Michael Ellison",
    role: "Founder & CEO",
    image: "/v2-images/testimonal.png",
    quote:
      "MyPath2Tech is about empowering students to build their future in tech. We believe in providing the best education and resources to help them succeed.",
  },
  {
    name: "Sarah Johnson",
    role: "Co-Founder & CTO",
    image: "/v2-images/testimonal.png", // Using same image for demo as requested, or placeholder if user wants variety later
    quote:
      "Technology is the great equalizer. Our mission is to ensure everyone has access to the tools and knowledge needed to shape the digital world.",
  },
  {
    name: "David Chen",
    role: "Head of Education",
    image: "/v2-images/testimonal.png",
    quote:
      "We're not just teaching code; we're teaching how to think, solve problems, and innovate. That's the core of what makes our students stand out.",
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  if (!mounted) return null;

  return (
    <section className="py-20 px-4 relative bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[62px] font-bold mb-4 text-[#10141D] leading-[120%] tracking-[-3%]">
            Words from <span className="text-[#704FE6]">Our Founders</span>
          </h2>
          <p className="text-[#646669]  text-sm md:text-base max-w-xl leading-[140%] tracking-[1%] mx-auto">
            Learn about our mission and values from the people who started it all.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex gap-3 items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:left-1 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 hidden md:flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Card */}
          <div className="w-full max-w-4xl bg-white dark:bg-[#111] rounded-[32px] p-8 md:p-12 shadow-[0px_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 min-h-[300px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                {/* Image Profile with Green Border/Background */}
                <div className="relative shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-[32px] overflow-hidden border-4 border-white shadow-sm">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-[18px] text-[#364153]  italic font-medium leading-relaxed mb-6 font-helvetica-bold">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div>
                    <h3 className="text-lg font-bold text-[#10141D] dark:text-white tracking-[-2%] leading-[125%]">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm text-[#646669] tracking-[-1%] leading-[138%]">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:right-1 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 hidden md:flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "w-[32px] h-[12px] bg-[#704FE6]"
                  : "w-[12px] h-[12px] bg-[#704FE6]/30"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
