import EligibilitySection from "./EligblitySection";
import ApplicationProcessSection from "./ApplicationProcess";
import ProgramDetailsSection from "./ProgramDetailsSection";
import ProgramStructureSection from "./ProgramStructureSection";
import ProgramFeatures from "./ProgramFeatures";
import CoursesTabs from "./CoursesTabs";
import UpcomingEvent from "./UpcomingEvents";

const ProgramInfoSections = () => {
  return (
    <>
      <ProgramDetailsSection />
      <EligibilitySection />
      <ApplicationProcessSection />
      <ProgramFeatures />
      <CoursesTabs />
      <UpcomingEvent />
      <ProgramStructureSection />
    </>
  );
};

export default ProgramInfoSections;
