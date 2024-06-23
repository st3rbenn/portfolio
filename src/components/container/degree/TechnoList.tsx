import React, { useState } from "react"
import { motion } from "framer-motion"
import { Tooltip } from "@mantine/core"

export type TechnoListItem = {
	name: string
	icon: (props: any) => JSX.Element
}

type Props = {
	technoList: TechnoListItem[]
}

const TechnoList = (props: Props) => {
	const { technoList } = props
	const [open, setOpen] = useState(false)

	console.log(open)

	return (
		<motion.div
			style={{
				position: "relative",
				display: "flex",
				gap: ".5rem",
				flexGrow: 1,
			}}
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			{technoList.map((techno, index) => (
				<motion.div
					style={{
						display: "flex",
						alignItems: "center",
						gap: ".5rem",
					}}
          key={index}
				>
					<techno.icon />
				</motion.div>
			))}
		</motion.div>
	)
}

export default TechnoList
