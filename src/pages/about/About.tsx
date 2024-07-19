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
import { useTranslation } from "react-i18next"
import NextSVG from "../../components/svg/techno/NextSVG"
import ReactNativeSVG from "../../components/svg/techno/ReactNativeSVG"
import GithubSVG from "../../components/svg/techno/GithubSVG"
import GitlabSVG from "../../components/svg/techno/GitlabSVG"

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
    name: "Github",
    icon: GithubSVG,
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
];

const akrobateTechnoList = [
	{
		name: "React Native",
		icon: ReactNativeSVG,
	},
  {
    name: "Gitlab",
    icon: GitlabSVG
  },
  {
    name: "Next JS",
    icon: NextSVG,
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
	const { t } = useTranslation()

	useEffect(() => {
		scrollYProgress.on("change", (latest) => {
			scrollV.set(latest * 100)
		})
	}, [scrollYProgress])

	return (
		<motion.section className="container about-container" ref={topRef}>
			<motion.h1
				style={{
					fontWeight: "normal",
				}}
			>
				{t("translation.about.title")}
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
						{t("translation.about.location")}
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
						{t("translation.about.experience")}
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
						2 {t("translation.about.years")}
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
						{t("translation.about.hireable")}
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
					{t("translation.about.firstParagraph")}
				</motion.p>
				<motion.p
					style={{
						fontWeight: "normal",
					}}
				>
					{t("translation.about.secondParagraph")}
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
						{t("translation.about.work.title")}
					</motion.h2>
					<AboutItem
						date="2023 - 2024"
						technoList={akrobateTechnoList}
						title="CTO - Developer fullstack TypeScript"
						company="Startup Akrobate"
						description={t("translation.about.work.akrobate.description")}
					/>
					<AboutItem
						date="3 mo. - 2023"
						technoList={prototyperTechnoList}
						title="Developer fullstack TypeScript"
						company="Startup Prototyper"
						description={t("translation.about.work.prototyper.description")}
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
						title={t("translation.about.formation.cda.title")}
						company="CEFIM"
						description={t("translation.about.formation.cda.description")}
					/>
					<AboutItem
						date="2022 - 2023"
						technoList={DevTechnoList}
						title={t("translation.about.formation.devweb.title")}
						company="CEFIM"
						description={t("translation.about.formation.devweb.description")}
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
