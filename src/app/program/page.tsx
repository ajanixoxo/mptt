"use client";


import Footer from "@/components/Footer";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import PathHero from "@/components/program/PathHero";
import WhyPlan from "@/components/program/WhyPlan";
import JourneyCarousel from "@/components/program/JourneyCarousel";
import PerfectPath from "@/components/program/PerfectPath";
import ProgramSuccessStories from "@/components/program/ProgramSuccessStories";
import CTASection from "@/components/CTASection";

const Program = () => {
  return (
    <Suspense>
      <Navbar />
      <main className=" min-h-screen">
        <PathHero />
        <WhyPlan />
        <JourneyCarousel />
        <PerfectPath />
        <ProgramSuccessStories />
        <CTASection />
      </main>
      <div className="bg-[#FEFBEA] dark:bg-[#0A0A0B]">
        <Footer />
      </div>
    </Suspense>
  );
};

export default Program;
