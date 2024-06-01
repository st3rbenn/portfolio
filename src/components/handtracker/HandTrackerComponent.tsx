import { motion, useAnimate } from "framer-motion"
import React, { useEffect, useState } from "react"
import HeadSVG from "../svg/HeadSVG"

interface HandLandmarks {
	fingers: {
		index: number[]
		middle: number[]
	}
}

type HandTrackerComponentProps = {
	handLandmarks?: HandLandmarks
	isHandTrackerHovered: boolean
}

const HandTrackerComponent: React.FC<HandTrackerComponentProps> = (
	porps: HandTrackerComponentProps
) => {
	const { handLandmarks, isHandTrackerHovered } = porps
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
		<motion.section
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<HeadSVG isBlinking={isBlinking} irisPosition={irisPosition} />
			<motion.h1
				animate={{
					opacity: [0, 1],
					y: [20, 0],
					transition: {
						duration: 0.5,
					},
				}}
			>
				Welcome !
			</motion.h1>
			<motion.p
				animate={{
					opacity: [0, 1],
					y: [20, 0],
					transition: {
						duration: 0.5,
						delay: 0.5,
					},
				}}
			>
				🚧 My portfolio is currently under development 🚧
			</motion.p>
		</motion.section>
	)
}

export default HandTrackerComponent
