"use client"

import { motion } from "framer-motion"
import Logo from "/Logow.png"
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0B]"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="relative"
      >
        <img src={Logo} alt="logo" className="w-" />
        <motion.div
          className="absolute -inset-4 border-2 border-purple-500 rounded-full"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen

