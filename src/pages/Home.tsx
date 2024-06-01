import { HandLandmarks } from "../components/cursor/CustomCusor"
import HandTrackerComponent from "../components/handtracker/HandTrackerComponent"

type HomeProps = {
	handLandmarks: HandLandmarks | undefined
  isHandTrackerHovered: boolean
}

const Home = (props: HomeProps) => {
	const { handLandmarks, isHandTrackerHovered } = props
	return (
    <HandTrackerComponent handLandmarks={handLandmarks} isHandTrackerHovered={isHandTrackerHovered} />
  )
}

export default Home
