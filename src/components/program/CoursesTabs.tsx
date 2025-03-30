"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Shield, Palette, Settings } from "lucide-react";
// import FloatingShape from "../../components/FloatingShape"
// import { CircleArrowUp } from "lucide-react";
import { useSearchParams } from "next/navigation"

const courses = [
  {
    id: "software",
    title: "Software Engineering",
    icon: Code,
    description:
      "Learn to design, develop, and deploy web and mobile applications that solve real-world problems. Master modern programming languages and frameworks while building a portfolio of projects.",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "APIs",
      "Databases",
      "Git & Github",
      "Testing",
    ],
    projects: [
      "Social media application",
      "E-commerce platform",
      "Personal portfolio website",
      "Mobile app with React Native",
    ],
    careers: {
      roles: [
        "Front-End Developer",
        "Back-End Developer",
        "Full-Stack Engineer",
        "Mobile Developer",
      ],
      salary: "$70,000 - $120,000",
      demand: "86%",
    },
    image: "/course.png",
  },
  {
    id: "data",
    title: "Data Engineering",
    icon: Database,
    description: "Learn to collect, process, and analyze large datasets to extract meaningful insights. Build data pipelines, create visualizations, and develop data-driven applications.",
    skills: [
      "Python",
      "SQL",
      "Data Modeling",
      "ETL",
      "Big Data",
      "Data Warehousing",
      "Analytics",
    ],
    projects: [
      "Data pipeline automation",
      "Analytics dashboard",
      "Machine learning model",
      "Business intelligence tool",
    ],
    careers: {
      roles: [
        "Data Engineer",
        "Data Analyst",
        "Business Intelligence Developer",
        "ETL Developer",
      ],
      salary: "$75,000 - $130,000",
      demand: "92%",
    },
    image: "/course (5).png",
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    icon: Shield,
    description: "Learn to identify vulnerabilities, implement security measures, and protect digital assets from cyber threats. Develop skills in ethical hacking, security analysis, and incident response.",
    skills: [
      "Network Security",
      "Ethical Hacking",
      "Security Tools",
      "Risk Assessment",
      "Incident Response",
    ],
    projects: [
      "Security audit report",
      "Penetration testing",
      "Security monitoring system",
      "Incident response plan",
    ],
    careers: {
      roles: [
        "Security Analyst",
        "Security Engineer",
        "Penetration Tester",
        "Security Consultant",
      ],
      salary: "$80,000 - $140,000",
      demand: "94%",
    },
    image: "/course (3).png",
  },
  {
    id: "design",
    title: "UI/UX Design",
    icon: Palette,
    description: "Learn to design user interfaces and experiences that are both visually appealing and functional. Master design tools, user research methods, and prototyping techniques.",
    skills: [
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    projects: [
      "Mobile app redesign",
      "Website prototype",
      "Design system",
      "User research study",
    ],
    careers: {
      roles: [
        "UI Designer",
        "UX Designer",
        "Product Designer",
        "Interaction Designer",
      ],
      salary: "$65,000 - $110,000",
      demand: "78%",
    },
    image: "/course (4).png",
  },
  {
    id: "devops",
    title: "DevOps",
    icon: Settings,
    description: "Learn to streamline development processes and optimize deployment pipelines. Master cloud services, containerization, and automation to ensure reliable and scalable applications.",
    skills: [
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Cloud Platforms",
      "Infrastructure as Code",
    ],
    projects: [
      "Automated deployment pipeline",
      "Cloud infrastructure setup",
      "Monitoring system",
      "Container orchestration",
    ],
    careers: {
      roles: [
        "DevOps Engineer",
        "Cloud Engineer",
        "Site Reliability Engineer",
        "Infrastructure Engineer",
      ],
      salary: "$85,000 - $150,000",
      demand: "90%",
    },
    image: "/course (4).png",
  },
];

