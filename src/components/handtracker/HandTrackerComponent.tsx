import React, { useEffect, useState } from "react"
import HeadSVG from "../svg/HeadSVG"
import { motion } from "framer-motion"

interface HandLandmarks {
	fingers: {
		index: number[]
		middle: number[]
	}
}

type HeadAnimationProps = {
	handLandmarks?: HandLandmarks
	isHandTrackerHovered: boolean
	style?: React.CSSProperties
}

const HeadAnimation: React.FC<HeadAnimationProps> = (
	porps: HeadAnimationProps
) => {
	const { handLandmarks, isHandTrackerHovered, style } = porps
	const [isBlinking, setIsBlinking] = useState(false)
	const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const blink = () => {
			setIsBlinking(true)
			setTimeout(() => {
				setIsBlinking(false)
			}, 100 + Math.random() * 300) // Blink duration between 100 to 400 milliseconds
		}

		const interval = setInterval(blink, 2000 + Math.random() * 5000) // Random interval between blinks
		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		const eyeMovement = () => {
			setIrisPosition({
				x: Math.random() * 4,
				y: Math.random() * 4,
			})
		}

		const interval = setInterval(eyeMovement, 2000 + Math.random() * 3000) // Random interval between eye movements
		return () => clearInterval(interval)
	}, [])

	//iris follow hand
	useEffect(() => {
		if (handLandmarks) {
			const { fingers } = handLandmarks
			const indexFinger = fingers.index
			const middleFinger = fingers.middle
			const indexFingerX = indexFinger[0]
			const indexFingerY = indexFinger[1]
			const middleFingerX = middleFinger[0]
			const middleFingerY = middleFinger[1]
			const irisX = (indexFingerX + middleFingerX) / 5
			const irisY = (indexFingerY + middleFingerY) / 5
			setIrisPosition({
				x: (irisX - 100) / 50,
				y: (irisY - 100) / 50,
			})
		}
	}, [handLandmarks])

	return (
		<motion.div style={style}>
			<HeadSVG isBlinking={isBlinking} irisPosition={irisPosition} />
		</motion.div>
	)
}

export default HeadAnimation
