"use client"

import ProgramHero from "@/components/program/ProgramHero"
import ProgramCTA from "@/components/program/ProgramCTA"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ProgramInfoSections from "@/components/program/ProgamInfo"


const Program = () => {


    return (
        <>

<Navbar />
            <main className="bg-[#0A0A0B] min-h-screen hero-bg">



                {/* Content */}
                <div className="relative z-10">
                    <ProgramHero />
                    <ProgramInfoSections />
                    <ProgramCTA />

                </div>
            </main>
            <Footer />
        </>
    )
}

export default Program

