"use client";

import { useEffect, useState, useRef } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { usePathname, useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import { Menu, X, ChevronRight, CircleArrowUp  } from "lucide-react"
import Link from "next/link"

function Apply() {
  const [isLoading, setIsLoading] = useState(true);
  const formRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = usePathname()
  const router = useRouter()

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
  
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          (mutation.target as HTMLElement).getAttribute("data-tf-loaded") === "true"
        ) {
          setIsLoading(false);
          document.body.style.overflow = "hidden"; // Prevents scrolling when Typeform loads
        }
      });
    });
  
    if (formRef.current) {
      observer.observe(formRef.current, { attributes: true });
    }
  
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when leaving
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);
  

 const handleClick =() => {
   router.push('/apply')
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
    <div className="relative flex flex-col  min-h-screen">
      {isLoading && <LoadingScreen />}
      
      <motion.header
      className={`fixed top-3 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 ${
        scrolled ? "bg-transparent backdrop-blur-sm !text-white shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mt-4  mx-auto flex justify-between w-[90%] items-center">
        <Link href="/" className="flex items-center justify-center ml-4 gap-2">
          <img src="/logo.svg"  alt="logo" className="w-10 md:w-10" /><span className="main_text text-xl text-black">Mypath2tech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 space-x-8 sec_text">
          <Link
            href="/"
            className={`${location === "/" ? "text-white font-semibold" : "text-gray-800"} flex items-center hover:text-gray300 transition-colors`}
          >
           {`${location}` === "/" ? <ChevronRight className="w-auto lg:w-5 h-auto" /> : ""} Home
          </Link>
          <Link
            href="/about"
            className={`${location === "/about" ? "text-white font-semibold" : "text-gray-800"} flex items-center hover:text-gray300 transition-colors`}
          >
              {`${location}` === "/about" ? <ChevronRight className="w-auto lg:w-5 h-auto" /> : ""}  About
          </Link>
          <Link
            href="/program"
            className={`${location === "/program" ? "text-white font-semibold" : "text-gray-800"} flex items-center hover:text-gray300  transition-colors`}
          >
              {`${location}` === "/program" ? <ChevronRight className="w-auto lg:w-5 h-auto" /> : ""}  Program
          </Link>
        </nav>

        <div className="hidden md:block">
              <motion.button
            className={`  bg-[#DED6E8]  cursor-pointer button text-black px-10 rounded-xl flex items-center justify-center space-x-2 w-[130px] h-10`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
        >
            <span className="font-normal">Apply Now</span>
            <CircleArrowUp className="rotate-45" />
        </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden "
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden  h-[200px] absolute bg-cream top-full left-0 right-0  shadow-md py-4 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col   gap-5 space-y-4 sec_text">
            <Link
              href="/"
              className={`${location === "/" ? "text-white font-semibold" : "text-gray-100"} hover:text-purple-600 transition-colors py-2`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${location === "/about" ? "text-white font-semibold" : "text-gray-100"} hover:text-purple-600 transition-colors py-2`}
            >
              About
            </Link>
            <Link
              href="/program"
              className={`${location === "/program" ? "text-white font-semibold" : "text-gray-100"} hover:text-purple-600 transition-colors py-2`}
            >
              Program
            </Link>
            <motion.div className="w-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <motion.button
            className={`  bg-[#DED6E8]  cursor-pointer button text-black rounded-xl flex items-center justify-center space-x-2 w-[130px] h-10`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
        >
            <span className="font-normal">Apply Now</span>
            <CircleArrowUp className="rotate-45" />
        </motion.button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </motion.header>

      {/* Main Content */}
      <div className="flex-grow relative z-10 flex items-center justify-center">
        
        <div ref={formRef} data-tf-live="01JQ5GSABRY0SKWCX7Q0TNJBM0" className="w-full max-w-4xl p-4" />
      </div>
    </div>
  );
}

export default Apply;
