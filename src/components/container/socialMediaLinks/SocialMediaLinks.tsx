import { useState } from "react"
import CustomLink from "../../common/Customlink"
import GithubSVG from "../../svg/GithubSVG"
import LinkedinSVG from "../../svg/LinkedinSVG"
import MailSVG from "../../svg/MailSVG"
import { motion } from "framer-motion"

import "./socialmedialinks.scss"

type Props = {
	changeSide: boolean
}

const btnStyle = {
	background: "none",
	border: "none",
	cursor: "pointer",
	outline: "none",
}

const SocialMediaLinks = (props: Props) => {
	const { changeSide } = props
	return (
		<motion.nav
			className="nav-container"
			style={{
				alignItems: "start",
				width: "fit-content",
				alignSelf: "center",
				height: "fit-content",
			}}
		>
			<CustomLink
				link="https://www.linkedin.com/in/%F0%9F%90%89-anthonin-colas-82ba65229/"
				external
				whileHoverAnim
				elemHoverable
				elemClickable
			>
				<LinkedinSVG />
			</CustomLink>
			<CustomLink
				link="https://github.com/st3rbenn"
				external
				whileHoverAnim
				elemHoverable
				elemClickable
			>
				<GithubSVG />
			</CustomLink>
			<CustomLink
				link="mailto:anthonincolaspro@gmail.com"
				external
				whileHoverAnim
				elemHoverable
				elemClickable
			>
				<MailSVG />
			</CustomLink>
		</motion.nav>
	)
}

export default SocialMediaLinks
