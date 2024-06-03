import { motion } from "framer-motion"
import SwipeLeftSVG from "../../svg/SwipeLeftSVG"
import SwipeRightSVG from "../../svg/SwipeRightSVG"
import SwipeUpSVG from "../../svg/SwipeUpSVG"

import CustomLink from "../../common/Customlink"
import "./navigationBar.scss"

type Props = {}

const fadeIn = {
	opacity: 1,
	transition: {
		duration: 0.5,
	},
}

const NAVBAR = [
	{
		title: "career",
		link: "/career",
		svg: <SwipeLeftSVG />,
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
		title: "projects",
		link: "/projects",
		svg: <SwipeUpSVG />,
		animation: {
			y: [10, 0],
			opacity: [0, 1],
			transition: {
				duration: 0.5,
				delay: 0.4,
			},
		},
	},
	{
		title: "degree",
		link: "/degree",
		svg: <SwipeRightSVG />,
		animation: {
			y: [10, 0],
			opacity: [0, 1],
			transition: {
				duration: 0.5,
				delay: 0.5,
			},
		},
	},
]

const NavigationBar = (props: Props) => {
	return (
		<motion.div className="navigation-bar">
			{NAVBAR.map((item, index) => (
				<CustomLink key={index} link={item.link} animation={item.animation}>
					{item.svg}
					<motion.p
						style={{
							fontWeight: "bolder",
							alignSelf: item.title === "degree" ? "end" : "start",
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
