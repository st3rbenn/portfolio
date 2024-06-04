import React, { useEffect, useRef } from "react"
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
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	whileHoverAnim?: boolean
	onMouseHover?: () => void
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
		animation,
		onMouseEnter,
		onMouseLeave,
		whileHoverAnim,
		onMouseHover,
	} = props
	const linkRef = useRef<HTMLAnchorElement>(null)

	useEffect(() => {
		const linkElement = linkRef.current
		if (linkElement) {
			const handleMouseEnter = (ev: MouseEvent) => {
				onMouseEnter?.()
				onMouseHover?.()
				ev.stopImmediatePropagation()
			}
			const handleMouseLeave = (ev: MouseEvent) => {
				onMouseLeave?.()
			}

			linkElement.addEventListener("mouseenter", handleMouseEnter)
			linkElement.addEventListener("mouseleave", handleMouseLeave)

			return () => {
				linkElement.removeEventListener("mouseenter", handleMouseEnter)
				linkElement.removeEventListener("mouseleave", handleMouseLeave)
			}
		}
	}, [onMouseEnter, onMouseLeave, onMouseHover])

	return (
		<motion.a
			ref={linkRef}
			animate={animation}
			style={{
				...linkStyle,
				...style,
				cursor: "none",
				flexDirection: "column",
				gap: children ? "0.5rem" : "0",
			}}
      className="watched"
			href={link}
			target={external ? "_blank" : "_self"}
			whileHover={{ scale: whileHoverAnim ? 1.1 : 1 }}
			whileTap={{ scale: 0.9 }}
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseOver={onMouseHover}
		>
			{children}
		</motion.a>
	)
}

export default CustomLink
