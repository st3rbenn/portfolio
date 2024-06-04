import React from "react"
import {
	AnimationControls,
	motion,
	TargetAndTransition,
	VariantLabels,
} from "framer-motion"

type ButtonProps = {
	children: React.ReactNode
	style?: React.CSSProperties
	onHoverStart?: () => void
	onHoverEnd?: () => void
	onClick?: () => void
	animation?: boolean | AnimationControls | TargetAndTransition | VariantLabels
	whileHover?: TargetAndTransition | VariantLabels | undefined
}

const btnStyle = {
	background: "none",
	border: "none",
	cursor: "none",
	outline: "none",
}

const CustomButton = (props: ButtonProps) => {
	const {
		children,
		style,
		onHoverStart,
		onHoverEnd,
		onClick,
		animation,
		whileHover,
	} = props
	return (
		<motion.button
			style={{
				...btnStyle,
				...style,
			}}
			whileHover={whileHover ? whileHover : { scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			animate={animation}
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
			onClick={onClick}
		>
			{children}
		</motion.button>
	)
}

export default CustomButton
