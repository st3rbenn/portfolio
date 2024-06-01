import { useState } from "react"
import "./App.css"
import CustomCusor, { HandLandmarks } from "./components/cursor/CustomCusor"
import Header from "./components/container/header/Header"
import Home from "./pages/Home"

function App() {
	const [handLandmarks, setHandLandmarks] = useState<HandLandmarks | undefined>(
		undefined
	)
	const [isHandTrackerEnabled, setIsHandTrackerEnabled] = useState(false)
	const [isHandTrackerHovered, setIsHandTrackerHovered] = useState(false)
	return (
		<div className="App">
			<Header
				isHandTrackerEnabled={isHandTrackerEnabled}
				setIsHandTrackerEnabled={setIsHandTrackerEnabled}
				setIsHandTrackerHovered={setIsHandTrackerHovered}
			/>
			<CustomCusor
				handLandmarks={handLandmarks}
				setHandLandmarks={setHandLandmarks}
				isHandTrackerEnabled={isHandTrackerEnabled}
			/>
			<Home handLandmarks={handLandmarks} 
      isHandTrackerHovered={isHandTrackerHovered}
      />
		</div>
	)
}

export default App
