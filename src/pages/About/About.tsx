"use client"


import VisionSection from "./Vision"
import TeamSection from "./Team"
import ProblemSection from "./TheProblem"
import MissionSection from "./TheMission"
// import PartnersSection from "./Partners"
import WhyChooseSection from "./HeroSection"
import Footer from "../Landing_Page/Footer"

const About = () => {


  return (
    <>

      <main className="bg-[#0A0A0B] min-h-screen ">
        {/* Grid Background */}
        {/* <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
        </div> */}

        {/* Content */}
        <div className="relative z-10">
          <WhyChooseSection />
          <ProblemSection />
          <MissionSection />

          <VisionSection />


          <TeamSection />
          {/* <PartnersSection /> */}
          <Footer />
        </div>
      </main>
    </>
  )
}

export default About

