import HandTrackerToggler from "../../button/HandTrackerToggler"
import CustomLink from "../../common/Customlink"
import HomeSVG from "../../svg/homeSVG"
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks"

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
				zIndex: 100,
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gridTemplateRows: "1fr",
				paddingLeft: "5rem",
				paddingRight: "5rem",
			}}
		>
			<CustomLink
				link="/"
				style={{
					alignItems: "start",
          width: "fit-content",
          alignSelf: "center",
          height: "fit-content",
				}}
				animation={{}}
        elemClickable
        back
			>
				<HomeSVG />
			</CustomLink>
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
