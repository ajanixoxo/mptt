"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"

const partners = [
  { name: "Partners 1", logo: "/sp (1).png" },
  { name: "Partners 2", logo: "/sp (2).png" },
  { name: "Partners 3", logo: "/sp (3).png" },
  { name: "Partners 4", logo: "/sp (3).png" },
  { name: "Partners 5", logo: "/sp (1).png" },
  { name: "Partners 6", logo: "/sp (2).png" },
  { name: "Partners 7", logo: "/sp (3).png" },
  { name: "Partners 8", logo: "/sp (1).png" },
]
const partners2 = [
  { name: "Partners 1", logo: "/sp (5).png" },
  { name: "Partners 2", logo: "/sp (6).png" },
  { name: "Partners 3", logo: "/sp (7).png" },
  { name: "Partners 4", logo: "/sp (8).png" },
  { name: "Partners 5", logo: "/sp (8).png" },
  { name: "Partners 6", logo: "/sp (6).png" },
  { name: "Partners 7", logo: "/sp (7).png" },
  { name: "Partners 8", logo: "/sp (5).png" },
]

const PartnersSection = () => {
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: -width,
        transition: {
          duration: 20,
          ease: "linear",
        },
      })
      await controls.set({ x: 0 })
      startAnimation()
    }

    if (width > 0) {
      startAnimation()
    }
  }, [controls, width])

  return (
    <section className="py-20 px-4 relative">
         <div className="container mx-auto max-w-6xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="text-center mb-12"
           >
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partnern</h2>
             <p className="text-gray-400 max-w-2xl mx-auto">
               Proud to partner with leading organizations in tech education.
             </p>
           </motion.div>
   
           {/* Carousel container with overflow hidden */}
           <div className="relative overflow-hidden">
             {/* Left fade gradient */}
             <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0A0A0B] to-transparent pointer-events-none" />
   
             {/* Scrolling carousel */}
             <motion.div ref={carouselRef} className="flex gap-8 py-8" animate={controls}>
               {partners.map((partner, index) => (
                 <motion.div
                   key={`${partner.name}-${index}`}
                   whileHover={{ scale: 1.05 }}
                   className="flex-shrink-0 flex items-center justify-center p-8 rounded-xl min-w-[250px]"
                 >
                   <img
                     src={partner.logo || "https://placehold.co/200x100"}
                     alt={partner.name}
                     className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all"
                   />
                 </motion.div>
               ))}
   
               {/* Duplicate partners for seamless looping */}
               {partners.map((partner, index) => (
                 <motion.div
                   key={`${partner.name}-duplicate-${index}`}
                   whileHover={{ scale: 1.05 }}
                   className="flex-shrink-0 flex items-center justify-center p-8  rounded-xl min-w-[250px]"
                 >
                   <img
                     src={partner.logo || "https://placehold.co/200x100"}
                     alt={partner.name}
                     className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all"
                   />
                 </motion.div>
               ))}
             </motion.div>
             <motion.div ref={carouselRef} className="flex gap-8 py-8" animate={controls}>
               {partners2.map((partner, index) => (
                 <motion.div
                   key={`${partner.name}-${index}`}
                   whileHover={{ scale: 1.05 }}
                   className="flex-shrink-0 flex items-center justify-center p-8 rounded-xl min-w-[250px]"
                 >
                   <img
                     src={partner.logo || "https://placehold.co/200x100"}
                     alt={partner.name}
                     className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all"
                   />
                 </motion.div>
               ))}
   
               {/* Duplicate partners for seamless looping */}
               {partners2.map((partner, index) => (
                 <motion.div
                   key={`${partner.name}-duplicate-${index}`}
                   whileHover={{ scale: 1.05 }}
                   className="flex-shrink-0 flex items-center justify-center p-8  rounded-xl min-w-[250px]"
                 >
                   <img
                     src={partner.logo || "https://placehold.co/200x100"}
                     alt={partner.name}
                     className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all"
                   />
                 </motion.div>
               ))}
             </motion.div>
   
             {/* Right fade gradient */}
             <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0A0A0B] to-transparent pointer-events-none" />
           </div>
         </div>
       </section>
  )
}

export default PartnersSection

