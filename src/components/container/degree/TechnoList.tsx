import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Tooltip from "../../tooltip/Tooltip"

export type TechnoListItem = {
	name: string
	icon: (props: any) => JSX.Element
}

type Props = {
	technoList: TechnoListItem[]
	noPadding?: boolean
	noGrid?: boolean
	style?: React.CSSProperties
}

const TechnoList = (props: Props) => {
	const { technoList, noPadding, noGrid, style } = props

	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth)
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	const column = screenWidth > 1000 ? 4 : screenWidth > 600 ? 3 : 2

	return (
		<motion.div
			style={{
				...style,
				position: "relative",
				gap: ".5rem",
				display: noGrid ? "flex" : "grid",
				flexWrap: "wrap",
				gridTemplateColumns: `repeat(${column}, 1fr)`,
				padding: noPadding ? "0" : "1rem",
			}}
		>
			{technoList.map((techno, index) => (
				<Tooltip
					key={index}
					children={<techno.icon />}
					tooltipText={techno.name}
					withArrow
					position="top"
				/>
			))}
		</motion.div>
	)
}

export default TechnoList
