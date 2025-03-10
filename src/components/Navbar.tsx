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
                <nav className="hidden md:flex items-center space-x-8">
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
                <Button text="Apply Now" bg="bg-[#DED6E8]" />

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
                    <nav className="flex flex-col space-y-4">
                        <a
                            href="#events"
                            className="text-gray-800 hover:text-purple-600 transition-colors py-2"
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
                            className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2 w-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Join Now</span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </motion.button>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    )
}

export default Navbar

