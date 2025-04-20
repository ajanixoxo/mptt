"use client";

import ProgramHero from "@/components/program/ProgramHero";
import ProgramCTA from "@/components/program/ProgramCTA";
import Footer from "@/components/Footer";
import ProgramInfoSections from "@/components/program/ProgamInfo";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";

const Program = () => {
  return (
    <Suspense>
     <Navbar />
      <main className="dark:bg-[#0A0A0B] bg-[#FEFBEA] min-h-screen hero-bg">
        {/* Content */}
        <div className="relative z-10">
          <ProgramHero />
          <ProgramInfoSections />
          <ProgramCTA />
        </div>
      </main>
      <div className="bg-[#FEFBEA] dark:bg-[#0A0A0B]">
        <Footer />
      </div>
    </Suspense>
  );
};

export default Program;
