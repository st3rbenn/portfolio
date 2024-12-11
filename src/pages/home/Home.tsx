import { motion } from "framer-motion"
import i18next from "i18next"
import { Dispatch, RefObject, SetStateAction } from "react"
import CustomButton from "../../components/common/CustomButton"
import Hero from "../../components/container/hero/Hero"
import { HandLandmarks } from "../../components/cursor/CustomCursor"
import { ParallaxProject } from "../../components/projects/ParalaxProject"
import About from "../about/About"
import ContactMe from "../contactme/ContactMe"
import "./home.scss"

type HomeProps = {
	handLandmarks: HandLandmarks | undefined
	isHandTrackerHovered: boolean
	globalRef: RefObject<HTMLDivElement>
	setLanguage: Dispatch<SetStateAction<string>>
	language: string
}

const Home = (props: HomeProps) => {
	const {
		handLandmarks,
		isHandTrackerHovered,
		globalRef,
		setLanguage,
		language,
	} = props

	return (
		<motion.main
			ref={globalRef}
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: [0, 1],
				transition: {
					delay: 2.4,
				},
			}}
			className="main"
		>
			<Hero
				handLandmarks={handLandmarks}
				isHandTrackerHovered={isHandTrackerHovered}
			/>
			<ParallaxProject />
			<About />
			<ContactMe />
		</motion.main>
	)
}

export default Home
