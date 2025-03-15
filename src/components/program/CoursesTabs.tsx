"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Shield, Palette, Settings } from "lucide-react"
// import FloatingShape from "../../components/FloatingShape"
import { CircleArrowUp } from "lucide-react"

const courses = [
  {
    id: "software",
    title: "Software Engineering",
    icon: Code,
    description: "Build the apps and websites that shape our digital world",
    skills: ["JavaScript", "React", "Node.js", "APIs", "Databases", "Git & Github", "Testing"],
    projects: [
      "Social media application",
      "E-commerce platform",
      "Personal portfolio website",
      "Mobile app with React Native",
    ],
    careers: {
      roles: ["Front-End Developer", "Back-End Developer", "Full-Stack Engineer", "Mobile Developer"],
      salary: "$70,000 - $120,000",
      demand: "86%",
    },
  },
  {
    id: "data",
    title: "Data Engineering",
    icon: Database,
    description: "Transform raw data into valuable insights and solutions",
    skills: ["Python", "SQL", "Data Modeling", "ETL", "Big Data", "Data Warehousing", "Analytics"],
    projects: [
      "Data pipeline automation",
      "Analytics dashboard",
      "Machine learning model",
      "Business intelligence tool",
    ],
    careers: {
      roles: ["Data Engineer", "Data Analyst", "Business Intelligence Developer", "ETL Developer"],
      salary: "$75,000 - $130,000",
      demand: "92%",
    },
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    icon: Shield,
    description: "Protect systems and data from digital threats",
    skills: ["Network Security", "Ethical Hacking", "Security Tools", "Risk Assessment", "Incident Response"],
    projects: ["Security audit report", "Penetration testing", "Security monitoring system", "Incident response plan"],
    careers: {
      roles: ["Security Analyst", "Security Engineer", "Penetration Tester", "Security Consultant"],
      salary: "$80,000 - $140,000",
      demand: "94%",
    },
  },
  {
    id: "design",
    title: "UI/UX Design",
    icon: Palette,
    description: "Create beautiful and intuitive user experiences",
    skills: ["UI Design", "UX Research", "Wireframing", "Prototyping", "Design Systems"],
    projects: ["Mobile app redesign", "Website prototype", "Design system", "User research study"],
    careers: {
      roles: ["UI Designer", "UX Designer", "Product Designer", "Interaction Designer"],
      salary: "$65,000 - $110,000",
      demand: "78%",
    },
  },
  {
    id: "devops",
    title: "DevOps",
    icon: Settings,
    description: "Bridge development and operations for seamless deployment",
    skills: ["CI/CD", "Docker", "Kubernetes", "Cloud Platforms", "Infrastructure as Code"],
    projects: [
      "Automated deployment pipeline",
      "Cloud infrastructure setup",
      "Monitoring system",
      "Container orchestration",
    ],
    careers: {
      roles: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer", "Infrastructure Engineer"],
      salary: "$85,000 - $150,000",
      demand: "90%",
    },
  },
]

const CoursesTabs = () => {
  const [activeTab, setActiveTab] = useState("software")
  const activeCourse = courses.find((course) => course.id === activeTab)

  return (
    <section className="py-20 px-4 relative">
      {/* Floating shape */}
      {/* <FloatingShape
        size="w-96 h-96"
        color="bg-gradient-to-r from-blue-500/20 to-purple-500/20 bottom-48 left-0"
        top=""
        left=""
        delay={0}
     position="absolute"
      /> */}
        <div className="absolute top-6 left-0 rotate-180">
                                <img src="/s_half.png" className="w-7 md:w-12" />
                            </div>

      <div className="container mx-auto max-w-7xl">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center bg-[#2B2B2B] p-1 rounded-2xl gap-4 mb-12">
          {courses.map((course) => (
            <motion.button
              key={course.id}
              onClick={() => setActiveTab(course.id)}
              className={`px-6 py-3 rounded-2xl flex items-center space-x-2 transition-colors ${
                activeTab === course.id ? "bg-[#def134] text-black" : "bg-[#2B2B2B] text-white hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <course.icon size={18} />
              <span>{course.title}</span>
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
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-[#2B2B2B] rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#def134] p-3 rounded-lg mr-4">
                      <activeCourse.icon className="text-black" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{activeCourse.title}</h2>
                      <p className="text-gray-400">{activeCourse.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">What You'll Learn</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {activeCourse.skills.map((skill) => (
                          <div key={skill} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-[#def134] rounded-full mr-2"></div>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Projects You'll Build</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeCourse.projects.map((project) => (
                          <div key={project} className="bg-gray-800/50 p-4 rounded-lg text-gray-300">
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Outcomes */}
              <div className="bg-[#2B2B2B] rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Career Outcomes</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg text-white mb-3">Potential Roles</h4>
                    <ul className="space-y-2">
                      {activeCourse.careers.roles.map((role) => (
                        <li key={role} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#def134] rounded-full mr-2"></div>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg text-white mb-2">Average Salary Range</h4>
                    <p className="text-2xl font-bold text-[#def134]">{activeCourse.careers.salary}</p>
                  </div>

                  <div>
                    <h4 className="text-lg text-white mb-2">Industry Demand</h4>
                    <p className="text-2xl font-bold text-[#def134]">{activeCourse.careers.demand}</p>
                    <p className="text-gray-400 text-sm">High demand across industries</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#def134] text-black px-6 py-3 rounded-full font-medium flex items-center justify-center space-x-2"
                  >
                    <span>Apply for This Pathway</span>
                    <CircleArrowUp className="rotate-45" size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default CoursesTabs

