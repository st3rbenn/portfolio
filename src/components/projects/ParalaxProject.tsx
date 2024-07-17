import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import ProjectContent from "./ProjectContent"
import { TechnoListItem } from "../container/degree/TechnoList"
import ReactSVG from "../svg/techno/ReactSVG"
import TypescriptSVG from "../svg/techno/TypescriptSVG"
import GithubSVG from "../svg/techno/GithubSVG"
import AwsSVG from "../svg/techno/AwsSVG"
import PlexSVG from "../svg/techno/PlexSVG"
import JellyfinSVG from "../svg/techno/JellyfinSVG"
import ReduxSVG from "../svg/techno/ReduxSVG"
import DockerSVG from "../svg/techno/DockerSVG"
import RedisSVG from "../svg/techno/RedisSVG"
import BashSVG from "../svg/techno/BashSVG"
import { useTranslation } from "react-i18next"

const GratflixTechnoList: TechnoListItem[] = [
	{
		name: "React",
		icon: ReactSVG,
	},
	{
		name: "Typescript",
		icon: TypescriptSVG,
	},
	{
		name: "Github",
		icon: GithubSVG,
	},
	{
		name: "Plex",
		icon: PlexSVG,
	},
	{
		name: "Jellyfin",
		icon: JellyfinSVG,
	},
	{
		name: "AWS",
		icon: AwsSVG,
	},
	{
		name: "Redux",
		icon: ReduxSVG,
	},
]

const BreakEmuTechnoList: TechnoListItem[] = [
	{
		name: "Typescript",
		icon: TypescriptSVG,
	},
	{
		name: "Github",
		icon: GithubSVG,
	},
	{
		name: "AWS",
		icon: AwsSVG,
	},
	{
		name: "Redis",
		icon: RedisSVG,
	},
	{
		name: "Docker",
		icon: DockerSVG,
	},
	{
		name: "Bash",
		icon: BashSVG,
	},
]

export const ParallaxProject = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const { t } = useTranslation()

	return (
		<div
			style={{
				marginTop: "100rem",
			}}
			ref={ref}
		>
			<motion.h1
				style={{
					fontWeight: "normal",
					textAlign: "center",
					marginBottom: "5rem",
				}}
			>
				{t("translation.project.title")}
			</motion.h1>
			<TextParallaxContent
				imgUrl="https://i.postimg.cc/T1JD5j5d/Capture-d-e-cran-2024-06-29-a-14-32-44.png"
				subheading="Gratflix"
				heading={t("translation.project.gratflix.title")}
			>
				<ProjectContent
					title="Gratflix"
					firstParagraph={t("translation.project.gratflix.firstParagraph")}
					secondParagraph={t("translation.project.gratflix.secondParagraph")}
					technoList={GratflixTechnoList}
					githubLink="https://github.com/st3rbenn/Gratflix-web"
					demoLink=""
				/>
			</TextParallaxContent>
			<TextParallaxContent
				imgUrl="https://i.postimg.cc/CMWttJ9B/Capture-d-e-cran-2024-01-05-a-23-46-21.png"
				subheading="BreakEmu"
				heading={t("translation.project.breakemu.title")}
			>
				<ProjectContent
					title="BreakEmu"
					firstParagraph={t("translation.project.breakemu.firstParagraph")}
					secondParagraph={t("translation.project.breakemu.secondParagraph")}
					technoList={BreakEmuTechnoList}
					githubLink="https://github.com/st3rbenn/BreakEmu-2.69"
					demoLink=""
				/>
			</TextParallaxContent>
		</div>
	)
}

const TextParallaxContent = ({
	imgUrl,
	subheading,
	heading,
	children,
}: any) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth)
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return (
		<div
			style={{
				paddingRight: screenWidth > 1000 ? 200 : 25,
				paddingLeft: screenWidth > 1000 ? 200 : 25,
			}}
		>
			<div className={`relative h-[150vh]`}>
				<StickyImage imgUrl={imgUrl} />
				<OverlayCopy heading={heading} subheading={subheading} />
			</div>
			{children}
		</div>
	)
}

const StickyImage = ({ imgUrl }: any) => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["end end", "end start"],
	})
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth)
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])
	const IMG_PADDING = screenWidth > 1000 ? 200 : 25
	const IMG_PADDING_MULTIPLIER = screenWidth > 1000 ? 2 : 20
	const IMG_HEIGHT = `calc(100vh - ${IMG_PADDING * IMG_PADDING_MULTIPLIER}px)`
	const IMG_TOP = window.innerWidth > 1000 ? IMG_PADDING : IMG_PADDING * 10

	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

	return (
		<motion.div
			style={{
				backgroundImage: `url(${imgUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: IMG_HEIGHT,
				top: IMG_TOP,
				scale,
			}}
			ref={targetRef}
			className="sticky z-0 overflow-hidden rounded-3xl"
		>
			<motion.div
				className="absolute inset-0 bg-neutral-950/70"
				style={{
					opacity,
				}}
			/>
		</motion.div>
	)
}

const OverlayCopy = ({ subheading, heading }: any) => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	})

	const y = useTransform(scrollYProgress, [0, 1], [250, -250])
	const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

	return (
		<motion.div
			style={{
				y,
				opacity,
			}}
			ref={targetRef}
			className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
		>
			<motion.p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
				{subheading}
			</motion.p>
			<motion.p className="text-center text-4xl font-bold md:text-7xl">
				{heading}
			</motion.p>
		</motion.div>
	)
}
