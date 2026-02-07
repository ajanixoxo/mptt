import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCollage from "@/components/EventCollage";
import CTASection from "@/components/CTASection";

export default function EventsPage() {
    return (
        <>
            <Navbar />
            <div className="pt-20 min-h-screen bg-white dark:bg-[#0A0A0B]">
                <EventCollage />
                <CTASection />
            </div>
            <div className="bg-[#FEFBEA] dark:bg-[#0A0A0B]">
                <Footer />
            </div>
        </>
    );
}
