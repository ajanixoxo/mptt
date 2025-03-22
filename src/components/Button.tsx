import { motion } from "framer-motion"
import { CircleArrowUp } from 'lucide-react'
interface ButtonProps {
    text: string
    bg: string
    onClick: () => void
}
function Button({ text, bg, onClick }: ButtonProps) {
    return (
        <div>    <motion.button
            className={`  ${bg} button text-black px-4 py-2 rounded-xl flex items-center justify-center space-x-2 w-full`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
        >
            <span className="font-normal">{text}</span>
            <CircleArrowUp className="rotate-45" />
        </motion.button></div>

    )
}

export default Button