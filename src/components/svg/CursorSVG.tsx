import React from "react"
import { motion } from "framer-motion"
type CursorSVGProps = {
	performAction: boolean
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

function CursorSVG(props: CursorSVGProps) {
	const { performAction } = props
	return (
		<motion.svg width="22" height="22" viewBox="0 0 22 22" fill="none">
			<motion.circle cx="9" cy="9" r="5" fill="#E5F0FF" stroke="#E5F0FF" />
			<motion.circle
				cx="9"
				cy="9"
				r="8"
				stroke="#E5F0FF"
				variants={draw}
				custom={1}
				animate={performAction ? "visible" : "hidden"}
				initial="hidden"
			/>
		</motion.svg>
	)
}

export default CursorSVG
