"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseHero from "@/components/program/CourseHero";
import CourseListing from "@/components/program/CourseListing";
import ApplicationStatus from "@/components/program/ApplicationStatus";
import WhyChoose from "@/components/program/WhyChoose";
import ProgramSuccessStories from "@/components/program/ProgramSuccessStories";
import FAQSection from "@/components/program/FAQSection";

export default function Courses() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <main>
                <CourseHero />
                <CourseListing />
                <ApplicationStatus />
                <WhyChoose />
                <ProgramSuccessStories />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
