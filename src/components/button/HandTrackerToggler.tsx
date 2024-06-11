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
				gridArea: "1 / 2 / 2 / 3",
				width: "fit-content",
				height: "fit-content",
				justifySelf: "center",
				marginTop: "2rem",
			}}
			animation={{
				scale: isHandTrackerEnabled ? 1.1 : 1,
			}}
			onHoverStart={() => setIsHandTrackerHovered(true)}
			onHoverEnd={() => setIsHandTrackerHovered(false)}
			onClick={() => setIsHandTrackerEnabled(!isHandTrackerEnabled)}
			elemClickable
		>
			<HandTrackerSVG isHandTrackerEnabled={isHandTrackerEnabled} />
		</CustomButton>
	)
}

export default HandTrackerToggler
