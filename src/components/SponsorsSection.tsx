
interface SponsorsSectionProps {
  showCalendar?: boolean;
}

const SponsorsSection = ({ showCalendar = false }: SponsorsSectionProps) => {
  // const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="md:py-10 px-2 md:px-4 relative ">

      <div className="container mx-auto md:max-w-6xl">
        <div className="text-center mb-2">
          <h2 className="text-[30px] md:text-[62px] mt-4 font-semibold leading-[120%] tracking-[-3%]">Our <span className="text-[#704FE6]">Sponsors</span> and <span className="text-[#704FE6]">Partners</span></h2>
          <p className="text-[#646669] text-[14px] max-w-2xl mx-auto tracking-[-1%] leading-[140%] ">
            Proud to partner with leading organizations in tech education.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Left fade gradient */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#FEFBEA] dark:from-[#0A0A0B] to-transparent pointer-events-none" /> */}

          {/* Scrolling carousel */}
          <div className=" flex items-center justify-center gap-8 py-4">
            <div className="flex items-center justify-center p-4 rounded-xl min-w-[250px] hover:scale-105 transition-transform">
              <img
                src="/white_sponsor.jpg"
                alt=""
                className="max-h-96  w-full lg:w-[70%] transition-all"
              />
            </div>
          </div>

          {/* Right fade gradient */}
          {/* <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#FEFBEA] dark:from-[#0A0A0B]  to-transparent pointer-events-none" /> */}
        </div>

        {showCalendar && (
          <div className="mt-12 flex justify-center w-full px-4">
            <div className="w-full max-w-[600px] aspect-[4/3] md:h-[450px]">
              <iframe
                src="https://luma.com/embed/calendar/cal-WxEV1KBTNTQPGms/events?light=1"
                width="100%"
                height="100%"
                style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SponsorsSection;
