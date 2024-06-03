// import { Camera } from "@mediapipe/camera_utils"
// import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils"
// import { HAND_CONNECTIONS, Hands, InputImage, Results } from "@mediapipe/hands"
// import { motion } from "framer-motion"
// import { useEffect, useRef } from "react"

// export interface handLandmarks {
// 	fingers: {
// 		index: number[]
// 		middle: number[]
// 	}
// }

// interface IHandTrackerComponentProps {
// 	handLandmarks: handLandmarks | undefined
// 	setHandLandmarks: React.Dispatch<
// 		React.SetStateAction<handLandmarks | undefined>
// 	>
// 	isHandTrackerEnabled: boolean
// }

// const CustomCusor: React.FC<IHandTrackerComponentProps> = (
// 	props: IHandTrackerComponentProps
// ) => {
// 	const { handLandmarks, setHandLandmarks, isHandTrackerEnabled } = props
// 	const cursorRef = useRef(null)

// 	const videoRef = useRef<HTMLVideoElement>(null)
// 	const socketRef = useRef<any>(null)

// 	const hands = new Hands({
// 		locateFile: (file: string) =>
// 			`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
// 	})

// 	useEffect(() => {
// 		if (!videoRef.current) {
// 			console.error("Video or canvas element is not ready")
// 			return
// 		}

// 		const videoElement = videoRef.current
// 		const canvasElement = document.createElement("canvas")
// 		const canvasCtx = canvasElement.getContext("2d")
// 		canvasElement.width = window.innerWidth
// 		canvasElement.height = window.innerHeight
// 		if (!canvasCtx) {
// 			console.error("Failed to get canvas context")
// 			return
// 		}

// 		hands.setOptions({
// 			maxNumHands: 1,
// 			modelComplexity: 1,
// 			minDetectionConfidence: 0.5,
// 			minTrackingConfidence: 0.7,
// 		})

// 		hands.onResults((results: Results) => {
// 			canvasCtx.save()
// 			canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height)
// 			canvasCtx.drawImage(
// 				results.image,
// 				0,
// 				0,
// 				window.innerWidth,
// 				window.innerHeight
// 			)

// 			if (results.multiHandLandmarks) {
// 				for (const landmarks of results.multiHandLandmarks) {
// 					drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
// 						color: "#00FF00",
// 						lineWidth: 5,
// 					})
// 					drawLandmarks(canvasCtx, landmarks, {
// 						color: "#FF0000",
// 						lineWidth: 2,
// 					})

// 					// Adjusted for mirroring
// 					const index = [
// 						canvasElement.width - landmarks[8].x * canvasElement.width,
// 						landmarks[8].y * canvasElement.height,
// 					]
// 					const middle = [
// 						canvasElement.width - landmarks[12].x * canvasElement.width,
// 						landmarks[12].y * canvasElement.height,
// 					]
// 					setHandLandmarks({ fingers: { index, middle } })
// 				}
// 			}
// 			canvasCtx.restore()
// 		})
// 	}, [isHandTrackerEnabled, setHandLandmarks])

// 	useEffect(() => {
// 		if (!isHandTrackerEnabled || !videoRef.current) {
// 			return
// 		}

// 		const camera = new Camera(videoRef.current, {
// 			onFrame: async () => {
// 				await hands.send({ image: videoRef.current as InputImage })
// 			},
// 			width: window.innerWidth,
// 			height: window.innerHeight,
// 		})
// 		camera.start()

// 		return () => {
// 			camera.stop()
// 		}
// 	}, [isHandTrackerEnabled])

// 	return (
// 		<>
// 			<video
// 				ref={videoRef}
// 				style={{ display: "none", transform: "scaleX(-1)" }}
// 				playsInline
// 			></video>
// 			{/* <canvas
// 				ref={canvasRef}
// 				width={window.innerWidth}
// 				height={window.innerHeight}
// 				style={{
// 					transform: "scaleX(-1)",
// 					display: "none",
// 				}}
// 			></canvas> */}
// 			{handLandmarks && isHandTrackerEnabled && (
// 				<motion.div
// 					style={{
// 						position: "absolute",
// 						top: handLandmarks.fingers.index[1],
// 						left: handLandmarks.fingers.index[0], // Correct positioning
// 						width: 20,
// 						height: 20,
// 						backgroundColor: "blue",
// 						borderRadius: "50%",
// 					}}
// 				/>
// 			)}
// 		</>
// 	)
// }

