"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebDevHero from "@/components/course/web-dev/WebDevHero";
import WebDevFeatures from "@/components/course/web-dev/WebDevFeatures";
import CourseOverview from "@/components/course/web-dev/CourseOverview";
import EligibilitySection from "@/components/course/web-dev/EligibilitySection";
import LearningPath from "@/components/course/web-dev/LearningPath";
import WhyTakeCourse from "@/components/course/web-dev/WhyTakeCourse";
import AppProcess from "@/components/course/web-dev/AppProcess";
import WebDevEvents from "@/components/course/web-dev/WebDevEvents";
import ProgramSuccessStories from "@/components/program/ProgramSuccessStories";
import FAQSection from "@/components/program/FAQSection";
import CTASection from "@/components/CTASection";


const WebDevCoursePage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <WebDevHero />
                <WebDevFeatures />
                <CourseOverview />
                <EligibilitySection />
                <LearningPath />
                <WhyTakeCourse />
                <AppProcess />
                <WebDevEvents />
                <ProgramSuccessStories />
                <FAQSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default WebDevCoursePage;
