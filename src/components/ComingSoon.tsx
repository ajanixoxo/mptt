"use client"
import { motion } from "framer-motion"
import { CircleArrowUp } from 'lucide-react'
import {  useRouter } from 'next/navigation'
export default function ComingSoon() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/apply')
  }
  return (

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>
   <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>AI-Powered career path recommendation - Coming Soon</h1>
   <p style={{ fontSize: '1.2rem' }}>We're working hard to launch something amazing. Stay tuned!</p>
      <div>    <motion.button
        className={`  bg-[#DED6E8] hover:bg-[#def5f7] cursor-pointer button text-black px-4 py-2 rounded-xl flex items-center justify-center space-x-2 w-full`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        <span className="font-normal">Apply Now</span>
        <CircleArrowUp className="rotate-45" />
      </motion.button></div>
    </div>
  );
}
