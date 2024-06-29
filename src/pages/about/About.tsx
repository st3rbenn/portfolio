import React, { useEffect, useRef } from "react"
import {
	motion,
	useAnimation,
	useInView,
	useScroll,
	useTransform,
} from "framer-motion"
import GithubSVG from "../../components/svg/GithubSVG"
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
import { DegreeItemProps } from "../../components/container/degree/DegreeItem"

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
	const firstSectionRef = useRef<HTMLDivElement>(null)
	const controls = useAnimation()
	const { scrollYProgress } = useScroll({
		target: topRef,
		offset: ["end end", "end start"],
	})

	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "fixed" : "relative"
  })

	return (
		<motion.section
			ref={topRef}
			className="container"
			style={{
				width: "50%",
				margin: "0 auto",
				marginBottom: "5rem",
				position: "relative",
				marginTop: "15rem",
			}}
		>
			<motion.h1
				style={{
					fontSize: "5rem",
					fontWeight: "normal",
				}}
				className="sticky top-20 z-10"
			>
				About
			</motion.h1>

			<motion.div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					marginBottom: "10rem",
          opacity
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
							fontSize: "1.3rem",
							fontWeight: "lighter",
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
							fontSize: "1.5rem",
							fontWeight: "lighter",
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
							fontSize: "1.3rem",
							fontWeight: "lighter",
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
							fontSize: "1.5rem",
							fontWeight: "lighter",
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
							fontSize: "1.3rem",
							fontWeight: "lighter",
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
							fontSize: "1.5rem",
							fontWeight: "lighter",
							flexShrink: 0,
						}}
					>
						True
					</motion.h3>
				</motion.div>

				<motion.p
					style={{
						fontWeight: "normal",
						fontSize: "1.5rem",
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
					<motion.div
						style={{
							height: "1px",
							maxWidth: "100%",
							width: "100%",
							backgroundColor: "#6F7FAC",
						}}
					/>
					<motion.div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "5rem",
						}}
					>
						<motion.div
							style={{
								flexShrink: 0,
								alignSelf: "start",
							}}
						>
							<motion.h3
								style={{
									fontSize: "1.7rem",
									fontWeight: "lighter",
									opacity: 0.5,
								}}
							>
								2023 - 2024
							</motion.h3>
							<TechnoList technoList={prototyperTechnoList} />
						</motion.div>
						<motion.div>
							<motion.h3
								style={{
									fontSize: "1.5rem",
									fontWeight: "normal",
									flexShrink: 0,
								}}
							>
								CTO - Developer fullstack TypeScript
							</motion.h3>
							<motion.p
								style={{
									opacity: 0.5,
									marginBottom: "1rem",
								}}
							>
								Startup Akrobate
							</motion.p>
							<motion.p>
								I've developed a total of 4 SaaS during my time here. They all
								come with their own APIs on the backend, and for one of the for
								one of the SaaS, a mobile application and of course, i've
								learned a lot about the management of a project and the
								importance of the product owner.
							</motion.p>
						</motion.div>
					</motion.div>
					<motion.div
						style={{
							height: "1px",
							maxWidth: "100%",
							width: "100%",
							backgroundColor: "#6F7FAC",
						}}
					/>
					<motion.div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "5rem",
						}}
					>
						<motion.div
							style={{
								flexShrink: 0,
								alignSelf: "start",
							}}
						>
							<motion.h3
								style={{
									fontSize: "1.7rem",
									fontWeight: "lighter",
									opacity: 0.5,
								}}
							>
								3 mo. - 2023
							</motion.h3>
							<TechnoList technoList={prototyperTechnoList} />
						</motion.div>
						<motion.div>
							<motion.h3
								style={{
									fontSize: "1.5rem",
									fontWeight: "normal",
									flexShrink: 0,
								}}
							>
								Developer fullstack TypeScript
							</motion.h3>
							<motion.p
								style={{
									opacity: 0.5,
									marginBottom: "1rem",
								}}
							>
								Startup Prototyper
							</motion.p>
							<motion.p>
								I worked on Perfect Post, a copywriting tool for LinkedIn, and
								on the migration of a WordPress site to Webflow with a back-end
								using Strapi.
							</motion.p>
						</motion.div>
					</motion.div>
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
					<motion.div
						style={{
							height: "1px",
							maxWidth: "100%",
							width: "100%",
							backgroundColor: "#6F7FAC",
						}}
					/>
					<motion.div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "5rem",
						}}
					>
						<motion.div
							style={{
								flexShrink: 0,
								alignSelf: "start",
							}}
						>
							<motion.h3
								style={{
									fontSize: "1.7rem",
									fontWeight: "lighter",
									opacity: 0.5,
								}}
							>
								2023 - 2024
							</motion.h3>
							<TechnoList technoList={CDATechnoList} />
						</motion.div>
						<motion.div>
							<motion.h3
								style={{
									fontSize: "1.5rem",
									fontWeight: "normal",
									flexShrink: 0,
								}}
							>
								Application designers and developers
							</motion.h3>
							<motion.p
								style={{
									opacity: 0.5,
									marginBottom: "1rem",
								}}
							>
								Cefim
							</motion.p>
							<motion.p>
								During this training, I learn how to maintain and manage a
								project from A to Z, from the design to the deployment with tool
								for monitoring and testing. Docker, AWS, and Android
								development.
							</motion.p>
						</motion.div>
					</motion.div>
					<motion.div
						style={{
							height: "1px",
							maxWidth: "100%",
							width: "100%",
							backgroundColor: "#6F7FAC",
						}}
					/>
					<motion.div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "5rem",
						}}
					>
						<motion.div
							style={{
								flexShrink: 0,
								alignSelf: "start",
							}}
						>
							<motion.h3
								style={{
									fontSize: "1.7rem",
									fontWeight: "lighter",
									opacity: 0.5,
								}}
							>
								2022 - 2023
							</motion.h3>
							<TechnoList technoList={DevTechnoList} />
						</motion.div>
						<motion.div>
							<motion.h3
								style={{
									fontSize: "1.5rem",
									fontWeight: "normal",
									flexShrink: 0,
								}}
							>
								Web developper and mobile
							</motion.h3>
							<motion.p
								style={{
									opacity: 0.5,
									marginBottom: "1rem",
								}}
							>
								Cefim
							</motion.p>
							<motion.p>
								During this training, I learn web basic development like HTML,
								CSS, Javascript, React, PHP, SQL, and also how to use Figma for
								design.
							</motion.p>
						</motion.div>
					</motion.div>
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
