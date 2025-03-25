"use client"
import HeroSection from "@/components/HeroSection"
import FindYourPlace from "@/components/FindYourPlace"
import EventsSection from "@/components/EventsSection"
import SponsorsSection from "@/components/SponsorsSection"
import PathwaysSection from "@/components/PathwaySection"
import TestimonialsSection from "@/components/TestimonialsSection"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (

    <>
  
      <Navbar />
      <div className="min-h-screen bg-[#0A0A0B]  overflow-hidden">
       
        <HeroSection />
        <FindYourPlace />
        <EventsSection />
        <PathwaysSection />
        <TestimonialsSection /> 
        <SponsorsSection />
      </div>
      <div className=" bg-[#0A0A0B]">
      <Footer />
      </div>
    </>
  );
}
