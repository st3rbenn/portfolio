import {
  motion,
  MotionValue,
  useTransform
} from "framer-motion"
import { RefObject } from "react"
import {
  DegreeItemProps,
} from "../../components/container/degree/DegreeItem"
import Hero from "../../components/container/hero/Hero"
import { HandLandmarks } from "../../components/cursor/CustomCursor"
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
import About from "../about/About"
import "./home.scss"
import { TextParallaxContentExample } from "../../components/projects/ParalaxTestComponent"

type HomeProps = {
	handLandmarks: HandLandmarks | undefined
	isHandTrackerHovered: boolean
	globalRef: RefObject<HTMLDivElement>
}

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

const DEGREE_LIST = [
	{
		title: "CTO - Developer fullstack TypeScript/React",
		link: "",
		linkTitle: "Start-up Akrobate",
		date: "2023 - 2024",
		technoList: prototyperTechnoList,
		mentions: [
			"scrum & agile",
			"full remote",
			"design thinking & sprint",
			"product owner",
			"integration of payment solutions",
			"code review",
		],
		description:
			"I've developed a total of 4 SaaS during my time here. They all come with their own APIs on the backend, and for one of the for one of the SaaS, a mobile application.",
	},
	{
		title: "Application designers and developers",
		link:
			"https://www.cefim.eu/formations/formation-concepteur-developpeur-dapplications/",
		linkTitle: "CEFIM",
		date: "2023 - 2024",
		technoList: CDATechnoList,
		mentions: ["Jury's encouragement ", "SQL instructor congratulation"],
		description:
			"During this training, I learn how to maintain and manage a project from A to Z, from the design to the deployment with tool for monitoring and testing. Docker, AWS, and Android development.",
	},
	{
		title: "Developer fullstack TypeScript/React",
		link: "",
		linkTitle: "Start-up Prototyper",
		date: "3 months - 2023",
		technoList: prototyperTechnoList,
		mentions: [
			"scrum & agile",
			"full remote",
			"design thinking & sprint",
			"code review",
		],
		description:
			"I worked on Perfect Post, a copywriting tool for LinkedIn, and on the migration of a WordPress site to Webflow with a back-end using Strapi.",
	},
	{
		title: "Web developper and mobile",
		link: "https://www.cefim.eu/formations/formation-developpeur-web/",
		linkTitle: "CEFIM",
		date: "2022 - 2023",
		technoList: DevTechnoList,
		mentions: [
			"Jury's felicitation for best project ",
			"Javascript/React instructor congratulation",
		],
		description:
			"During this training, I learn web basic development like HTML, CSS, Javascript, React, PHP, SQL, and also how to use Figma for design.",
	},
] as DegreeItemProps[]

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance])
}

const Home = (props: HomeProps) => {
	const { handLandmarks, isHandTrackerHovered, globalRef } = props

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
			style={{
				paddingLeft: "5rem",
				paddingRight: "5rem",
				position: "relative",
			}}
		>
			<Hero
				handLandmarks={handLandmarks}
				isHandTrackerHovered={isHandTrackerHovered}
			/>
      <TextParallaxContentExample />
			<About />
		</motion.main>
	)
}

export default Home
