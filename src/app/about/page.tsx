"use client"


import AboutHero from "@/components/about/HeroSection"
import RealPaths from "@/components/about/RealPaths"
import WhySection from "@/components/about/TheProblem"
import WhatWeDo from "@/components/about/TheMission"
import ImpactSection from "@/components/about/Vision"
import VolunteerSection from "@/components/VolunteerSection"
import SponsorsSection from "@/components/SponsorsSection"
import TeamSection from "@/components/about/Team"
import FoundedBy from "@/components/about/FoundedBy"
import AboutCTA from "@/components/about/AboutCTA"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-[#0A0A0B] min-h-screen">
        <div className="relative z-10">
          <AboutHero />
          <RealPaths />
          <WhySection />
          <WhatWeDo />
          <ImpactSection />
          <VolunteerSection />
          <SponsorsSection />
          <TeamSection />
          <FoundedBy />
          <AboutCTA />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default About

