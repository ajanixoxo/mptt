"use client"

import ProgramHero from "./ProgramHero"
import CoursesTabs from "./CoursesTabs"
import ProgramFeatures from "./ProgramFeatures"
import UpcomingEvents from "./UpcomingEvents"
import CareerWorkshops from "./CareerWorkshops"
import ProgramCTA from "./ProgramCTA"
import Footer from "../Landing_Page/Footer"

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
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default Program

