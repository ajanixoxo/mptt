import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";



export const metadata: Metadata = {
  title: "Hack-A-Path | Tech Community",
  description: "Join Hack-A-Path, a supportive tech community to level up your skills and accelerate your career journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="svg" href="/favicon.svg" />
      </head>
      <body className={` text-white`}>
        <div className="">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
