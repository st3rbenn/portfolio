import React, { useState } from "react"
import { motion } from "framer-motion"
import Tooltip from "../../tooltip/Tooltip"

export type TechnoListItem = {
	name: string
	icon: (props: any) => JSX.Element
}

type Props = {
	technoList: TechnoListItem[]
}

const TechnoList = (props: Props) => {
	const { technoList } = props

	return (
		<motion.div
			style={{
				position: "relative",
				gap: ".5rem",
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				padding: "1rem",
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
