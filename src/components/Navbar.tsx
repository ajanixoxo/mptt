"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import { X, ChevronRight, ChartNoAxesColumnDecreasing } from "lucide-react"
import Button from "./Button"
import Link from "next/link"

import Image from "next/image"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = usePathname()
  const router = useRouter()


  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleApplyClick = () => {
    router.push('/apply')
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [activeDropdown])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "For Students", path: "#" },
    { name: "About", path: "/about" },
    { name: "Program", path: "/program" },
    { name: "Events", path: "/events" },
  ]

  const toggleDropdown = (e: React.MouseEvent, name: string) => {
    if (name === "For Students") {
      e.preventDefault()
      e.stopPropagation()
      setActiveDropdown(activeDropdown === name ? null : name)
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 bg-white  py-1 md:px-6 ${scrolled ? "shadow-sm " : ""
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="flex items-center gap-1">
              <Image src="/logo.svg" alt="mypath2tech logo" width={24} height={20} />
              <span className="text-base tracking-[-2%] font-medium  text-[#10141D] logo">Mypath2tech</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative dropdown-container">
                <Link
                  href={link.path}
                  onClick={(e) => toggleDropdown(e, link.name)}
                  className={`text-sm font-medium tracking-[-2%] cursor-pointer transition-colors hover:text-purple-600 flex items-center gap-1 ${location === link.path
                    ? "text-[#10141D] hover:underline hover:text-blue-500"
                    : "text-[#646669] hover:text-blue-500"
                    }`}
                >
                  {link.name}
                  {link.name === "For Students" && (
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? '-rotate-90' : 'rotate-90'}`}
                    />
                  )}
                </Link>

                {link.name === "For Students" && (
                  <div
                    className={`absolute top-full left-0 pt-4 transition-all duration-300 ease-in-out transform origin-top ${activeDropdown === link.name
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                      }`}
                  >
                    <div className="bg-white shadow-xl rounded-2xl p-6 min-w-[200px] border border-gray-100">
                      <span className="text-xs font-bold text-gray-400 tracking-wider mb-3 block">
                        HIGH SCHOOL
                      </span>
                      <div className="flex flex-col gap-3">
                        <Link
                          href="/courses"
                          className="text-sm font-medium text-[#10141D] hover:text-purple-600 transition-colors"
                        >
                          Browse Courses
                        </Link>
                        <Link
                          href="/apply"
                          className="text-sm font-medium text-[#10141D] hover:text-purple-600 transition-colors"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Theme Toggle */}
            {/* <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button> */}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/donate" className="text-sm tracking-[-2%] font-medium text-[#646669] hover:text-[#704FE6] transition-colors">
              Donate
            </Link>
            <Button
              text="Apply Now"
              variant="primary"
              onClick={handleApplyClick}
              className="w-[110px] h-[56px] px-[20px] py-[14px] hover:bg-[#704FE6]  hover:text-white hover:border-none"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black dark:text-white" />
            ) : (
              <ChartNoAxesColumnDecreasing className="w-6 h-6 text-black dark:text-white -rotate-90" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`absolute top-full left-0 right-0 bg-white dark:bg-black shadow-lg md:hidden overflow-hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "max-content" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <nav className="flex flex-col p-3 space-y-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative dropdown-container" >
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    if (link.name === "For Students") {
                      toggleDropdown(e, link.name)
                    } else {
                      setIsOpen(false)
                    }
                  }}
                  className={`text-sm font-medium  flex items-center gap-1 ${location === link.path ? "text-[#10141D] hover:underline hover:text-[#704FE6]" : "text-[#646669] hover:text-[#704FE6]"
                    }`}
                >
                  {link.name}
                  {link.name === "For Students" && (
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? '-rotate-90' : 'rotate-90'}`}
                    />
                  )}
                </Link>
                {link.name === "For Students" && (
                  <div
                    className={`${activeDropdown === link.name
                      ? "max-h-[500px] opacity-100 visible translate-y-0 mt-4"
                      : "max-h-0 opacity-0 invisible -translate-y-2 overflow-hidden"
                      } transition-all duration-300 ease-in-out w-full`}
                  >
                    <div className="pl-4 pt-2">
                      <span className="text-xs font-bold text-[#646669] tracking-wider mb-3 block">
                        HIGH SCHOOL
                      </span>
                      <div className="flex flex-col gap-3">
                        <Link
                          href="/courses"
                          className="text-sm font-medium text-[#10141D] hover:text-purple-600 transition-colors"
                        >
                          Browse Courses
                        </Link>
                        <Link
                          href="/apply"
                          className="text-sm font-medium text-[#10141D] hover:text-purple-600 transition-colors"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/donate" onClick={() => setIsOpen(false)} className="text-sm text-[#10141D] hover:text-[#704FE6]">
              Donate
            </Link>

            <div className="">
              <Button
                text="Apply Now"
                variant="primary"
                onClick={() => {
                  handleApplyClick()
                  setIsOpen(false)
                }}
                className="w-[110px] h-[56px] px-[20px] py-[14px] hover:bg-[#704FE6]  hover:text-white hover:border-none"
              />
            </div>
          </nav>
        </motion.div>
      </motion.header>
    </>
  )
}

export default Navbar

