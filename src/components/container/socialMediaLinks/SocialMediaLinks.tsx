import { useState } from "react"
import CustomLink from "../../common/Customlink"
import GithubSVG from "../../svg/GithubSVG"
import LinkedinSVG from "../../svg/LinkedinSVG"
import MailSVG from "../../svg/MailSVG"

import "./socialmedialinks.scss"

type Props = {}

const btnStyle = {
	background: "none",
	border: "none",
	cursor: "pointer",
	outline: "none",
}

const SocialMediaLinks = (props: Props) => {
	return (
		<nav className="nav-container">
			<CustomLink
				link="https://www.linkedin.com/in/%F0%9F%90%89-anthonin-colas-82ba65229/"
				external
				whileHoverAnim
			>
				<LinkedinSVG />
			</CustomLink>
			<CustomLink link="https://github.com/st3rbenn" external whileHoverAnim>
				<GithubSVG />
			</CustomLink>
			<CustomLink
				link="mailto:anthonincolaspro@gmail.com"
				external
				whileHoverAnim
			>
				<MailSVG />
			</CustomLink>
		</nav>
	)
}

export default SocialMediaLinks
