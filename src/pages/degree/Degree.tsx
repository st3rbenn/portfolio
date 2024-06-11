import React from "react"
import { motion } from "framer-motion"
import CustomLink from "../../components/common/Customlink"
type Props = {}

const Degree = (props: Props) => {
	return (
		<div>
			<motion.h2
				style={{
					marginTop: "25vh",
					fontWeight: "lighter",
					fontSize: "3rem",
				}}
			>
				Graduation
			</motion.h2>

			<motion.section
				style={{
					display: "flex",
					alignItems: "end",
					flexDirection: "column",
				}}
			>
				<motion.div
					style={{
						display: "flex",
						alignItems: "end",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "1rem",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: ".5rem",
							}}
						>
							<CustomLink
								link="https://CEFIM.eu/"
								style={{
									fontSize: ".8rem",
									fontWeight: "bold",
								}}
								external
								whileHoverAnim
							>
								CEFIM
							</CustomLink>
							<p
								style={{
									fontSize: "1.5rem",
									margin: "0",
								}}
							>
								/
							</p>
							<p>2023 - 2024</p>
						</div>
						<motion.h2>Application designers and developers</motion.h2>
					</div>
					{/* <motion.p>
						During my baccalaureate studies, I had the opportunity to work on
						the electrical panels of industrial machines, including the
						development of automatic control systems.
					</motion.p> */}
				</motion.div>
				<motion.div
					style={{
						display: "flex",
						alignItems: "end",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "1rem",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: ".5rem",
							}}
						>
							<CustomLink
								link="https://CEFIM.eu/"
								style={{
									fontSize: ".8rem",
									fontWeight: "bold",
								}}
								external
								whileHoverAnim
							>
								CEFIM
							</CustomLink>
							<p
								style={{
									fontSize: "1.5rem",
									margin: "0",
								}}
							>
								/
							</p>
							<p
								style={{
									fontSize: ".8rem",
								}}
							>
								2022
							</p>
						</div>
						<motion.h2>Application designers and developers</motion.h2>
					</div>
					{/* <motion.p style={{
            width: "50%",
          }}>
						During my baccalaureate studies, I had the opportunity to work on
						the electrical panels of industrial machines, including the
						development of automatic control systems.
					</motion.p> */}
				</motion.div>
				<motion.div
					style={{
						display: "flex",
						alignItems: "end",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "1rem",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: ".5rem",
							}}
						>
							<CustomLink link="">College</CustomLink>
							<p
								style={{
									fontSize: "1.5rem",
									margin: "0",
								}}
							>
								/
							</p>
							<p>2020</p>
						</div>
						<motion.h2>
							Bachelor's degree in electrical engineering and related fields
						</motion.h2>
					</div>
					{/* <motion.p>
						During my baccalaureate studies, I had the opportunity to work on
						the electrical panels of industrial machines, including the
						development of automatic control systems.
					</motion.p> */}
				</motion.div>
			</motion.section>
		</div>
	)
}

export default Degree
