"use client"
import HeroSection from "@/components/HeroSection"
import FindYourPlace from "@/components/FindYourPlace"
import EventsSection from "@/components/EventsSection"
import SponsorsSection from "@/components/SponsorsSection"
import PathwaysSection from "@/components/PathwaySection"
import TestimonialsSection from "@/components/TestimonialsSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white overflow-hidden">
       <HeroSection />
     <FindYourPlace />
      <EventsSection />
     <SponsorsSection />
       <PathwaysSection />
      <TestimonialsSection />
    </div>
  );
}
