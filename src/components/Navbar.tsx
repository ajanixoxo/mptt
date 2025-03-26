"use client"

import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import { Menu, X, ChevronRight  } from "lucide-react"
import Button from "./Button"
import Link from "next/link"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = usePathname()
 const handleClick =() => {
  
 }
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50  py-4 px-6 transition-all duration-300 ${
        scrolled ? "bg-transparent backdrop-blur-sm !text-white shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container  mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center justify-center gap-2">
          <img src="/logo.svg"  alt="logo" className="w-10 md:w-10" /><span className="main_text text-xl">Mypath2tech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 sec_text">
          <Link
            href="/"
            className={`${location === "/" ? "text-white font-semibold" : "text-gray-200"} flex items-center hover:text-gray300 transition-colors`}
          >
           {`${location}` === "/" ? <ChevronRight className="w-auto lg:w-5 h-auto" /> : ""} Home
          </Link>
          <Link
            href="/about"
            className={`${location === "/about" ? "text-white font-semibold" : "text-gray-200"} flex items-center hover:text-gray300 transition-colors`}
          >
              {`${location}` === "/about" ? <ChevronRight className="w-auto lg:w-5 h-auto" /> : ""}  About
          </Link>
          <Link
            href="/program"
            className={`${location === "/program" ? "text-white font-semibold" : "text-gray-200"} flex items-center hover:text-gray300  transition-colors`}
          >
              {`${location}` === "/program" ? <ChevronRight className="w-auto lg:w-5 h-auto" /> : ""}  Program
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button text="Apply Now" bg="bg-[#DED6E8] hover:bg-[#def5f7] cursor-pointer" onClick={handleClick}/>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-cream shadow-md py-4 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 sec_text">
            <Link
              href="/"
              className={`${location === "/" ? "text-white font-semibold" : "text-gray-200"} hover:text-purple-600 transition-colors py-2`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${location === "/about" ? "text-white font-semibold" : "text-gray-200"} hover:text-purple-600 transition-colors py-2`}
            >
              About
            </Link>
            <Link
              href="/program"
              className={`${location === "/program" ? "text-white font-semibold" : "text-gray-200"} hover:text-purple-600 transition-colors py-2`}
            >
              Program
            </Link>
            <motion.div className="w-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button text="Apply Now" bg="bg-[#DED6E8]" onClick={handleClick} />
            </motion.div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navbar

