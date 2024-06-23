import { motion } from "framer-motion"
import { useRef, useState } from "react"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import "./App.scss"
import { HandLandmarks } from "./components/cursor/CustomCursor"
import {
  EMPTY_POSITION,
  Position
} from "./hooks/commonHooks"
import _layout from "./pages/_layout"
import Degree from "./pages/experience/Experience"
import Home from "./pages/home/Home"
import About from "./pages/about/About"

function App() {
	const [handLandmarks, setHandLandmarks] = useState<HandLandmarks | undefined>(
		undefined
	)
	const [mousePosition, setMousePosition] = useState<Position>(EMPTY_POSITION)
	const [isHandTrackerEnabled, setIsHandTrackerEnabled] = useState(false)
	const [isHandTrackerHovered, setIsHandTrackerHovered] = useState(false)

	const bodyRef = useRef<HTMLDivElement>(null)

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
					index: true,
					element: (
						<Home
							handLandmarks={handLandmarks}
							isHandTrackerHovered={isHandTrackerHovered}
						/>
					),
				},
				{
					path: "experience",
					element: <Degree />,
				},
        {
          path: "about-me",
          element: <About />,
        }
			],
		},
	])

	return (
		<motion.div
			className="App"
			style={{
				height: "100vh",
				cursor: "none",
			}}
			ref={bodyRef}
		>
			<RouterProvider router={router} />
		</motion.div>
	)
}

export default App
