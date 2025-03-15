"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface VideoBackgroundSectionProps {
  videoSrc: string
  fallbackImageSrc?: string
  children: ReactNode
  overlayColor?: string
  overlayOpacity?: number
}

const VideoBackgroundSection = ({
  videoSrc,
  fallbackImageSrc = "",
  children,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  overlayOpacity = 0.5,
}: VideoBackgroundSectionProps) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="absolute inset-0 min-w-full min-h-full object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          poster={fallbackImageSrc}
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback message for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay to improve text readability */}
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-24 md:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default VideoBackgroundSection

