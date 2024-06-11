import React, { useEffect, useRef } from "react"
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
  elemClickable?: boolean
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
    elemClickable = false,
	} = props

	const btnRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const linkElement = btnRef.current
		if (linkElement) {
			const handleClick = (ev: MouseEvent) => {
				onClick?.()
				ev.stopImmediatePropagation()
			}

			linkElement.addEventListener("click", handleClick)

			return () => {
				linkElement.removeEventListener("click", handleClick)
			}
		}
	}, [onClick, elemClickable])

	useEffect(() => {
		const linkElement = btnRef.current
		if (linkElement) {
			if (elemClickable) {
				linkElement.setAttribute("data-elem-clickable", "true")
			}
		}
	}, [elemClickable])

	return (
		<motion.button
			style={{
				...btnStyle,
				...style,
			}}
			ref={btnRef}
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
