"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface CodeBracketIconProps {
  width?: number | string
  height?: number | string
  color?: string
  strokeWidth?: number
  className?: string
  animationSpeed?: "slow" | "medium" | "fast"
  isAnimating?: boolean
}

const CodeBracketIcon = ({
  width = 74,
  height = 58,
  color = "#F9C23A",
  strokeWidth = 5,
  className = "",
  animationSpeed = "medium",
  isAnimating = true,
}: CodeBracketIconProps) => {
  // Convert animation speed to duration in seconds
  const getDuration = () => {
    switch (animationSpeed) {
      case "slow":
        return 3.5
      case "medium":
      default:
        return 3.5
    }
  }

  const duration = getDuration()

  // Animation states
  const [leftState, setLeftState] = useState(0)
  const [rightState, setRightState] = useState(0)

  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(
      () => {
        setLeftState((prev) => (prev + 1) % 3)
        setRightState((prev) => (prev + 2) % 3) // Offset to create alternating effect
      },
      (duration * 1000) / 3,
    )

    return () => clearInterval(interval)
  }, [isAnimating, duration])

  // Get y position based on state (0: normal, 1: up, 2: down)
  const getYPosition = (state: number) => {
    if (state === 1) return -4
    if (state === 2) return 4
    return 0
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 74 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left bracket (less than) */}
      <motion.path
        d="M20.2323 6.74135C18.5323 8.45215 17.3465 9.63253 15.0511 12.3276C13.9799 13.5853 13.437 14.2908 11.343 16.6671C9.41644 18.8534 6.71996 21.3955 4.30308 23.6352C2.65242 25.1648 13.838 36.1271 15.9285 38.0497"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        animate={{ y: getYPosition(leftState) }}
        transition={{ duration: duration / 3, ease: "easeInOut" }}
      />

      {/* Middle slash */}
      <motion.path
        d="M36.5034 5.64942C35.6658 9.71504 34.7157 13.6721 33.6242 17.6541C33.2422 19.0477 32.5696 20.4544 32.2588 21.9632C30.386 26.2507 29.1894 29.1273 27.5251 32.536C26.2818 35.0822 25.6883 37.4466 24.0487 40.136C22.409 42.8253 21.6732 45.7738 19.5878 48.1095"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Right bracket (greater than) */}
      <motion.path
        d="M49.6406 11.9404C55.8751 16.6851 61.9597 21.9688 68.3151 26.5194C68.8634 26.912 68.9259 27.3757 69.5678 27.7314C71.1918 28.6315 68.5583 29.6361 67.8227 30.0668C66.2675 30.9772 64.9787 32.2555 63.4708 33.2482C60.7817 35.0186 58.3159 36.163 55.4333 38.4606C53.6528 39.4504 52.6154 40.416 50.7025 42.2079"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        animate={{ y: getYPosition(rightState) }}
        transition={{ duration: duration / 3, ease: "easeInOut" }}
      />
    </svg>
  )
}

export default CodeBracketIcon

