import CustomButton from "../common/CustomButton"
import HandTrackerSVG from "../svg/HandTrackerSVG"
type HandTrackerTogglerProps = {
	isHandTrackerEnabled: boolean
	setIsHandTrackerEnabled: (isHandTrackerEnabled: boolean) => void
	setIsHandTrackerHovered: (isHandTrackerHovered: boolean) => void
}

const HandTrackerToggler = (props: HandTrackerTogglerProps) => {
	const {
		isHandTrackerEnabled,
		setIsHandTrackerEnabled,
		setIsHandTrackerHovered,
	} = props

	return (
		<CustomButton
			style={{
				paddingTop: "2rem",
			}}
			onHoverStart={() => setIsHandTrackerHovered(true)}
			onHoverEnd={() => setIsHandTrackerHovered(false)}
			onClick={() => setIsHandTrackerEnabled(!isHandTrackerEnabled)}
		>
			<HandTrackerSVG isHandTrackerEnabled={isHandTrackerEnabled} />
		</CustomButton>
	)
}

export default HandTrackerToggler
