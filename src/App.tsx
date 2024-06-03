import { useState } from "react"
import "./App.scss"
import CustomCursor, { HandLandmarks } from "./components/cursor/CustomCursor"
import Header from "./components/container/header/Header"
import Home from "./pages/home/Home"

function App() {
	const [handLandmarks, setHandLandmarks] = useState<HandLandmarks | undefined>(
		undefined
	)
	const [isHandTrackerEnabled, setIsHandTrackerEnabled] = useState(false)
	const [isHandTrackerHovered, setIsHandTrackerHovered] = useState(false)
	return (
		<div
			className="App"
			style={{
				height: "100vh",
			}}
		>
			<Header
				isHandTrackerEnabled={isHandTrackerEnabled}
				setIsHandTrackerEnabled={setIsHandTrackerEnabled}
				setIsHandTrackerHovered={setIsHandTrackerHovered}
			/>
			<CustomCursor
				handLandmarks={handLandmarks}
				setHandLandmarks={setHandLandmarks}
				isHandTrackerEnabled={isHandTrackerEnabled}
			/>
			<Home
				handLandmarks={handLandmarks}
				isHandTrackerHovered={isHandTrackerHovered}
			/>
		</div>
	)
}

export default App
