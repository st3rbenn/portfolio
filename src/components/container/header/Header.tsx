import HandTrackerToggler from "../../button/HandTrackerToggler"
import SocialMediaLinks from "../SocialMediaLinks"

type HeaderProps = {
	isHandTrackerEnabled: boolean
	setIsHandTrackerEnabled: (isHandTrackerEnabled: boolean) => void

	setIsHandTrackerHovered: (isHandTrackerHovered: boolean) => void
}

const Header = (props: HeaderProps) => {
	const {
		isHandTrackerEnabled,
		setIsHandTrackerEnabled,
		setIsHandTrackerHovered,
	} = props
	return (
		<header
			style={{
				position: "fixed",
				top: "0",
				left: "0",
				right: "0",
				height: "10rem",
				zIndex: 100,
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gridTemplateRows: "1fr",
				gap: "0px 0px",
				paddingLeft: "5rem",
				paddingRight: "5rem",
				alignItems: "start",
			}}
		>
			<div></div>
			<HandTrackerToggler
				isHandTrackerEnabled={isHandTrackerEnabled}
				setIsHandTrackerEnabled={setIsHandTrackerEnabled}
				setIsHandTrackerHovered={setIsHandTrackerHovered}
			/>

			<SocialMediaLinks />
		</header>
	)
}

export default Header
