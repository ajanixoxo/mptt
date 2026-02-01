import { motion } from "framer-motion";
import Image from "next/image";

const WhatWeDo = () => {
  const categories = [
    {
      title: "For Students",
      description: "Free technical courses, career support, and mentorship to help you break into tech",
      icon: "/v2-images/for-students.svg",
      items: [
        "Direct path to industry",
        "Mentorship from professionals",
        "Hands-on project implementation",
        "Career counseling & support",
        "Network expansion"
      ],
      delay: 0.1
    },
    {
      title: "For Colleges",
      description: "Partner with us to provide your students with cutting-edge tech education",
      icon: "/v2-images/for-colleges.svg",
      items: [
        "Practical degree enhancement",
        "Industry-aligned curriculum",
        "Student success tracking",
        "Guest lecture opportunities",
        "Corporate connections"
      ],
      delay: 0.2
    },
    {
      title: "For Employers",
      description: "Access a pipeline of diverse, skilled talent ready to make an impact",
      icon: "/v2-images/for-employers.svg",
      items: [
        "Access to pre-vetted talent",
        "Specialized skill matching",
        "CSR opportunities",
        "Branding and awareness",
        "Pipeline development"
      ],
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] md:text-[54px] lg:text-[62px] font-bold leading-[120%] tracking-[-3%] text-[#10141D]">
            What <span className="text-[#704FE6]">We</span> Do
          </h2>
          <p className="text-[#4A5565] text-lg max-w-2xl mx-auto mt-4 font-helvetica leading-[140%] tracking-[-1%]">
           We serve students, colleges, and employers to create a more inclusive tech ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: cat.delay }}
              className="p-4 rounded-[32px] border border-[#E5E7EB] bg-white  space-y-3"
            >
              <div className="w-[156px] h-[140px] ">
                <Image src={cat.icon} alt={cat.title} width={64} height={64} className="w-full h-full object-contain" />
              </div>

              <h3 className="text-2xl font-bold text-[#10141D] mb-6">{cat.title}</h3>
              <p className="text-[#4A5565] text-lg  mx-auto mt-4 font-helvetica leading-[140%] tracking-[-1%]">{cat.description}</p>

              <ul className="space-y-4">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="#" />
                        <path d="M6 10L8.66667 12.6667L14 7.33333" stroke="#00C950" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[#646669] text-base leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
