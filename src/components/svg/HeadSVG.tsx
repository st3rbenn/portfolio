import React from "react"
import { motion } from "framer-motion"

type HeadSVGProps = {
  isBlinking: boolean
  irisPosition: { x: number; y: number }
}

function HeadSVG(props: HeadSVGProps) {
  const { isBlinking, irisPosition } = props
	return (
		<motion.svg width={162} viewBox="0 0 162 80">
			<motion.path
				fill="#23314F"
				d="M161.314 80.5C161.314 59.1501 152.849 38.6746 137.782 23.5779C122.715 8.48123 102.279 1.61187e-06 80.9708 0C59.6625 -1.61187e-06 39.2269 8.48122 24.1596 23.5779C9.09238 38.6746 0.627689 59.1501 0.627686 80.5L80.9708 80.5H161.314Z"
			/>
			<motion.ellipse
				cx="57.5165"
				cy="26"
				rx="9.98051"
				ry="10"
				fill="#E5F0FF"
				animate={{
					scaleY: isBlinking ? 0.005 : 1,
				}}
			/>
			<motion.ellipse
				cx="54.5225"
				cy="23"
				rx="2.99416"
				ry="3"
				fill="#0F223D"
				animate={{
					x: irisPosition.x,
					y: irisPosition.y,
					scaleY: isBlinking ? 0.005 : 1,
				}}
			/>
			<motion.ellipse
				cx="107.419"
				cy="26"
				rx="9.9805"
				ry="10"
				fill="#E5F0FF"
				animate={{
					scaleY: isBlinking ? 0.005 : 1,
				}}
			/>
			<motion.ellipse
				cx="104.425"
				cy="23"
				rx="2.99416"
				ry="3"
				fill="#0F223D"
				animate={{
					x: irisPosition.x,
					y: irisPosition.y,
					scaleY: isBlinking ? 0.005 : 1,
				}}
			/>
			<motion.path
				d="M90.0307 60.4999C91.2147 59.2488 93.2904 60.3999 92.8475 62.0646C92.4528 63.5478 91.4233 64.9547 90.0307 66.071C87.6911 67.9464 84.5179 68.9999 81.2091 68.9999C77.9004 68.9999 74.7271 67.9464 72.3875 66.071C71.2782 65.1818 70.175 63.9958 69.4279 62.7812C68.3136 60.9694 70.7279 59.1696 72.3875 60.4999V60.4999C74.1637 61.9236 78.6973 58 81.2091 58C83.721 58 88.2546 61.9236 90.0307 60.4999V60.4999Z"
				fill="#D9D9D9"
			/>
		</motion.svg>
	)
}

export default HeadSVG