const CoursesTabs = () => {
  const [activeTab, setActiveTab] = useState("software")
  const searchParams = useSearchParams()
  const activeCourse = courses.find((course) => course.id === activeTab)

 // Create a ref for the section
 useEffect(() => {
  // This ensures we start at the top of the page
  window.scrollTo(0, 0)
}, [])
// Create a ref for the section and scroll anchor
const sectionRef = useRef(null)
const scrollAnchorRef = useRef<HTMLAnchorElement | null>(null);


// Read the course parameter from URL when component mounts
useEffect(() => {
  const courseParam = searchParams.get("course")
  if (courseParam && courses.some((course) => course.id === courseParam)) {
    setActiveTab(courseParam)

    // Simulate a click on the scroll anchor after a delay
    setTimeout(() => {
      if (scrollAnchorRef.current) {
        scrollAnchorRef.current.click() 
      }
    }, 800) // Longer delay to ensure everything is loaded
  }
}, [searchParams])


  return (
    <section className="py-20 px-4 relative" id="course-tabs-section" ref={sectionRef}>
        <a ref={scrollAnchorRef} href="#course-tabs-section" className="hidden" aria-hidden="true">
        Scroll to courses
      </a>

      <div className="absolute top-6 left-0 rotate-180">
        <img src="/s_half.png" className="w-7 md:w-12" />
      </div>

        <h1 className="text-4xl font-bold mb-8 text-center">Our Programs</h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Explore our comprehensive tech programs designed to prepare you for a successful career in the tech industry.
        </p>

        {/* Course tabs section */}
     
      
        <div className="container mx-auto max-w-7xl">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center md:justify-between max-w-7xl bg-[#2B2B2B] p-1 rounded-2xl gap-4 mb-12">
            {courses.map((course) => (
              <motion.button
                key={course.id}
                onClick={() => setActiveTab(course.id)}
                className={`md:px-6 py-3 rounded-2xl flex items-center space-x-2 transition-colors ${
                  activeTab === course.id ? "px-1 bg-[#F9C23A] text-black" : "bg-[#2B2B2B] text-white hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <course.icon size={18} />
                <span className="text-sm md:text-base">{course.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeCourse && (
              <motion.div
                key={activeCourse.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4"
              >
                {/* Main Content - Left Side */}
                <div className="bg-[#232224]/70 rounded-lg overflow-hidden">
                  <div className="flex items-start p-6">
                    <div className="w-20 h-20 mr-4 flex-shrink-0">
                      <img
                        src={activeCourse.image || "/placeholder.svg?height=80&width=80" || "/placeholder.svg"}
                        alt={activeCourse.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{activeCourse.title}</h2>
                  </div>

                  <div className="p-6 pt-0">
                    <p className="text-white mb-8">{activeCourse.description}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
                        <ul className="space-y-2">
                          {activeCourse.skills.map((skill) => (
                            <li key={skill} className="flex items-center">
                              <div className="w-5 h-5 mr-2 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                    stroke="#F9C23A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                                    stroke="#F9C23A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <span className="text-white">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Projects You'll Build</h3>
                        <ul className="space-y-2">
                          {activeCourse.projects.map((project) => (
                            <li key={project} className="flex items-center">
                              <div className="w-4 h-0.5 bg-[#FFBF00] mr-2"></div>
                              <span className="text-white">{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Outcomes - Right Side */}
                <div>
                  <div className="bg-[#F9C23A] p-6 rounded-t-lg">
                    <h3 className="text-2xl font-bold text-black">Career Outcomes</h3>
                  </div>

                  <div className="bg-[#232224]/70 p-6 rounded-b-lg">
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-4">Potential Roles</h4>
                      <ul className="space-y-2">
                        {activeCourse.careers.roles.map((role) => (
                          <li key={role} className="flex items-center">
                            <div className="w-2 h-2 bg-[#F9C23A] rounded-full mr-2"></div>
                            <span className="text-white">{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-2">Average Salary Range</h4>
                      <p className="text-2xl font-bold text-[#F9C23A]">{activeCourse.careers.salary}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-2">Industry Demand</h4>
                      <p className="text-2xl font-bold text-[#F9C23A]">{activeCourse.careers.demand}</p>
                      <p className="text-gray-300 text-sm">from Google</p>
                    </div>

                    {/* <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#74767F] cursor-pointer transition text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
                    >
                      <span>Apply for This Pathway</span>
                      <CircleArrowUp className="ml-2" size={20} />
                    </motion.button> */}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

    </section>
  );
};

export default CoursesTabs;
