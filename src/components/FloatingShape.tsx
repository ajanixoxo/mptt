import { motion } from "framer-motion";
interface FloatingProps {
    color : string
    size:string
    top:string 
    left:string
    delay:number
	position:string

}
const FloatingShape = ({ color, size, top, left, delay, position } : FloatingProps) => {
	return (
		<motion.div
			className={`${position} rounded-full bg-gradient-to-t  ${color} ${size} blur-2xl`}
			style={{ top, left }}
			animate={{
				// y: ["10%", "50%", "0%"],
				// x: ["10%", "50%", "0%"],
				// rotate: [0, 360],
			}}
			transition={{
				duration: 20,
				ease: "linear",
				repeat: Infinity,
				delay,
			}}
			aria-hidden='true'
		/>
	);
};
export default FloatingShape;