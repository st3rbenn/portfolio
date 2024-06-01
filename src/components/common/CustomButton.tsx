import React from "react"
import { motion } from "framer-motion"

type ButtonProps = {
	children: React.ReactNode
	style?: React.CSSProperties
	onHoverStart?: () => void
	onHoverEnd?: () => void
	onClick?: () => void
}

const btnStyle = {
	background: "none",
	border: "none",
	cursor: "pointer",
	outline: "none",
}

const CustomButton = (props: ButtonProps) => {
	const { children, style, onHoverStart, onHoverEnd, onClick } = props
	return (
		<motion.button
			style={{
				...btnStyle,
				...style,
			}}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
			onClick={onClick}
		>
			{children}
		</motion.button>
	)
}

export default CustomButton
