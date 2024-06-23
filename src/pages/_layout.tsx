import React, {
	Dispatch,
	RefObject,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react"
import Header from "../components/container/header/Header"
import CustomCursor, { HandLandmarks } from "../components/cursor/CustomCursor"
import { Position } from "../hooks/commonHooks"
import { Outlet } from "react-router-dom"
import { isMobile } from "react-device-detect"
import { motion } from "framer-motion"

type _layoutProps = {
	handLandmarks: HandLandmarks | undefined
	setHandLandmarks: Dispatch<SetStateAction<HandLandmarks | undefined>>
	mousePosition: Position
	setMousePosition: Dispatch<SetStateAction<Position>>
	isHandTrackerEnabled: boolean
	setIsHandTrackerEnabled: (isHandTrackerEnabled: boolean) => void
	setIsHandTrackerHovered: (isHandTrackerHovered: boolean) => void
	bodyRef: RefObject<HTMLDivElement>
}

const fadeOutCircleClick = {
	hidden: { opacity: 0, r: 0 },
	visible: {
		opacity: [0, 1, 0],
		r: [0, 10, 15],
		transition: {
			duration: 0.5,
		},
	},
}

const _layout = (props: _layoutProps) => {
	const {
		handLandmarks,
		setHandLandmarks,
		mousePosition,
		setMousePosition,
		isHandTrackerEnabled,
		setIsHandTrackerEnabled,
		setIsHandTrackerHovered,
		bodyRef,
	} = props
	const [circles, setCircles] = useState<
		{ x: number; y: number; key: number }[]
	>([])

  const svgRef = useRef<SVGSVGElement>(null)
  let throttle: NodeJS.Timeout

	const handleAddCircle = (e: MouseEvent) => {
		const newCircle = {
			x: e.clientX + 6,
			y: e.clientY - 3,
			key: Date.now(),
		}
		setCircles((prevCircles) => [...prevCircles, newCircle])
	}

  const handleRemoveCircle = (key: number) => {
    setCircles((prevCircles) => prevCircles.filter((circle) => circle.key !== key))

    if(svgRef.current) {
      const svg = svgRef.current
      const circle = svg.querySelector(`[key="${key}"]`)
      if(circle) {
        svg.removeChild(circle)
      }
    }
  }

	useEffect(() => {
		window.addEventListener("click", handleAddCircle)
		return () => window.removeEventListener("click", handleAddCircle)
	}, [])

  useEffect(() => {
    //use a debounce for waiting the user to stop clicking before removing the circle
    
    if(circles.length > 0) {
      clearTimeout(throttle)
      throttle = setTimeout(() => {
        const key = circles[circles.length - 1].key
        handleRemoveCircle(key)
      }, 500)
    }
  }, [circles])

	return (
		<>
			<Header
				isHandTrackerEnabled={isHandTrackerEnabled}
				setIsHandTrackerEnabled={setIsHandTrackerEnabled}
				setIsHandTrackerHovered={setIsHandTrackerHovered}
			/>
			{!isMobile && (
				<CustomCursor
					handLandmarks={handLandmarks}
					setHandLandmarks={setHandLandmarks}
					mousePosition={mousePosition}
					setMousePosition={setMousePosition}
					isHandTrackerEnabled={isHandTrackerEnabled}
					bodyRef={bodyRef}
				/>
			)}

			<motion.svg
				style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
				}}
				width="100%"
				height="100%"
				fill="none"
        ref={svgRef}
			>
				{circles.map((circle) => (
					<motion.circle
						key={circle.key}
						cx={circle.x}
						cy={circle.y}
						initial="hidden"
						animate="visible"
						variants={fadeOutCircleClick}
						stroke="#E5F0FF"
					/>
				))}
			</motion.svg>
			<Outlet />
		</>
	)
}

export default _layout
