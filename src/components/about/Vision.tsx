import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, duration = 2, prefix = "", suffix = "" }: { value: number, duration?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <h1 ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </h1>
  );
};

const ImpactSection = () => {
  const stats = [
    {
      value: 30000,
      suffix: "+",
      label: "Total Students",
      delay: 0.1
    },
    {
      value: 80,
      suffix: "%",
      label: "Success Rate",
      delay: 0.2
    },
    {
      value: 85,
      prefix: "$",
      suffix: "K",
      label: "Avg Salary",
      delay: 0.3
    },
    {
      value: 500,
      suffix: "+",
      label: "Partners",
      delay: 0.4
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
            Our <span className="text-[#704FE6]">Impact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="relative flex flex-col items-center border border-[#E5E7EB] rounded-[16px] text-center p-[24px]"
            >
              

              <div className="text-[32px] md:text-[40px] lg:text-[52px] font-bold text-[#10141D] mb-2 leading-tight">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-[#99A1AF] text-base md:text-lg font-helvetica tracking-[0px leading-[28px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
