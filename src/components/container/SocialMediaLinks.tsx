import { useState } from "react"
import CustomLink from "../common/Customlink"
import GithubSVG from "../svg/GithubSVG"
import LinkedinSVG from "../svg/LinkedinSVG"
import MailSVG from "../svg/MailSVG"

type Props = {}

const btnStyle = {
	background: "none",
	border: "none",
	cursor: "pointer",
	outline: "none",
}

const SocialMediaLinks = (props: Props) => {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "flex-end",
				gap: ".5rem",
				paddingTop: "6rem",
			}}
		>
			<CustomLink link="https://www.linkedin.com/in/%F0%9F%90%89-anthonin-colas-82ba65229/">
				<LinkedinSVG hovered={isHovered} />
			</CustomLink>
			<CustomLink link="https://github.com/st3rbenn">
				<GithubSVG hovered={isHovered} />
			</CustomLink>
			<CustomLink link="mailto:anthonincolaspro@gmail.com">
				<MailSVG hovered={isHovered} />
			</CustomLink>
		</div>
	)
}

export default SocialMediaLinks
