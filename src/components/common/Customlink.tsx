import React from "react"
import { motion } from "framer-motion"

type LinkProps = {
	children: React.ReactNode
	style?: React.CSSProperties
	onHoverStart?: () => void
	onHoverEnd?: () => void
	onClick?: () => void
	link: string
}

const btnStyle = {
	background: "none",
	border: "none",
	cursor: "pointer",
	outline: "none",
}

const CustomLink = (props: LinkProps) => {
	const { children, style, onHoverStart, onHoverEnd, onClick, link } = props
	return (
		<motion.a
			style={{
				...btnStyle,
				...style,
			}}
			href={link}
			target="_blank"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
			onClick={onClick}
		>
			{children}
		</motion.a>
	)
}

export default CustomLink
