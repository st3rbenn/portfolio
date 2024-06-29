import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ProjectContent from "./ProjectContent"
// import { FiArrowUpRight } from "react-icons/fi"

export const TextParallaxContentExample = () => {
	return (
		<div
			style={{
				marginTop: "200rem",
			}}
		>
			<motion.h1
				style={{
					fontSize: "5rem",
					fontWeight: "normal",
					textAlign: "center",
					marginBottom: "5rem",
				}}
			>
				Projects
			</motion.h1>
			<TextParallaxContent
				imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				subheading="Gratflix"
				heading="UI Implementation for Plex or Jellyfin"
			>
				<ProjectContent
					title="Gratflix"
					firstParagraph="Gratflix is a web application that allows you to browse your Plex or Jellyfin library and watch movies or series. The goal was to re create the famous Netflix UI with a Plex or Jellyfin backend. The project is made with React and TypeScript."
					secondParagraph="I did this project during my first year at CEFIM. We had to produce a project for the jury at the end of the year. I chose to do this project because I wanted to learn more about React and TypeScript. It enabled me to be one of the first in my class and to be congratulated by the jury. "
				/>
			</TextParallaxContent>
			<TextParallaxContent
				imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				subheading="BreakEmu"
				heading="Dofus emulator in TypeScript"
			>
				<ProjectContent
					title="BreakEmu"
					firstParagraph="BreakEmu is a Dofus emulator in TypeScript with a focus on performance and scalability. The goal was to create a Dofus emulator that can handle thousands of players. The project is made with TypeScript and Node.js with Redis. I made a PWA with React to manage the server, different tools for managing game files, features etc."
					secondParagraph="Why i have made this project ? I have made this project to learn more about the game server architecture and to create a server that can handle thousands of players. I have also made this project to learn more about TypeScript, Node.js and Redis ."
				/>
			</TextParallaxContent>
		</div>
	)
}

const IMG_PADDING = 200

const TextParallaxContent = ({
	imgUrl,
	subheading,
	heading,
	children,
}: any) => {
	return (
		<div
			style={{
				paddingLeft: IMG_PADDING,
				paddingRight: IMG_PADDING,
			}}
		>
			<div className="relative h-[150vh]">
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

	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

	return (
		<motion.div
			style={{
				backgroundImage: `url(${imgUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: `calc(100vh - ${IMG_PADDING * 2}px)`,
				top: IMG_PADDING,
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
			<p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
				{subheading}
			</p>
			<p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
		</motion.div>
	)
}
