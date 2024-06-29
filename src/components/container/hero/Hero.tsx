import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { HandLandmarks } from "../../cursor/CustomCursor"
import HeadAnimation from "../../handtracker/HeadAnimation"

type Props = {
	handLandmarks: HandLandmarks | undefined
	isHandTrackerHovered: boolean
}

const Hero = (props: Props) => {
	const { handLandmarks, isHandTrackerHovered } = props
	const homeRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: homeRef,
		offset: ["end end", "end start"],
	})

	const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
	const scaleOut = useTransform(scrollYProgress, [0, 0.7], [1, 0.7])
	return (
		<motion.section
			className="container"
			ref={homeRef}
			style={{
				opacity,
				scale: scaleOut,
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				height: "100vh",
        marginLeft: "auto",
        marginRight: "auto",
			}}
		>
			<motion.div className="section">
				<HeadAnimation
					handLandmarks={handLandmarks}
					isHandTrackerHovered={isHandTrackerHovered}
					style={{
						paddingLeft: "2.5rem",
					}}
				/>
				<motion.h1>Welcome !</motion.h1>
				<motion.div className="section__name">
					<motion.p
						style={{
							alignSelf: "end",
							paddingBottom: "0.5rem",
							paddingRight: "0.5rem",
						}}
					>
						i'm
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
					a junior french developer who like baking websites like a baker making
					is bread with ♥️ and passion
				</motion.p>
			</motion.div>
			{/* <NavigationBar /> */}
		</motion.section>
	)
}

export default Hero
