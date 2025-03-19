import {  useRef } from "react";

const partners = [
  { name: "Partners 1", logo: "/sp (1).png" },
  { name: "Partners 2", logo: "/sp (2).png" },
  { name: "Partners 3", logo: "/sp (3).png" },
  { name: "Partners 4", logo: "/sp (3).png" },
  { name: "Partners 5", logo: "/sp (1).png" },
  { name: "Partners 6", logo: "/sp (2).png" },
  { name: "Partners 7", logo: "/sp (3).png" },
  { name: "Partners 8", logo: "/sp (1).png" },
];

const partners2 = [
  { name: "Partners 1", logo: "/sp (5).png" },
  { name: "Partners 2", logo: "/sp (6).png" },
  { name: "Partners 3", logo: "/sp (7).png" },
  { name: "Partners 4", logo: "/sp (8).png" },
  { name: "Partners 5", logo: "/sp (8).png" },
  { name: "Partners 6", logo: "/sp (6).png" },
  { name: "Partners 7", logo: "/sp (7).png" },
  { name: "Partners 8", logo: "/sp (5).png" },
];
const PartnersSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proud to partner with leading organizations in tech education.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0A0A0B] to-transparent pointer-events-none" />

          {/* Scrolling carousel */}
          <div ref={carouselRef} className="scrolling-carousel flex gap-8 py-8">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-8 rounded-xl min-w-[250px] hover:scale-105 transition-transform"
              >
                <img
                  src={partner.logo || "https://placehold.co/200x100"}
                  alt={partner.name}
                  className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
          <div ref={carouselRef} className="scrolling-carousel flex gap-8 py-8">
            {[...partners2, ...partners2].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-8 rounded-xl min-w-[250px] hover:scale-105 transition-transform"
              >
                <img
                  src={partner.logo || "https://placehold.co/200x100"}
                  alt={partner.name}
                  className="max-h-12 w-auto filter grayscale-50 hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0A0A0B] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;