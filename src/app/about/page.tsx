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

      <main className="dark:bg-[#0A0A0B] bg-[#FEFBEA] min-h-screen ">
    
        {/* Content */}
        <div className="relative z-10">
          <WhyChooseSection />
          <ProblemSection />
          <MissionSection />
          <VisionSection />
          <PartnersSection />
          <TeamSection />

        </div>
      </main>
      <div className="bg-[#FEFBEA] dark:bg-[#0A0A0B]">
        <Footer />
      </div>

    </>
  )
}

export default About

