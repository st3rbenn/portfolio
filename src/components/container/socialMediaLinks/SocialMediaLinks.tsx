import { Dispatch, SetStateAction, useState } from "react"
import CustomLink from "../../common/Customlink"
import GithubSVG from "../../svg/GithubSVG"
import LinkedinSVG from "../../svg/LinkedinSVG"
import MailSVG from "../../svg/MailSVG"
import { motion } from "framer-motion"

import "./socialmedialinks.scss"
import CustomButton from "../../common/CustomButton"
import i18next from "i18next"

type Props = {
	language: string
	setLanguage: Dispatch<SetStateAction<string>>
}

const btnStyle = {
	background: "none",
	border: "none",
	cursor: "pointer",
	outline: "none",
}

const SocialMediaLinks = (props: Props) => {
	const { language, setLanguage } = props

	const handleChangeLanguage = async () => {
		setLanguage(language === "fr" ? "en" : language === "en" ? "fr" : "en")

		i18next.changeLanguage(language === "fr" ? "en" : "fr")
	}
	return (
		<motion.nav className="nav-container">
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

			<CustomButton
				onClick={handleChangeLanguage}
				style={{
					fontSize: "2rem",
          marginTop: "0.5rem"
				}}
			>
				{language === "fr" ? "🇺🇸" : "🇫🇷"}
			</CustomButton>
		</motion.nav>
	)
}

export default SocialMediaLinks
