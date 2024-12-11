import { motion } from "framer-motion"
import { useEffect, useState } from "react"
type CursorSVGProps = {
	performAction: boolean
	clickTriggered: boolean
	cursorPosition: { x: number; y: number }
}

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (i: any) => {
		const delay = 1 + i * 0.5
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: { delay, type: "spring", duration: 0.7, bounce: 0 },
			},
		}
	},
}

const fadeOutCircleClick = {
	hidden: { opacity: 0 },
	visible: {
		opacity: [0, 1, 0],
		r: [1, 10, 15],
		transition: {
			duration: 0.5,
		},
	},
}

function CursorSVG(props: CursorSVGProps) {
	const { performAction, clickTriggered, cursorPosition } = props

	return (
		<motion.svg width="50" height="50" viewBox="0 0 50 50" fill="none">
			<motion.circle cx="16" cy="16" r="5" fill="#E5F0FF" stroke="#E5F0FF" />
			{/* <motion.circle
				cx="11"
				cy="11"
				r="8"
				stroke="#E5F0FF"
				variants={draw}
				custom={1}
				animate={performAction ? "visible" : "hidden"}
				initial="hidden"
			/> */}
		</motion.svg>
	)
}

export default CursorSVG
