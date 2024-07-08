import { motion, useMotionValue, useScroll } from "framer-motion"
import { useEffect, useRef } from "react"
import TechnoList from "../../components/container/degree/TechnoList"
import AndroidSVG from "../../components/svg/techno/AndroidSVG"
import AwsSVG from "../../components/svg/techno/AwsSVG"
import CssSVG from "../../components/svg/techno/CssSVG"
import DockerSVG from "../../components/svg/techno/DockerSVG"
import FigmaSVG from "../../components/svg/techno/FigmaSVG"
import HtmlSVG from "../../components/svg/techno/HtmlSVG"
import JavaSVG from "../../components/svg/techno/JavaSVG"
import MySQLSVG from "../../components/svg/techno/MySQLSVG"
import ReactSVG from "../../components/svg/techno/ReactSVG"
import SpringSVG from "../../components/svg/techno/SpringSVG"
import TypescriptSVG from "../../components/svg/techno/TypescriptSVG"
import AboutItem from "./AboutItem"

import "./about.scss"

const DevTechnoList = [
	{
		name: "HTML",
		icon: HtmlSVG,
	},
	{
		name: "CSS",
		icon: CssSVG,
	},
	{
		name: "Typescript",
		icon: TypescriptSVG,
	},
	{
		name: "Figma",
		icon: FigmaSVG,
	},
	{
		name: "React",
		icon: ReactSVG,
	},
	{
		name: "SQL",
		icon: MySQLSVG,
	},
	{
		name: "AWS",
		icon: AwsSVG,
	},
]

const CDATechnoList = [
	{
		name: "Java",
		icon: JavaSVG,
	},
	{
		name: "Figma",
		icon: FigmaSVG,
	},
	{
		name: "Spring",
		icon: SpringSVG,
	},
	{
		name: "Docker",
		icon: DockerSVG,
	},
	{
		name: "Android",
		icon: AndroidSVG,
	},
	{
		name: "SQL",
		icon: MySQLSVG,
	},
	{
		name: "AWS",
		icon: AwsSVG,
	},
]

const prototyperTechnoList = [
	{
		name: "React",
		icon: ReactSVG,
	},
	{
		name: "Typescript",
		icon: TypescriptSVG,
	},
	{
		name: "Figma",
		icon: FigmaSVG,
	},
	{
		name: "SQL",
		icon: MySQLSVG,
	},
	{
		name: "AWS",
		icon: AwsSVG,
	},
	{
		name: "Docker",
		icon: DockerSVG,
	},
]

type Props = {}

const About = (props: Props) => {
	const topRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress, scrollY } = useScroll({
		target: topRef,
	})
	const scrollV = useMotionValue(0)

	useEffect(() => {
		scrollYProgress.onChange((latest) => {
			scrollV.set(latest * 100)
			console.log(scrollV.get())
		})
	}, [scrollYProgress])

	return (
		<motion.section className="container about-container" ref={topRef}>
			<motion.h1
				style={{
					fontWeight: "normal",
				}}
			>
				About
			</motion.h1>

			<motion.div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					marginBottom: "10rem",
				}}
			>
				<motion.div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<motion.h3
						style={{
							fontWeight: "normal",
							opacity: 0.5,
						}}
					>
						Location
					</motion.h3>
					<motion.div
						style={{
							height: "1px",
							maxWidth: "100%",
							width: "100%",
							backgroundColor: "#6F7FAC",
						}}
					/>
					<motion.h3
						style={{
							fontWeight: "normal",
							flexShrink: 0,
						}}
					>
						Tours, France
					</motion.h3>
				</motion.div>

				<motion.div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<motion.h3
						style={{
							fontWeight: "normal",
							opacity: 0.5,
						}}
					>
						Experience
					</motion.h3>
					<motion.div
						style={{
							height: "1px",
							maxWidth: "100%",
							width: "100%",
							backgroundColor: "#6F7FAC",
						}}
					/>
					<motion.h3
						style={{
							fontWeight: "normal",
							flexShrink: 0,
						}}
					>
						3 years
					</motion.h3>
				</motion.div>

				<motion.div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<motion.h3
						style={{
							fontWeight: "normal",
							opacity: 0.5,
						}}
					>
						Hireable
					</motion.h3>
					<motion.div
						style={{
							height: "1px",
							maxWidth: "100%",
							width: "100%",
							backgroundColor: "#6F7FAC",
						}}
					/>
					<motion.h3
						style={{
							fontWeight: "normal",
							flexShrink: 0,
						}}
					>
						True
					</motion.h3>
				</motion.div>

				<motion.p
					style={{
						fontWeight: "normal",
						marginTop: "2rem",
					}}
				>
					From an old idea i had when i was young to a real passion, i've always
					been interested in the web and its technologies. I started to learn
					web development by myself and then i decided to follow a training to
					become a professional web developer. I'm now a fullstack developer and
					i'm always looking for new challenges and opportunities to learn new
					things.
				</motion.p>
				<motion.p
					style={{
						fontWeight: "normal",
					}}
				>
					I'm a self-taught drummer who loves to play mainly metal and I've been
					doing it for 4/5 years now. I play a lot of video game as well, mainly
					Team based games like Counter Strike or Valorant, I love challenging
					my self and push my limits.
				</motion.p>
			</motion.div>

			<motion.div>
				<motion.div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						width: "100%",
						marginBottom: "5rem",
					}}
				>
					<motion.h2
						style={{
							fontWeight: "normal",
							opacity: 0.5,
						}}
					>
						Work experience
					</motion.h2>
					<AboutItem
						date="2023 - 2024"
						technoList={prototyperTechnoList}
						title="CTO - Developer fullstack TypeScript"
						company="Startup Akrobate"
						description="I've developed a total of 4 SaaS during my time here. They all come with their own APIs on the backend, and for one of the for one of the SaaS, a mobile application and of course, i've learned a lot about the management of a project and the importance of the product owner."
					/>
					<AboutItem
						date="3 mo. - 2023"
						technoList={prototyperTechnoList}
						title="Developer fullstack TypeScript"
						company="Startup Prototyper"
						description="I worked on Perfect Post, a copywriting tool for LinkedIn, and	on the migration of a WordPress site to Webflow with a back-end	using Strapi."
					/>
					<motion.div
						style={{
							height: "1px",
							maxWidth: "100%",
							width: "100%",
							backgroundColor: "#6F7FAC",
						}}
					/>
				</motion.div>

				<motion.div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						width: "100%",
					}}
				>
					<motion.h2
						style={{
							fontWeight: "normal",
							opacity: 0.5,
						}}
					>
						Formation
					</motion.h2>
					<AboutItem
						date="2023 - 2024"
						technoList={CDATechnoList}
						title="Application designers and developers"
						company="CEFIM"
						description="During this training, I learn how to maintain and manage a
								project from A to Z, from the design to the deployment with tool
								for monitoring and testing. Docker, AWS, and Android
								development."
					/>
					<AboutItem
						date="2022 - 2023"
						technoList={DevTechnoList}
						title="Web developper and mobile"
						company="CEFIM"
						description="During this training, I learn web basic development like HTML,
								CSS, Javascript, React, PHP, SQL, and also how to use Figma for
								design."
					/>
					<motion.div
						style={{
							height: "1px",
							maxWidth: "100%",
							width: "100%",
							backgroundColor: "#6F7FAC",
						}}
					/>
				</motion.div>
			</motion.div>
		</motion.section>
	)
}

export default About
