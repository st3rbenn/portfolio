import { Camera } from "@mediapipe/camera_utils"
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils"
import { HAND_CONNECTIONS, Hands, InputImage, Results } from "@mediapipe/hands"
import { motion } from "framer-motion"
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { EMPTY_POSITION, Position, useThrottle } from "../../hooks/commonHooks"
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

const CustomCursor: FC<IHandTrackerComponentProps> = (
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
	const [isClickAllowed, setIsClickAllowed] = useState(true)
	const [triggerClickEffect, setTriggerClickEffect] = useState(false)
	let lastHoveredElement: Element | null = null
	let timeoutId: NodeJS.Timeout | undefined = undefined // Variable globale ou d'état pour stocker l'ID du timeout

	const throttleEvent = useThrottle(
		(clickableParent: Element, currentElement: Element) => {
			if (clickableParent?.parentElement?.closest("[data-elem-clickable]")) {
				clickableParent.dispatchEvent(clickEvent)
				setPerformAction(false)
				setIsClickAllowed(true)
				currentElement.removeAttribute("data-elem-click-disabled")
			}
		},
		2500
	)

	const mouseEnterEvent = new MouseEvent("mouseenter", {
		view: window,
		cancelable: false,
	})
	const mouseLeaveEvent = new MouseEvent("mouseleave", {
		view: window,
		cancelable: false,
	})
	const mouseHoverEvent = new MouseEvent("mousehover", {
		view: window,
		cancelable: false,
	})
	const clickEvent = new MouseEvent("click", {
		view: window,
		cancelable: true,
		bubbles: true,
	})

	const handleCurrentElementHovered = (element: Element | null) => {
		// console.log(
		// 	`last hovered element: ${lastHoveredElement?.localName} - current hovered element: ${element?.localName}`
		// )
		if (lastHoveredElement?.localName !== element?.localName) {
			lastHoveredElement?.dispatchEvent(mouseLeaveEvent)
			lastHoveredElement = element
			// clearTimeout(timeoutId)
			// setPerformAction(false)
			// setIsClickAllowed(true)
		}

		if (element) {
			if (element.parentElement?.closest("[data-elem-hoverable]")) {
				element.parentElement.dispatchEvent(mouseHoverEvent)
			}

			if (element.parentElement?.closest("[data-elem-as-anim]")) {
				element.parentElement.dispatchEvent(mouseEnterEvent)
			}

			const clickableParent = element.parentElement?.closest(
				"[data-elem-clickable]"
			)
			const isClickDisabled = element.parentElement?.closest(
				"[data-elem-click-disabled]"
			)
			if (clickableParent && !isClickDisabled) {
				if (!performAction && isClickAllowed) {
					setPerformAction(true)
					setIsClickAllowed(false)

					element.parentElement?.setAttribute(
						"data-elem-click-disabled",
						"true"
					)

					timeoutId = setTimeout(() => {
						clickableParent.dispatchEvent(clickEvent)
						setPerformAction(false)
						setIsClickAllowed(true)
						element.parentElement?.removeAttribute("data-elem-click-disabled")
						timeoutId = undefined
					}, 2500)
				}
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
						handleCurrentElementHovered(element?.parentElement as Element)

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
		}
	}, [handLandmarks, hands])

	useEffect(() => {
		window.addEventListener("mousemove", (event) => {
			setCursorPosition({
				x: event.clientX,
				y: event.clientY,
				centerX: event.clientX,
				centerY: event.clientY,
				height: window.innerHeight,
				width: window.innerWidth,
			})
		})

		window.addEventListener("click", () => {
			setTriggerClickEffect(true)
			setTimeout(() => {
				setTriggerClickEffect(false)
			}, 500)
		})

		return () => {
			window.removeEventListener("mousemove", (event) => {
				setCursorPosition({
					x: event.clientX,
					y: event.clientY,
					centerX: event.clientX,
					centerY: event.clientY,
					height: window.innerHeight,
					width: window.innerWidth,
				})
			})
		}
	}, [setCursorPosition, setTriggerClickEffect])

	return (
		<>
			<video
				ref={videoRef}
				style={{ display: "none", transform: "scaleX(-1)" }}
				playsInline
			/>
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
					pointerEvents: performAction ? "auto" : "none",
					zIndex: 9999,
				}}
				ref={cursorRef}
			>
				<CursorSVG
					performAction={performAction}
					clickTriggered={triggerClickEffect}
          cursorPosition={cursorPosition}
				/>
			</motion.div>
		</>
	)
}

export default CustomCursor
