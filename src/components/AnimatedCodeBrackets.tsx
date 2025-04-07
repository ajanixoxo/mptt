"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedCodeBracketsProps {
  width?: number | string
  height?: number | string
  color?: string
  strokeWidth?: number
  animationDuration?: number
  className:string
}

const AnimatedCodeBrackets = ({
  width = 74,
  height = 58,
  color = "#F9C23A",
  strokeWidth = 5,
  animationDuration = 2.5,
  className = ""
}: AnimatedCodeBracketsProps) => {
  const [isAnimating, setIsAnimating] = useState(true)

  // Animation variants for the left bracket (less than)
  const leftBracketVariants = {
    up: { y: -5, transition: { duration: animationDuration / 2, ease: "easeInOut" } },
    down: { y: 5, transition: { duration: animationDuration / 2, ease: "easeInOut" } },
    normal: { y: 0, transition: { duration: animationDuration / 2, ease: "easeInOut" } },
  }

  // Animation variants for the right bracket (greater than)
  const rightBracketVariants = {
    up: { y: -5, transition: { duration: animationDuration / 2, ease: "easeInOut" } },
    down: { y: 5, transition: { duration: animationDuration / 2, ease: "easeInOut" } },
    normal: { y: 0, transition: { duration: animationDuration / 2, ease: "easeInOut" } },
  }

  // Animation variants for the middle slash
  const slashVariants = {
    tilt: { rotate: 2, transition: { duration: animationDuration / 2, ease: "easeInOut" } },
    normal: { rotate: 0, transition: { duration: animationDuration / 2, ease: "easeInOut" } },
    reverseTilt: { rotate: -2, transition: { duration: animationDuration / 2, ease: "easeInOut" } },
  }

  // Animation sequence states
  const [leftBracketState, setLeftBracketState] = useState<"up" | "down" | "normal">("normal")
  const [rightBracketState, setRightBracketState] = useState<"up" | "down" | "normal">("normal")
  const [slashState, setSlashState] = useState<"tilt" | "normal" | "reverseTilt">("normal")

  // Animation sequence effect
  useEffect(() => {
    if (!isAnimating) return
    setIsAnimating(true)
    const sequence = [
      // Step 1: Left up, right down
      () => {
        setLeftBracketState("up")
        setRightBracketState("down")
        setSlashState("tilt")
      },
      // Step 2: Return to normal
      () => {
        setLeftBracketState("normal")
        setRightBracketState("normal")
        setSlashState("normal")
      },
      // Step 3: Left down, right up
      () => {
        setLeftBracketState("down")
        setRightBracketState("up")
        setSlashState("reverseTilt")
      },
      // Step 4: Return to normal
      () => {
        setLeftBracketState("normal")
        setRightBracketState("normal")
        setSlashState("normal")
      },
    ]

    let currentStep = 0
    const intervalId = setInterval(
      () => {
        sequence[currentStep]()
        currentStep = (currentStep + 1) % sequence.length
      },
      (animationDuration * 1000) / 2,
    )

    return () => clearInterval(intervalId)
  }, [isAnimating, animationDuration])

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 74 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animated-code-brackets ${className}`}
    >
      {/* Left bracket (less than) */}
      <motion.path
        d="M20.2323 6.74135C18.5323 8.45215 17.3465 9.63253 15.0511 12.3276C13.9799 13.5853 13.437 14.2908 11.343 16.6671C9.41644 18.8534 6.71996 21.3955 4.30308 23.6352C2.65242 25.1648 13.838 36.1271 15.9285 38.0497"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        variants={leftBracketVariants}
        animate={leftBracketState}
      />

      {/* Middle slash */}
      <motion.path
        d="M36.5034 5.64942C35.6658 9.71504 34.7157 13.6721 33.6242 17.6541C33.2422 19.0477 32.5696 20.4544 32.2588 21.9632C30.386 26.2507 29.1894 29.1273 27.5251 32.536C26.2818 35.0822 25.6883 37.4466 24.0487 40.136C22.409 42.8253 21.6732 45.7738 19.5878 48.1095"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        variants={slashVariants}
        animate={slashState}
      />

      {/* Right bracket (greater than) */}
      <motion.path
        d="M49.6406 11.9404C55.8751 16.6851 61.9597 21.9688 68.3151 26.5194C68.8634 26.912 68.9259 27.3757 69.5678 27.7314C71.1918 28.6315 68.5583 29.6361 67.8227 30.0668C66.2675 30.9772 64.9787 32.2555 63.4708 33.2482C60.7817 35.0186 58.3159 36.163 55.4333 38.4606C53.6528 39.4504 52.6154 40.416 50.7025 42.2079"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        variants={rightBracketVariants}
        animate={rightBracketState}
      />
    </svg>
  )
}

export default AnimatedCodeBrackets

