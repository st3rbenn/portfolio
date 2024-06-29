import { OrbitControls } from "@react-three/drei"
import { MotionCanvas } from "framer-motion-3d"
import { useRef, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.scss"
import { HandLandmarks } from "./components/cursor/CustomCursor"
import StarField from "./components/three/StarField"
import { EMPTY_POSITION, Position } from "./hooks/commonHooks"
import _layout from "./pages/_layout"
import Home from "./pages/home/Home"
import { motion } from "framer-motion-3d"

function App() {
	const [handLandmarks, setHandLandmarks] = useState<HandLandmarks | undefined>(
		undefined
	)
	const [mousePosition, setMousePosition] = useState<Position>(EMPTY_POSITION)
	const [isHandTrackerEnabled, setIsHandTrackerEnabled] = useState(false)
	const [isHandTrackerHovered, setIsHandTrackerHovered] = useState(false)
	const [enableRotate, setEnableRotate] = useState(false)

	const globalRef = useRef<HTMLDivElement>(null)

	setTimeout(() => {
		setEnableRotate(true)
	}, 5000)

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
							globalRef={globalRef}
						/>
					),
				},
			],
		},
	])

	return (
		<>
			<MotionCanvas
				// camera={{
				// 	position: [0, 0, 750],
				// 	fov: 100,
				// 	near: 0.1,
				// 	far: 1000,
				//   receiveShadow: true,
				// }}
				dpr={[1, 2]}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundImage:
						"radial-gradient(rgba(15, 34, 61, 1) 0%, rgba(0, 7, 33, 1) 100%, rgba(15, 33, 61, 1) 100%)",
				}}
			>
				<OrbitControls
					maxPolarAngle={Math.PI}
					minPolarAngle={0}
					enableZoom={false}
					enablePan={false}
					enableRotate={enableRotate}
				/>
				<StarField globalRef={globalRef} />
			</MotionCanvas>

			<RouterProvider router={router} />
		</>
	)
}

export default App
