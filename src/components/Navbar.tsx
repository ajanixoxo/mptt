"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Logo from "/Logo.png"
import Button from "./Button"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${scrolled ? "bg-cream/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <img src={Logo} alt="logo" className="w-" />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 sec_text">
                    <a href="#events" className="text-black font-semibold hover:text-black transition-colors">
                        &gt; Home
                    </a>
                    <a href="#about" className="text-gray-400 hover:text-black transition-colors">
                        About
                    </a>
                    <a href="#blog" className="text-gray-400 hover:text-black transition-colors">
                        Program
                    </a>

                </nav>
                <div className="hidden md:block">                <Button text="Apply Now" bg="bg-[#DED6E8]" /></div>


                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                        <a
                            href="#events"
                            className="text-black hover:text-purple-600 transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Events
                        </a>
                        <a
                            href="#about"
                            className="text-gray-800 hover:text-purple-600 transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#blog"
                            className="text-gray-800 hover:text-purple-600 transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Blog
                        </a>
                        <motion.button
                            className=" text-black rounded-full flex  s w-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                             <Button text="Apply Now" bg="bg-[#DED6E8]" />
                        </motion.button>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    )
}

export default Navbar

