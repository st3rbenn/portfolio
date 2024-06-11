import {
	AnimationControls,
	motion,
	TargetAndTransition,
	VariantLabels,
} from "framer-motion"
import React, { MouseEventHandler, useEffect, useRef } from "react"
import { MouseEvent as ReactMouseEvent } from "react"
import { useNavigate } from "react-router-dom"

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
	back?: boolean
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
		external,
		animation,
		onMouseEnter,
		onMouseLeave,
		whileHoverAnim,
		onMouseHover,
		elemHoverable = false,
		elemClickable = false,
		elemAsAnim = false,
		back = false,
	} = props
	const linkRef = useRef<HTMLAnchorElement>(null)
	const navigate = useNavigate()

	useEffect(() => {
		const linkElement = linkRef.current
		if (linkElement) {
			const handleMouseEnter = (ev: MouseEvent) => {
				onMouseEnter?.()
				ev.stopImmediatePropagation()
			}

			const handleMouseLeave = (ev: MouseEvent) => {
				onMouseLeave?.()
				ev.stopImmediatePropagation()
			}

			const handleClick = (ev: MouseEvent) => {
				if (back) {
          ev.preventDefault()
          navigate(-1)
				} else {
					if (external || link) {
						ev.preventDefault()
						if (external) {
							window.open(link, "_blank", "noopener,noreferrer")
						} else {
							navigate(link)
						}
					}
				}
				ev.stopImmediatePropagation()
			}

			const handleMouseHover = (ev: MouseEvent) => {
				onMouseHover?.()
				ev.stopImmediatePropagation()
			}

			linkElement.addEventListener("mouseenter", handleMouseEnter)
			linkElement.addEventListener("mouseleave", handleMouseLeave)
			linkElement.addEventListener("click", handleClick)
			linkElement.addEventListener("mouseover", handleMouseHover)

			return () => {
				linkElement.removeEventListener("mouseenter", handleMouseEnter)
				linkElement.removeEventListener("mouseleave", handleMouseLeave)
				linkElement.removeEventListener("click", handleClick)
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
			whileHover={{ scale: whileHoverAnim ? 1.1 : 1 }}
			whileTap={{ scale: 0.9 }}
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseOver={onMouseHover}
		>
			{children}
		</motion.a>
	)
}

export default CustomLink
