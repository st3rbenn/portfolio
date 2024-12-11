import { motion } from "framer-motion"
import { TechnoListItem } from "./TechnoList"

export type DegreeItemProps = {
	title: string
	link: string
	linkTitle: string
	date: string
	technoList: TechnoListItem[]
	mentions: string[]
	gridArea?: string
	description: string
}

const DegreeItem = (props: DegreeItemProps) => {
	const { title, link, linkTitle, date, technoList, mentions } = props
	const fadeVariants = {
		active: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},

		inactive: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			variants={fadeVariants}
			animate="active"
			style={{}}
		>
			<motion.h2
				style={{
					fontSize: "1.7rem",
				}}
			>
				{title}
			</motion.h2>
			{/* <motion.div
				style={{
					display: "flex",
					gap: ".5rem",
				}}
			>
				<motion.div
					style={{
						display: "flex",
						alignItems: "center",
						gap: ".5rem",
					}}
				>
					<motion.p
						style={{
							fontSize: ".8rem",
						}}
					>
						{date}
					</motion.p>
					{link.length > 1 ? (
						<CustomLink
							link={link}
							external
							style={{
								textDecoration: "underline",
							}}
						>
							<motion.span
								style={{
									fontSize: ".8rem",
									fontWeight: "bold",
								}}
							>
								{linkTitle}
							</motion.span>
						</CustomLink>
					) : (
						<motion.span
							style={{
								fontSize: ".8rem",
								fontWeight: "bold",
							}}
						>
							{linkTitle}
						</motion.span>
					)}
				</motion.div>
				<TechnoList technoList={technoList} />
			</motion.div> */}
			{/* <div>
				<motion.p
					style={{
						marginTop: ".5rem",
						width: "80%",
					}}
				>
					{props.description}
				</motion.p>
				<motion.div
					style={{
						display: "flex",
						gap: ".5rem",
						flexWrap: "wrap",
						marginTop: ".5rem",
					}}
				>
					{mentions.map((mention) => (
						<motion.div
							style={{
								padding: ".2rem .5rem .2rem .5rem",
								borderRadius: "1rem",
								border: "1px solid #1f611f",
							}}
							key={mention}
						>
							<motion.p
								style={{
									margin: "0",
									fontSize: ".7rem",
								}}
							>
								{mention}
							</motion.p>
						</motion.div>
					))}
				</motion.div>
			</div> */}
		</motion.div>
	)
}

export default DegreeItem
