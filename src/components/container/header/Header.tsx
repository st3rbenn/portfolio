import { motion } from "framer-motion"
import CustomLink from "../../common/Customlink"
import HomeSVG from "../../svg/homeSVG"
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import "./header.scss"

type HeaderProps = {
	isHandTrackerEnabled: boolean
	setIsHandTrackerEnabled: (isHandTrackerEnabled: boolean) => void
	setIsHandTrackerHovered: (isHandTrackerHovered: boolean) => void
	language: string
	setLanguage: Dispatch<SetStateAction<string>>
}

const Header = (props: HeaderProps) => {
	const {
		isHandTrackerEnabled,
		setIsHandTrackerEnabled,
		setIsHandTrackerHovered,
		setLanguage,
		language,
	} = props
	const [scrollPosition, setScrollPosition] = useState(0)

	const handleScroll = () => {
		const position = window.scrollY
		setScrollPosition(position)
	}

	const handleScrollToTop = () => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		})
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
				onClick={handleScrollToTop}
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

			<SocialMediaLinks language={language} setLanguage={setLanguage} />
		</motion.header>
	)
}

export default Header
