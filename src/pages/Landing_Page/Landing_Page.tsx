"use client"

import Navbar from "../../components/Navbar"
import HeroSection from "./HeroSection"
import FindYourPlace from "./FindYourPlace"
import EventsSection from "./EventsSection"
import SponsorsSection from "./SponsorsSection"
import PathwaysSection from "./PathwaySection.js"
import TestimonialsSection from "./TestimonialsSection"
import Footer from "./Footer"
import { motion } from "framer-motion"

function Landing_Page() {
    return (
        <div className="min-h-screen bg-[#0A0A0B] text-white overflow-hidden">
            {/* Grid Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
            </div>

            {/* Purple Gradient Circle */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1 }}
                className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/30 to-transparent blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10">
                <Navbar />
                <main>
                    <HeroSection />
                    <FindYourPlace />
                    <EventsSection />
                    <SponsorsSection />
                    <PathwaysSection />
                    <TestimonialsSection />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Landing_Page

