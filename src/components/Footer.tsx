"use client";
import Link from "next/link";
import type React from "react";
// Remove this line since we're not using ElementType anymore
// import { ElementType } from "react";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative lg:mx-6 mb-4 ">
      <div className=" text-purple-400">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="z-20 absolute left-0 lg:left-10  top-10 lg:top-0"
        >
          <img src="/s-star.png" alt="" className="w-5 md:w-7 lg:ml-40 ml-20" />
        </motion.div>
      </div>
      <div className="w-full  rounded-2xl bg-[#1C1C1C] px-6 py-7 space-y-4">
        <img src="/y_star.png" alt="" className="absolute -left-0 bottom-0" />
        <img
          src="/y_star.png"
          alt=""
          className="absolute right-0 z-10 -top-0 rotate-180"
        />
        <div className="grid py-2 grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 space-y-4">
            <Link href="/" className="flex gap-2">
              <img src="/logo.svg" alt="logo" className="w-10 md:w-12" />
              <span className="main_text text-4xl">Mypath2tech</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering the next generation of tech talent through education
              and mentorship.
              <div className="flex gap-4 mt-3">
                <SocialLink
                  href="#"
                  icon={
                    <svg
                      width={23}
                      height={23}
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.55556 0H20.4444C21.1222 0 21.7722 0.269245 22.2515 0.748505C22.7308 1.22776 23 1.87778 23 2.55556V20.4444C23 21.1222 22.7308 21.7722 22.2515 22.2515C21.7722 22.7308 21.1222 23 20.4444 23H2.55556C1.87778 23 1.22776 22.7308 0.748505 22.2515C0.269245 21.7722 0 21.1222 0 20.4444V2.55556C0 1.87778 0.269245 1.22776 0.748505 0.748505C1.22776 0.269245 1.87778 0 2.55556 0ZM19.1667 2.55556H15.9722C14.7861 2.55556 13.6486 3.02674 12.8099 3.86544C11.9712 4.70414 11.5 5.84167 11.5 7.02778V10.2222H8.94444V14.0556H11.5V23H15.3333V14.0556H19.1667V10.2222H15.3333V7.66667C15.3333 7.32778 15.468 7.00277 15.7076 6.76314C15.9472 6.52351 16.2722 6.38889 16.6111 6.38889H19.1667V2.55556Z"
                        fill="white"
                      />
                    </svg>
                  }
                />
                <SocialLink
                  href="#"
                  icon={
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.25 0H17.75C21.75 0 25 3.25 25 7.25V17.75C25 19.6728 24.2362 21.5169 22.8765 22.8765C21.5169 24.2362 19.6728 25 17.75 25H7.25C3.25 25 0 21.75 0 17.75V7.25C0 5.32718 0.763837 3.48311 2.12348 2.12348C3.48311 0.763837 5.32718 0 7.25 0ZM7 2.5C5.80653 2.5 4.66193 2.97411 3.81802 3.81802C2.97411 4.66193 2.5 5.80653 2.5 7V18C2.5 20.4875 4.5125 22.5 7 22.5H18C19.1935 22.5 20.3381 22.0259 21.182 21.182C22.0259 20.3381 22.5 19.1935 22.5 18V7C22.5 4.5125 20.4875 2.5 18 2.5H7ZM19.0625 4.375C19.4769 4.375 19.8743 4.53962 20.1674 4.83265C20.4604 5.12567 20.625 5.5231 20.625 5.9375C20.625 6.3519 20.4604 6.74933 20.1674 7.04235C19.8743 7.33538 19.4769 7.5 19.0625 7.5C18.6481 7.5 18.2507 7.33538 17.9576 7.04235C17.6646 6.74933 17.5 6.3519 17.5 5.9375C17.5 5.5231 17.6646 5.12567 17.9576 4.83265C18.2507 4.53962 18.6481 4.375 19.0625 4.375ZM12.5 6.25C14.1576 6.25 15.7473 6.90848 16.9194 8.08058C18.0915 9.25268 18.75 10.8424 18.75 12.5C18.75 14.1576 18.0915 15.7473 16.9194 16.9194C15.7473 18.0915 14.1576 18.75 12.5 18.75C10.8424 18.75 9.25268 18.0915 8.08058 16.9194C6.90848 15.7473 6.25 14.1576 6.25 12.5C6.25 10.8424 6.90848 9.25268 8.08058 8.08058C9.25268 6.90848 10.8424 6.25 12.5 6.25ZM12.5 8.75C11.5054 8.75 10.5516 9.14509 9.84835 9.84835C9.14509 10.5516 8.75 11.5054 8.75 12.5C8.75 13.4946 9.14509 14.4484 9.84835 15.1517C10.5516 15.8549 11.5054 16.25 12.5 16.25C13.4946 16.25 14.4484 15.8549 15.1517 15.1517C15.8549 14.4484 16.25 13.4946 16.25 12.5C16.25 11.5054 15.8549 10.5516 15.1517 9.84835C14.4484 9.14509 13.4946 8.75 12.5 8.75Z"
                        fill="white"
                      />
                    </svg>
                  }
                />
                <SocialLink
                  href="#"
                  icon={
                    <svg
                      width={23}
                      height={23}
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.4444 0C21.1222 0 21.7722 0.269245 22.2515 0.748505C22.7308 1.22776 23 1.87778 23 2.55556V20.4444C23 21.1222 22.7308 21.7722 22.2515 22.2515C21.7722 22.7308 21.1222 23 20.4444 23H2.55556C1.87778 23 1.22776 22.7308 0.748505 22.2515C0.269245 21.7722 0 21.1222 0 20.4444V2.55556C0 1.87778 0.269245 1.22776 0.748505 0.748505C1.22776 0.269245 1.87778 0 2.55556 0H20.4444ZM19.8056 19.8056V13.0333C19.8056 11.9286 19.3667 10.869 18.5855 10.0878C17.8043 9.30665 16.7448 8.86778 15.64 8.86778C14.5539 8.86778 13.2889 9.53222 12.6756 10.5289V9.11056H9.11056V19.8056H12.6756V13.5061C12.6756 12.5222 13.4678 11.7172 14.4517 11.7172C14.9261 11.7172 15.3811 11.9057 15.7166 12.2412C16.0521 12.5767 16.2406 13.0317 16.2406 13.5061V19.8056H19.8056ZM4.95778 7.10444C5.52711 7.10444 6.07312 6.87828 6.4757 6.4757C6.87828 6.07312 7.10444 5.52711 7.10444 4.95778C7.10444 3.76944 6.14611 2.79833 4.95778 2.79833C4.38506 2.79833 3.83579 3.02585 3.43082 3.43082C3.02585 3.83579 2.79833 4.38506 2.79833 4.95778C2.79833 6.14611 3.76944 7.10444 4.95778 7.10444ZM6.73389 19.8056V9.11056H3.19444V19.8056H6.73389Z"
                        fill="white"
                      />
                    </svg>
                  }
                />{" "}
              </div>
            </p>
            <div className="flex space-x-4"></div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/program">Programs</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <FooterLink href="">info@mypath2tech.ca</FooterLink>
              <FooterLink href="">Windsor Ontario, Canada</FooterLink>
            </ul>
          </div>
        </div>

        <div className="m pt-3  relative z-20  text-center text-white">
          <p>
            &copy; {new Date().getFullYear()} Mypath2tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-white transition-colors"
  >
    {icon}
  </motion.a>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <motion.a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      whileHover={{ x: 5 }}
    >
      {children}
    </motion.a>
  </li>
);

export default Footer;
