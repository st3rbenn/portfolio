import React from "react"
import { motion } from "framer-motion"
import TechnoList, {
	TechnoListItem,
} from "../../components/container/degree/TechnoList"

type Props = {
	technoList: TechnoListItem[]
	date: string
	title: string
	company: string
	description: string
}

const AboutItem = (props: Props) => {
	const { technoList, company, date, description, title } = props
	return (
		<>
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
					gap: "1rem",
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
							fontWeight: "lighter",
							opacity: 0.5,
							textAlign: "center",
						}}
					>
						{date}
					</motion.h3>
					<TechnoList technoList={technoList} />
				</motion.div>
				<motion.div>
					<motion.h3
						style={{
							fontWeight: "normal",
							flexShrink: 0,
						}}
					>
						{title}
					</motion.h3>
					<motion.p
						style={{
							opacity: 0.5,
						}}
					>
						{company}
					</motion.p>
					<motion.p
						style={{
							fontWeight: "normal",
							marginTop: "1rem",
						}}
					>
						{description}
					</motion.p>
				</motion.div>
			</motion.div>
		</>
	)
}

export default AboutItem
