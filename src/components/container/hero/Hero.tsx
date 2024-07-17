import { motion, useAnimate, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { HandLandmarks } from "../../cursor/CustomCursor"
import HeadAnimation from "../../handtracker/HeadAnimation"
import { FiArrowDown } from "react-icons/fi"
import { useTranslation } from "react-i18next"

type Props = {
	handLandmarks: HandLandmarks | undefined
	isHandTrackerHovered: boolean
}

const Hero = (props: Props) => {
  const {t} = useTranslation()
	const { handLandmarks, isHandTrackerHovered } = props
	const homeRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: homeRef,
		offset: ["end end", "end start"],
	})

	const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
	const scaleOut = useTransform(scrollYProgress, [0, 0.7], [1, 0.7])
	const zIndex = useTransform(scrollYProgress, (pos) => {
		return pos > 0.7 ? -1 : 1
	})

	return (
		<motion.section
			className="container"
			ref={homeRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				marginLeft: "auto",
				marginRight: "auto",
				zIndex,
			}}
		>
			<motion.div
				className="section"
				style={{
					opacity: opacity,
					scale: scaleOut,
				}}
			>
				<HeadAnimation
					handLandmarks={handLandmarks}
					isHandTrackerHovered={isHandTrackerHovered}
					style={{
						paddingLeft: "2.5rem",
					}}
				/>
				<motion.h1
					style={{
						fontWeight: "300",
					}}
				>
          {t("translation.home.welcome")}
				</motion.h1>
				<motion.div className="section__name">
					<motion.p
						style={{
							alignSelf: "end",
							paddingBottom: "0.5rem",
							paddingRight: "0.5rem",
						}}
					>
						{t("translation.home.im")}
					</motion.p>
					<motion.h1
						style={{
							fontWeight: "normal",
							color: "#6F7FAC",
						}}
					>
						Anthonin
					</motion.h1>
				</motion.div>
				<motion.p className="section__quote">
					{t("translation.home.quote")}
				</motion.p>
			</motion.div>
			{/* <NavigationBar /> */}
			<FiArrowDown
				className="arrow"
				style={{
					position: "absolute",
					bottom: "2rem",
					left: "50%",
					transform: "translateX(-50%)",
					fontSize: "2rem",
					color: "#6F7FAC",
				}}
				size={30}
			/>
		</motion.section>
	)
}

export default Hero
