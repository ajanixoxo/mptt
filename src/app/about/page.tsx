"use client"


import VisionSection from "@/components/about/Vision"
import TeamSection from "@/components/about/Team"
import ProblemSection from "@/components/about/TheProblem"
import MissionSection from "@/components/about/TheMission"
import PartnersSection from "@/components/about/Partners"
import WhyChooseSection from "@/components/about/HeroSection"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const About = () => {


  return (
    <>
      <Navbar />
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
          <PartnersSection />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default About

