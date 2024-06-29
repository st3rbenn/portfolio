import {
	AnimationControls,
	motion,
	TargetAndTransition,
	VariantLabels,
} from "framer-motion"
import React, { useEffect, useRef } from "react"
import { Link, NavigateOptions, useNavigate } from "react-router-dom"

type LinkProps = {
	children: React.ReactNode
	style?: React.CSSProperties
	onHoverStart?: () => void
	onHoverEnd?: () => void
	link: string
	external?: boolean
	animation?: boolean | AnimationControls | TargetAndTransition | VariantLabels
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	whileHoverAnim?: boolean
	onMouseHover?: () => void
	elemHoverable?: boolean
	elemClickable?: boolean
	elemAsAnim?: boolean
	backHome?: boolean
	navigationOpt?: NavigateOptions
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
		link,
		external = false,
		animation,
		onMouseEnter,
		onMouseLeave,
		whileHoverAnim,
		onMouseHover,
		elemHoverable = false,
		elemClickable = false,
		elemAsAnim = false,
		backHome = false,
		navigationOpt,
	} = props
	const linkRef = useRef<HTMLDivElement>(null)
	const navigate = useNavigate()

	useEffect(() => {
		const linkElement = linkRef.current
		if (linkElement) {
			const handleMouseEnter = (ev: MouseEvent) => {
				onMouseEnter?.()
			}

			const handleMouseLeave = (ev: MouseEvent) => {
				onMouseLeave?.()
			}

			// const handleClick = (ev: MouseEvent) => {
			// 	if (backHome) {
			// 		navigate("/")
			// 	} else {
			// 		if (external) {
			// 			window.open(link, "_blank", "noopener,noreferrer")
			// 		}
			// 	}
			// }

			const handleMouseHover = (ev: MouseEvent) => {
				onMouseHover?.()
			}

			linkElement.addEventListener("mouseenter", handleMouseEnter)
			linkElement.addEventListener("mouseleave", handleMouseLeave)
			// linkElement.addEventListener("click", handleClick)
			linkElement.addEventListener("mouseover", handleMouseHover)

			return () => {
				linkElement.removeEventListener("mouseenter", handleMouseEnter)
				linkElement.removeEventListener("mouseleave", handleMouseLeave)
				// linkElement.removeEventListener("click", handleClick)
				linkElement.removeEventListener("mouseover", handleMouseHover)
			}
		}
	}, [onMouseEnter, onMouseLeave, onMouseHover, external, link])

	useEffect(() => {
		const linkElement = linkRef.current
		if (linkElement) {
			if (elemHoverable) {
				linkElement.setAttribute("data-elem-hoverable", "true")
			}

			if (elemClickable) {
				linkElement.setAttribute("data-elem-clickable", "true")
			}

			if (elemAsAnim) {
				linkElement.setAttribute("data-elem-as-anim", "true")
			}
		}
	}, [elemHoverable, elemClickable, elemAsAnim])

	return (
		<motion.div
			animate={animation}
			whileHover={{ scale: whileHoverAnim ? 1.1 : 1 }}
			whileTap={{ scale: 0.9 }}
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseOver={onMouseHover}
			ref={linkRef}
			style={{
				...style,
			}}
			className="watched"
		>
			<Link
				to={link}
				target={external ? "_blank" : ""}
        rel={external ? "noopener noreferrer" : ""}
				style={{
					...linkStyle,
					flexDirection: "column",
					cursor: "none",
					gap: children ? "0.5rem" : "0",
				}}
			>
				{children}
			</Link>
		</motion.div>
	)
}

export default CustomLink
