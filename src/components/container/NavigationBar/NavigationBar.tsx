import { motion } from "framer-motion"
import SwipeLeftSVG from "../../svg/SwipeLeftSVG"
import SwipeRightSVG from "../../svg/SwipeRightSVG"
import SwipeUpSVG from "../../svg/SwipeUpSVG"

import CustomLink from "../../common/Customlink"
import "./navigationBar.scss"
import { useState } from "react"

type Props = {}

const fadeIn = {
	opacity: 1,
	transition: {
		duration: 0.5,
	},
}

const NAVBAR = [
	{
		title: "about me",
		link: "/about-me",
		svg: SwipeLeftSVG,
		animation: {
			y: [10, 0],
			opacity: [0, 1],
			transition: {
				duration: 0.5,
				delay: 0.3,
			},
		},
	},
	{
		title: "experience",
		link: "/experience",
		svg: SwipeUpSVG,
		animation: {
			y: [10, 0],
			opacity: [0, 1],
			transition: {
				duration: 0.5,
				delay: 0.5,
			},
		},
	},
	{
		title: "projects",
		link: "/projects",
		svg: SwipeRightSVG,
		animation: {
			y: [10, 0],
			opacity: [0, 1],
			transition: {
				duration: 0.5,
				delay: 0.4,
			},
		},
	},
]

const NavigationBar = (props: Props) => {
	const [hoverStates, setHoverStates] = useState<Record<string, boolean>>({
		career: false,
		projects: false,
		degree: false,
	})

	const handleMouseEnter = (key: string) => {
		setHoverStates((prev) => ({ ...prev, [key]: true }))
	}

	const handleMouseLeave = (key: string) => {
		setHoverStates((prev) => ({ ...prev, [key]: false }))
	}

	return (
		<motion.div className="navigation-bar">
			{NAVBAR.map((item, index) => (
				<CustomLink
					key={index + item.title}
					link={item.link}
					animation={item.animation}
					onMouseEnter={() => handleMouseEnter(item.title)}
					onMouseLeave={() => handleMouseLeave(item.title)}
					elemAsAnim
				>
					<item.svg isHovered={hoverStates[item.title]} />
					<motion.p
						style={{
							fontWeight: "bolder",
							alignSelf:
								item.title === "degree"
									? "end"
									: item.title === "projects"
									? "center"
									: "start",
						}}
					>
						{item.title}
					</motion.p>
				</CustomLink>
			))}
		</motion.div>
	)
}

export default NavigationBar
