import { useEffect, useState } from "react"
import HandTrackerToggler from "../../button/HandTrackerToggler"
import CustomLink from "../../common/Customlink"
import HomeSVG from "../../svg/homeSVG"
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks"
import { motion } from "framer-motion"

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
	const [scrollY, setScrollY] = useState(0)

	const handleScroll = () => {
		setScrollY(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])
	return (
		<motion.header
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
			animate={{
				backgroundColor: scrollY > 50 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
        transition: {
          duration: 0.5,
        },
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
				elemClickable
				backHome
			>
				<HomeSVG />
			</CustomLink>
			<HandTrackerToggler
				isHandTrackerEnabled={isHandTrackerEnabled}
				setIsHandTrackerEnabled={setIsHandTrackerEnabled}
				setIsHandTrackerHovered={setIsHandTrackerHovered}
			/>

			<SocialMediaLinks changeSide={scrollY > 50} />
		</motion.header>
	)
}

export default Header
