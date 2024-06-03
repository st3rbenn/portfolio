import React from "react"
import {
	AnimationControls,
	motion,
	TargetAndTransition,
	VariantLabels,
} from "framer-motion"

type LinkProps = {
	children: React.ReactNode
	style?: React.CSSProperties
	onHoverStart?: () => void
	onHoverEnd?: () => void
	onClick?: () => void
	link: string
	external?: boolean
	animation?: boolean | AnimationControls | TargetAndTransition | VariantLabels
}

const linkStyle = {
	textDecoration: "none",
	color: "#E5F0FF",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}

const CustomLink = (props: LinkProps) => {
	const {
		children,
		style,
		onHoverStart,
		onHoverEnd,
		onClick,
		link,
		external,
    animation
	} = props
	return (
		<motion.a
			animate={animation}
			style={{
				...linkStyle,
				...style,
				flexDirection: "column",
				gap: children ? "0.5rem" : "0",
			}}
			href={link}
			target={external ? "_blank" : "_self"}
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