// export default CustomCusor

import { Camera } from "@mediapipe/camera_utils"
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils"
import { HAND_CONNECTIONS, Hands, InputImage, Results } from "@mediapipe/hands"
import { motion } from "framer-motion"
import { useCallback, useEffect, useMemo, useRef } from "react"

export interface HandLandmarks {
	fingers: {
		index: number[]
		middle: number[]
	}
}

interface IHandTrackerComponentProps {
	handLandmarks: HandLandmarks | undefined
	setHandLandmarks: React.Dispatch<
		React.SetStateAction<HandLandmarks | undefined>
	>
	isHandTrackerEnabled: boolean
}

const CustomCursor: React.FC<IHandTrackerComponentProps> = ({
	handLandmarks,
	setHandLandmarks,
	isHandTrackerEnabled,
}) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const hands = useMemo(
		() =>
			new Hands({
				locateFile: (file: string) =>
					`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
			}),
		[]
	)

	const onFrame = useCallback(async () => {
		if (videoRef.current) {
			await hands.send({ image: videoRef.current as InputImage })
		}
	}, [hands])

	const onResults = useCallback(
		(results: Results) => {
			const canvasElement = canvasRef.current
			const canvasCtx = canvasElement?.getContext("2d")

			if (!canvasCtx || !canvasElement)
				return console.error("Failed to get canvas context")

			if (canvasCtx) {
				canvasCtx.save()
				canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height)
				canvasCtx.drawImage(
					results.image,
					0,
					0,
					window.innerWidth,
					window.innerHeight
				)

				if (results.multiHandLandmarks) {
					for (const landmarks of results.multiHandLandmarks) {
						drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
							color: "#00FF00",
							lineWidth: 5,
						})
						drawLandmarks(canvasCtx, landmarks, {
							color: "#FF0000",
							lineWidth: 2,
						})

						const index = [
							canvasElement.width - landmarks[8].x * canvasElement.width,
							landmarks[8].y * canvasElement.height,
						]
						const middle = [
							canvasElement.width - landmarks[12].x * canvasElement.width,
							landmarks[12].y * canvasElement.height,
						]
						setHandLandmarks({ fingers: { index, middle } })
					}
				}
				canvasCtx.restore()
			}
		},
		[setHandLandmarks]
	)

	useEffect(() => {
		if (!videoRef.current || !canvasRef.current || !isHandTrackerEnabled) {
			return
		}

		hands.setOptions({
			maxNumHands: 1,
			modelComplexity: 1,
			minDetectionConfidence: 0.5,
			minTrackingConfidence: 0.7,
		})

		hands.onResults(onResults)

		const camera = new Camera(videoRef.current, {
			onFrame: onFrame,
			width: window.innerWidth,
			height: window.innerHeight,
		})
		camera.start()

		return () => {
			camera.stop()
		}
	}, [onFrame, onResults, isHandTrackerEnabled, hands])

	return (
		<>
			<video
				ref={videoRef}
				style={{ display: "none", transform: "scaleX(-1)" }}
				playsInline
			></video>
			<canvas
				ref={canvasRef}
				width={window.innerWidth}
				height={window.innerHeight}
				style={{ transform: "scaleX(-1)", display: "none" }}
			></canvas>
			{handLandmarks && isHandTrackerEnabled && (
				<motion.div
					style={{
						position: "absolute",
						top: handLandmarks.fingers.index[1],
						left: handLandmarks.fingers.index[0], // Correct positioning
						width: 20,
						height: 20,
						backgroundColor: "blue",
						borderRadius: "50%",
					}}
				/>
			)}
		</>
	)
}

export default CustomCursor
