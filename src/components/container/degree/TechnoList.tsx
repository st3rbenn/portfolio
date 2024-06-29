import React, { useState } from "react"
import { motion } from "framer-motion"

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

	return (
		<motion.div
			style={{
				position: "relative",
				gap: ".5rem",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        padding: "1rem",
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
