"use client"

import ProgramHero from "@/components/program/ProgramHero"
import CoursesTabs from "@/components/program/CoursesTabs"
import ProgramFeatures from "@/components/program/ProgramFeatures"
import UpcomingEvents from "@/components/program/UpcomingEvents"
import CareerWorkshops from "@/components/program/CareerWorkshops"
import ProgramCTA from "@/components/program/ProgramCTA"


const Program = () => {


    return (
        <>


            <main className="bg-[#0A0A0B] min-h-screen hero-bg">



                {/* Content */}
                <div className="relative z-10">
                   <ProgramHero />
                     <ProgramFeatures />
                    <CoursesTabs />
                    <UpcomingEvents />
                    <CareerWorkshops />
                    <ProgramCTA />
                   
                </div>
            </main>
        </>
    )
}

export default Program

