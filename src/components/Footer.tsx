"use client";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Youtube, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand Column - Spans 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="logo" className="w-8 md:w-10" />
              <span className="font-bold text-3xl text-[#10141D] logo tracking-tight">Mypath2tech</span>
            </Link>
            <p className="text-[#646669] text-sm leading-relaxed max-w-sm">
              Empowering the next generation of tech leaders through accessible, high-quality computer science education.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink href="#" icon={<Youtube size={20} />} />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-[#10141D] mb-6">For Students</h4>
            <ul className="space-y-4">
              <FooterLink href="/courses">Browse Courses</FooterLink>
              <FooterLink href="/apply">Apply Now</FooterLink>
              <FooterLink href="/path">Plan Your Path</FooterLink>
              <FooterLink href="/resources">Student Resources</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-[#10141D] mb-6">About</h4>
            <ul className="space-y-4">
              <FooterLink href="/mission">Our Mission</FooterLink>
              <FooterLink href="/impact">Impact</FooterLink>
              <FooterLink href="/team">Team</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-[#10141D] mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hi@mypath2tech.ca"
                  className="text-[#646669] hover:text-[#704FE6] transition-colors text-sm font-medium flex items-center gap-2"
                >
                  <Mail size={16} />
                  hi@mypath2tech.ca
                </a>
              </li>
              <FooterLink href="/donate">Donate</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center text-center items-center gap-4 text-sm text-[#646669]">
          <p>&copy; {currentYear} MyPath2Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="text-[#989AA0] hover:text-[#704FE6] transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="text-[#646669] hover:text-[#704FE6] transition-colors text-sm font-medium"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
