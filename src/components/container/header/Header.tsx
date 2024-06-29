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

	return (
		<motion.header
			style={{
				position: "fixed",
				top: "0",
				left: "0",
				right: "0",
				zIndex: 100,
				display: "grid",
				gridTemplateColumns: "repeat(2, 1fr)",
				gridTemplateRows: "1fr",
				paddingLeft: "5rem",
				paddingRight: "5rem",
			}}
			animate={{
				opacity: [0, 1],
				transition: {
					delay: 2,
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
			{/* <HandTrackerToggler
				isHandTrackerEnabled={isHandTrackerEnabled}
				setIsHandTrackerEnabled={setIsHandTrackerEnabled}
				setIsHandTrackerHovered={setIsHandTrackerHovered}
			/> */}

			<SocialMediaLinks />
		</motion.header>
	)
}

export default Header
