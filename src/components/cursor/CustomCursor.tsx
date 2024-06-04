import { Camera } from "@mediapipe/camera_utils"
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils"
import { HAND_CONNECTIONS, Hands, InputImage, Results } from "@mediapipe/hands"
import { motion } from "framer-motion"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { EMPTY_POSITION, Position } from "../../hooks/commonHooks"
import CursorSVG from "../svg/CursorSVG"

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

	mousePosition: Position
	setMousePosition: React.Dispatch<React.SetStateAction<Position>>

	isHandTrackerEnabled: boolean
	bodyRef: React.RefObject<HTMLDivElement>
}

const CustomCursor: React.FC<IHandTrackerComponentProps> = (
	props: IHandTrackerComponentProps
) => {
	const {
		handLandmarks,
		setHandLandmarks,
		isHandTrackerEnabled,
		mousePosition,
		setMousePosition,
		bodyRef,
	} = props
	const videoRef = useRef<HTMLVideoElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [cursorPosition, setCursorPosition] = useState<Position>(EMPTY_POSITION)
	const cursorRef = useRef<HTMLDivElement>(null)
	const [performAction, setPerformAction] = useState(false)
	let lastHoveredElement: Element | null = null

	const mouseEnterEvent = new MouseEvent("mouseenter", {
		view: window,
		cancelable: false,
	})
	const mouseLeaveEvent = new MouseEvent("mouseleave", {
		view: window,
		cancelable: false,
	})
	const clickEvent = new MouseEvent("click", {
		view: window,
		cancelable: true,
	})

	const handleCurrentElementHovered = (element: Element | null) => {
		if (lastHoveredElement !== element) {
			setPerformAction(false)
			lastHoveredElement?.dispatchEvent(mouseLeaveEvent)
			lastHoveredElement = element
		}

		if (element) {
			element.parentNode?.dispatchEvent(mouseEnterEvent)
			switch (element.nodeName) {
				case "svg":
					setPerformAction(true)
					break
			}
		}
	}

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

						const element = document.elementFromPoint(index[0], index[1])
						handleCurrentElementHovered(element)

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
			minDetectionConfidence: 0.4,
			minTrackingConfidence: 0.4,
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

	useEffect(() => {
		if (handLandmarks && isHandTrackerEnabled) {
			const { fingers } = handLandmarks
			setCursorPosition({
				x: fingers.index[0],
				y: fingers.index[1],
				centerX: fingers.middle[0],
				centerY: fingers.middle[1],
				height: window.innerHeight,
				width: window.innerWidth,
			})
		} else {
			setCursorPosition(mousePosition)
		}
	}, [mousePosition, handLandmarks, hands])

	// useEffect(() => {
	// 	const handleMouseMove = (event: MouseEvent) => {
	// 		const { clientX, clientY } = event
	// 		const element = document.elementFromPoint(clientX, clientY)

	// 		// handleCurrentElementHovered(element)

	// 		// Déplace également le curseur personnalisé à la position de la souris
	// 		if (cursorRef.current) {
	// 			cursorRef.current.style.left = `${clientX}px`
	// 			cursorRef.current.style.top = `${clientY}px`
	// 		}
	// 	}

	// 	document.addEventListener("mousemove", handleMouseMove)

	// 	return () => {
	// 		document.removeEventListener("mousemove", handleMouseMove)
	// 	}
	// }, [cursorRef])

	return (
		<>
			<video
				ref={videoRef}
				style={{ display: "none", transform: "scaleX(-1)" }}
				playsInline
			></video>
			<motion.canvas
				ref={canvasRef}
				width={window.innerWidth}
				height={window.innerHeight}
				style={{ transform: "scaleX(-1)", display: "none" }}
			/>
			<motion.div
				style={{
					position: "absolute",
					top: cursorPosition.y - 19,
					left: cursorPosition.x - 10,
					pointerEvents: "none",
					zIndex: 9999,
				}}
				ref={cursorRef}
			>
				<CursorSVG performAction={performAction} />
			</motion.div>
		</>
	)
}

export default CustomCursor
