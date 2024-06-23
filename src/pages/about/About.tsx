import React from "react"
import { motion } from "framer-motion"
import TypescriptSVG from "../../components/svg/techno/TypescriptSVG"
import GithubSVG from "../../components/svg/GithubSVG"

type Props = {}

const About = (props: Props) => {
	return (
		<motion.div style={{ marginTop: "20vh" }}>
			<motion.h2
				style={{
					fontWeight: "lighter",
					fontSize: "3rem",
					marginBottom: 0,
					marginTop: 0,
				}}
			>
				About me
			</motion.h2>

			<main
				style={{
					display: "grid",
					gap: "5rem",
					gridTemplateColumns: "1fr 1fr",
				}}
			>
				<motion.section
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
					}}
				>
					<motion.h3
						style={{
							fontWeight: "lighter",
							fontSize: "2rem",
							marginTop: 0,
							marginBottom: 0,
						}}
					>
						Who am I ?
					</motion.h3>
					<motion.p>
						From an old idea i had when i was young to a real passion, i've
						always been interested in the web and its technologies. I started to
						learn web development by myself and then i decided to follow a
						training to become a professional web developer. I'm now a fullstack
						developer and i'm always looking for new challenges and
						opportunities to learn new things.
					</motion.p>
					<motion.p>
						I also play drums from past 5 years and i'm a big fan of music. I
						learn to play drums by myself and i'm always looking for new songs
						to play. I'm a big fan of metal music and i'm always looking for new
						bands to listen to.
					</motion.p>
					<motion.h3
						style={{ fontWeight: "lighter", fontSize: "2rem", marginTop: 0 }}
					>
						My favorite stack ?
					</motion.h3>
				</motion.section>
				<motion.section>
					{/* <div
						style={{
							display: "grid",
							gap: "1rem",
							gridAutoFlow: "column",
						}}
					>
						<div
							style={{
								display: "flex",
								gap: "1rem",
								alignItems: "center",
							}}
						>
							<TypescriptSVG />
							<motion.div
								style={{
									width: "100%",
									height: "1.2rem",
									borderRadius: "5px",
									backgroundColor: "#6F7FAC",
									position: "relative",
									zIndex: -1,
								}}
							>
								<motion.div
									style={{
										width: "100%",
										height: "100%",
										position: "absolute",
										top: 0,
										left: 0,
										borderRadius: "5px",
										backgroundColor: "#D9A5B3",
										zIndex: 5,
									}}
									animate={{
										width: ["0%", "50%"],
										transition: {
											duration: 1,
											type: "spring",
										},
									}}
								/>
							</motion.div>
						</div>
						<div
							style={{
								display: "flex",
								gap: "1rem",
								alignItems: "center",
							}}
						>
							<GithubSVG />
							<motion.div
								style={{
									width: "100%",
									height: "1.2rem",
									borderRadius: "5px",
									backgroundColor: "#6F7FAC",
									position: "relative",
									zIndex: -1,
								}}
							>
								<motion.div
									style={{
										width: "100%",
										height: "100%",
										position: "absolute",
										top: 0,
										left: 0,
										borderRadius: "5px",
										backgroundColor: "#D9A5B3",
										zIndex: 5,
									}}
									animate={{
										width: ["0%", "50%"],
										transition: {
											duration: 1,
											type: "spring",
										},
									}}
								/>
							</motion.div>
						</div>
					</div> */}
				</motion.section>
			</main>
		</motion.div>
	)
}

export default About
