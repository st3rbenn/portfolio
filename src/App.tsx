import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import "./App.scss"
import Header from "./components/container/header/Header"
import CustomCursor, { HandLandmarks } from "./components/cursor/CustomCursor"
import {
	EMPTY_POSITION,
	getRelativeCoordinates,
	Position,
} from "./hooks/commonHooks"
import Home from "./pages/home/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Degree from "./pages/degree/Degree"
import _layout from "./pages/_layout"

function App() {
	const [handLandmarks, setHandLandmarks] = useState<HandLandmarks | undefined>(
		undefined
	)
	const [mousePosition, setMousePosition] = useState<Position>(EMPTY_POSITION)
	const [isHandTrackerEnabled, setIsHandTrackerEnabled] = useState(false)
	const [isHandTrackerHovered, setIsHandTrackerHovered] = useState(false)

	const bodyRef = useRef<HTMLDivElement>(null)

	const handleMouseMove = (event: MouseEvent) => {
		const pos = getRelativeCoordinates(event, bodyRef.current)
		setMousePosition(pos)
	}

	useEffect(() => {
		document.addEventListener("mousemove", (e) => handleMouseMove(e))

		return () => {
			document.removeEventListener("mousemove", (e) => handleMouseMove(e))
		}
	}, [])

	const router = createBrowserRouter([
		{
			element: (
				<_layout
					handLandmarks={handLandmarks}
					setHandLandmarks={setHandLandmarks}
					mousePosition={mousePosition}
					setMousePosition={setMousePosition}
					isHandTrackerEnabled={isHandTrackerEnabled}
					setIsHandTrackerEnabled={setIsHandTrackerEnabled}
					setIsHandTrackerHovered={setIsHandTrackerHovered}
					bodyRef={bodyRef}
				/>
			),
			children: [
				{
					path: "/",
					element: (
						<Home
							handLandmarks={handLandmarks}
							isHandTrackerHovered={isHandTrackerHovered}
						/>
					),
				},
				{
					path: "/degree",
					element: <Degree />,
				},
			],
		},
	])

	return (
		<motion.div
			className="App"
			style={{
				height: "100vh",
			}}
			ref={bodyRef}
		>
			<RouterProvider router={router} />
		</motion.div>
	)
}

export default App
