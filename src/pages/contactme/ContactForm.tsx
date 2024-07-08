import React, { useState } from "react"
import { motion } from "framer-motion"
type Props = {}

const ContactForm = (props: Props) => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(form)
	}

	return (
		<motion.form
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "end",
				justifyContent: "center",
				gap: "1rem",
				marginBottom: "5rem",
			}}
			onSubmit={handleSubmit}
		>
			<motion.div
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					gap: "1rem",
				}}
			>
				<motion.input
					type="text"
					name="name"
					placeholder="Name"
					value={form.name}
					onChange={handleChange}
				/>
				<motion.input
					type="email"
					name="email"
					placeholder="Email"
					value={form.email}
					onChange={handleChange}
				/>
			</motion.div>
			<motion.textarea
				name="message"
				placeholder="Message"
				value={form.message}
				onChange={handleChange}
			/>
			<motion.button type="submit" className="submit">
				Submit
			</motion.button>
		</motion.form>
	)
}

export default ContactForm
