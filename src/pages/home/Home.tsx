import { motion } from "framer-motion"
import NavigationBar from "../../components/container/NavigationBar/NavigationBar"
import { HandLandmarks } from "../../components/cursor/CustomCursor"
import HeadAnimation from "../../components/handtracker/HeadAnimation"
import "./home.scss"

type HomeProps = {
	handLandmarks: HandLandmarks | undefined
	isHandTrackerHovered: boolean
}

const Home = (props: HomeProps) => {
	const { handLandmarks, isHandTrackerHovered } = props
	return (
		<motion.section className="container">
			<motion.div
				className="section"
				animate={{
					opacity: [0, 1],
					transition: {
						duration: 0.5,
					},
				}}
			>
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
					a french developer who like baking websites like a baker making is
					bread, with ♥️ and passion 🥖
				</motion.p>
			</motion.div>
			<NavigationBar />
		</motion.section>
	)
}

export default Home
