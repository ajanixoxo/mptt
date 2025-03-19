"use client"

import type React from "react"
import { ElementType } from "react";

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"


const Footer = () => {
  return (
    <footer className="relative p-2">
      <div
        className=" text-purple-400">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="z-20 absolute left-0 lg:left-10  top-10"

        >

          <img   src='/s-star.png' alt="" className="w-7 md:w-12 ml-40 --" />
        </motion.div>
      </div>
      <div className=" w-full relative rounded-2xl bg-[#1C1C1C] px-4 py-7">

        <img    src="/y_star.png" alt="" className="absolute left-0 bottom-0" />
        <img    src="/y_star.png" alt="" className="absolute right-0 top-0 rotate-180" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 mb-4">
              <svg width={379} height={49} viewBox="0 0 379 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7.81738C0 5.60824 1.79086 3.81738 4 3.81738H14.2917V40.6507C14.2917 42.8599 12.5008 44.6507 10.2917 44.6507H4C1.79086 44.6507 0 42.8599 0 40.6507V7.81738Z" fill="#D6F134" />
                <path d="M45 3.32837C47.2091 3.32837 49 5.11923 49 7.32837V17.62H16.3333V3.32837L45 3.32837Z" fill="#F9C23A" />
                <path d="M16.3335 20.6396H30.6252V45.1396H20.3335C18.1244 45.1396 16.3335 43.3488 16.3335 41.1396V20.6396Z" fill="#FF6A5C" />
                <path d="M34.7085 21.1714H49.0002V45.6714H38.7085C36.4994 45.6714 34.7085 43.8805 34.7085 41.6714V21.1714Z" fill="#704FE6" />
                <path d="M254.892 33.9862V23.5693V9H258.83V14.4769C258.83 16.4099 258.436 19.5243 258.078 22.1374H258.651C259.474 17.2691 261.479 14.9065 265.166 14.9065C270.929 14.9065 271.394 20.8129 271.394 24.1063V33.9862H267.493V24.6432C267.493 21.6721 267.135 18.3072 263.877 18.3072C260.727 18.3072 259.009 21.4931 258.794 26.3257V33.9862H254.892Z" fill="white" />
                <path d="M243.725 34.4513C237.389 34.4513 234.597 30.1915 234.597 24.8578C234.597 19.2735 237.604 14.9062 243.546 14.9062C248.199 14.9062 250.92 17.6268 251.278 21.3139L247.663 22.1372C247.555 19.8104 246.016 18.128 243.439 18.128C240.575 18.128 238.534 20.3116 238.534 24.7146C238.534 29.1176 240.503 31.3728 243.761 31.3728C246.768 31.3728 248.128 29.404 248.271 27.0056L251.815 27.6141C251.493 31.7308 248.701 34.4513 243.725 34.4513Z" fill="white" />
                <path d="M223.868 34.4513C217.854 34.4513 214.704 30.6926 214.704 24.9652C214.704 19.2735 217.782 14.9062 223.545 14.9062C228.879 14.9062 232.029 18.5933 231.6 25.1441L218.498 25.2873C218.605 29.3324 220.538 31.4086 223.903 31.4086C227.018 31.4086 228.127 29.5829 228.414 27.7215L231.922 28.3301C231.385 31.9097 228.808 34.4513 223.868 34.4513ZM223.581 18.0922C220.932 18.0922 219.178 19.882 218.641 22.8531L227.984 22.7458C227.769 19.703 226.087 18.0922 223.581 18.0922Z" fill="white" />
                <path d="M209.21 34.3801C205.379 34.3801 203.733 32.1607 203.733 28.3305V18.5579H201.155L201.191 15.551H202.623C204.126 15.4794 204.735 14.9066 204.878 13.5106L205.2 11.2554H207.527V15.372H212.539V18.6295H207.527V28.1515C207.527 30.1561 208.601 30.8004 210.033 30.8004C210.856 30.8004 211.823 30.5857 212.61 30.0487V33.7716C211.286 34.2011 210.176 34.3801 209.21 34.3801Z" fill="white" />
                <path d="M181.812 33.9861V29.6547L190.332 23.3186C192.265 21.7794 194.664 19.6316 194.664 16.8394C194.664 14.7274 193.16 13.2239 190.296 13.2239C187.361 13.2239 185.356 14.9064 185.75 19.0946L181.991 18.5219C181.598 13.2597 184.569 9.82324 190.368 9.82324C195.344 9.82324 198.53 12.329 198.53 16.5888C198.53 21.0276 195.308 23.8198 192.408 25.896L186.18 30.5496V30.8002L199.067 30.6928V33.9861H181.812Z" fill="white" />
                <path d="M161.799 33.9862V23.5693V9H165.737V14.4769C165.737 16.4099 165.343 19.5243 164.985 22.1374H165.558C166.381 17.2691 168.386 14.9065 172.073 14.9065C177.836 14.9065 178.302 20.8129 178.302 24.1063V33.9862H174.4V24.6432C174.4 21.6721 174.042 18.3072 170.784 18.3072C167.634 18.3072 165.916 21.4931 165.701 26.3257V33.9862H161.799Z" fill="white" />
                <path d="M155.025 34.3801C151.195 34.3801 149.548 32.1607 149.548 28.3305V18.5579H146.971L147.006 15.551H148.438C149.942 15.4794 150.55 14.9066 150.694 13.5106L151.016 11.2554H153.343V15.372H158.354V18.6295H153.343V28.1515C153.343 30.1561 154.416 30.8004 155.848 30.8004C156.672 30.8004 157.638 30.5857 158.426 30.0487V33.7716C157.101 34.2011 155.991 34.3801 155.025 34.3801Z" fill="white" />
                <path d="M133.658 34.4513C130.616 34.4513 128.253 32.7689 128.253 29.2966C128.253 24.4998 132.799 23.7481 136.594 23.2111C139.708 22.7458 140.567 22.5668 140.567 21.1707C140.567 19.3451 139.278 18.0564 136.952 18.0564C134.875 18.0564 132.692 19.0587 132.334 21.8508L128.79 20.9917C129.434 16.8393 132.799 14.9062 136.952 14.9062C142.464 14.9062 144.397 18.128 144.397 22.6384V26.2896C144.397 28.7238 144.505 31.5518 144.684 33.986H141.14C141.068 32.3393 141.032 30.6926 141.032 28.867H140.603C139.744 31.9455 137.345 34.4513 133.658 34.4513ZM134.983 31.4444C137.166 31.4444 139.708 29.8335 140.603 26.397V24.5356C137.811 25.8243 132.083 25.001 132.083 28.7954C132.083 30.4421 133.229 31.4444 134.983 31.4444Z" fill="white" />
                <path d="M107.929 39.5703V24.2134V15.3716H111.366L111.187 20.6695L111.652 20.7053C112.44 16.9109 114.516 14.9062 117.881 14.9062C122.642 14.9062 125.434 18.6649 125.434 24.6788C125.434 30.6569 122.677 34.4513 118.095 34.4513C114.337 34.4513 112.475 31.9097 111.652 28.3301H111.115C111.509 30.6211 111.831 32.8047 111.831 34.6661V39.5703H107.929ZM116.878 31.158C119.778 31.158 121.425 28.509 121.425 24.6788C121.425 20.8127 119.742 18.2712 116.878 18.2712C113.621 18.2712 111.831 21.5645 111.831 24.3924V24.8578C111.831 27.292 113.442 31.158 116.878 31.158Z" fill="white" />
                <path d="M94.3118 39.9998C91.5196 39.9998 88.5485 39.1407 86.9019 37.2076L88.4411 34.0217C89.7656 35.6684 91.9492 36.4559 94.1686 36.4559C98.6074 36.4559 100.111 33.27 100.147 28.688L100.433 25.0725H99.8961C99.216 30.2989 96.9608 32.3035 93.6675 32.3035C87.8326 32.3035 87.5104 25.7885 87.5104 23.2827V15.3716H91.4123V22.173C91.4123 24.3566 91.4123 28.9028 95.0277 28.9028C98.0705 28.9028 99.3949 25.3947 99.5381 21.0275V15.3716H103.404V28.8312C103.404 33.7353 102.008 39.9998 94.3118 39.9998Z" fill="white" />
                <path d="M57 33.986V10.3601H63.0139L70.03 29.6904H70.1732L77.1894 10.3601H82.9169V33.986H79.194L79.373 14.2978H79.1582L71.7841 33.986H68.097L60.7945 14.2978H60.5439L60.7229 33.986H57Z" fill="white" />
              </svg>


            </motion.div>
            <p className="text-gray-400 mb-4">
              Empowering the next generation of tech talent through education and mentorship.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href="#" icon={Instagram} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#events">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#programs">Programs</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#terms">Terms of Service</FooterLink>

            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <FooterLink href="">info@mypath2tech.com</FooterLink>
              <FooterLink href="">123 Tech Street, San Francisco, CA 94122</FooterLink>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 bg-[#989BAE] hover:bg-[#808292] rounded-lg transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="m pt-3 border-t border-gray-800 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Mypath2tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon: Icon }: { href: string; icon:ElementType }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-white transition-colors"
  >
    <Icon size={20} />
  </motion.a>
)

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <motion.a href={href} className="text-gray-400 hover:text-white transition-colors" whileHover={{ x: 5 }}>
      {children}
    </motion.a>
  </li>
)

export default Footer

