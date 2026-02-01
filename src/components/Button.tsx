import { motion } from "framer-motion"
import { ReactNode } from "react"
import { CircleArrowUp } from 'lucide-react'

interface ButtonProps {
    text: string
    variant?: 'primary' | 'outline' | 'secondary'
    onClick?: () => void
    icon?: ReactNode
    className?: string
}

function Button({ text, variant = 'primary', onClick, icon, className }: ButtonProps) {
    const baseStyles = "flex items-center justify-center cursor-pointer gap-2 transition-all duration-300 font-medium"

    // Exact styles from user request
    const primaryStyles = `
        w-[110px] h-[56px] px-[20px] py-[14px]
        bg-[#10141D] border-[1.5px] border-[#000612]
        shadow-[0px_12px_13.1px_-8px_rgba(61,61,61,0.05),inset_0px_2px_4px_rgba(255,255,255,0.31)]
        rounded-[26px] text-white
    `

    const variants = {
        primary: primaryStyles,
        outline: " w-[110px] h-[56px] px-[20px] py-[14px] rounded-full bg-transparent text-[#10141D] border-[1.5px] border-[#000612] shadow-[0px_12px_13.1px_-8px_rgba(61,61,61,0.05),inset_0px_2px_4px_0px_rgba(255,255,255,0.31)] hover:bg-gray-50",
        secondary: "px-6 py-2.5 rounded-full bg-white text-[#10141D] border border-[#EEEEEE] hover:bg-gray-50",
    }

    return (
        <motion.button
            className={`${baseStyles} ${variants[variant]} ${className || ''}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
        >
            <span className="text-sm tracking-[-2%] leading-[135%] flex font-medium logo whitespace-nowrap text">{text}</span>
            {icon}
        </motion.button>
    )
}

export default Button