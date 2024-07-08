import { motion } from "framer-motion"
import CustomLink from "../../common/Customlink"
import HomeSVG from "../../svg/homeSVG"
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks"

import "./header.scss"
import { useEffect, useState } from "react"

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
	const [scrollPosition, setScrollPosition] = useState(0)

	const handleScroll = () => {
		const position = window.scrollY
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true })
	}, [])

	return (
		<motion.header
			animate={{
				opacity: [0, 1],
				transition: {
					delay: 2,
				},
			}}
			className="header"
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
