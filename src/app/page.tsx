"use client"
import HeroSection from "@/components/HeroSection"
import FindYourPlace from "@/components/FindYourPlace"
import EventsSection from "@/components/EventsSection"
import SponsorsSection from "@/components/SponsorsSection"
import PathwaysSection from "@/components/PathwaySection"
import TestimonialsSection from "@/components/TestimonialsSection"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SuccessStories from "@/components/SuccessStories"


export default function Home() {
  return (

    <>

      <Navbar />
      <div className="min-h-screen   overflow-hidden">

        <HeroSection />
        <SponsorsSection />
        <FindYourPlace />
        <SuccessStories />
        {/*     <EventsSection />
        <PathwaysSection />
        <TestimonialsSection /> 
      */}
      </div>
      <div className="  bg-[#FEFBEA] dark:bg-[#0A0A0B]">
        <Footer />
      </div>
    </>
  );
}
