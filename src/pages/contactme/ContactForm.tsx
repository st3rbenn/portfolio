import React, { useState } from "react"
import { motion } from "framer-motion"
import { Formik, Form, Field, ErrorMessage, FormikConfig } from "formik"
import FormField from "../../components/form/FormField"

type Props = {}

type Form = {
	name: string
	email: string
	message: string
}

const ContactForm = (props: Props) => {
	const initialValues = {
		name: "",
		email: "",
		message: "",
	} as Form

	const validateSchema = (values: Form) => {
		const errors = {} as Form
		if (!values.name) {
			errors.name = "Required"
		}

		if (!values.email) {
			errors.email = "Required"
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = "Invalid email address"
		}

		if (!values.message) {
			errors.message = "Required"
		}

		return errors
	}

	// const handleChange = (
	// 	e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	// ) => {
	// 	setForm({
	// 		...form,
	// 		[e.target.name]: e.target.value,
	// 	})
	// }

	const handleSubmit = (
		values: Form,
		setSubmitting: (isSubmitting: boolean) => void
	) => {
		console.log(values)

		setSubmitting(false)
	}

	return (
		<Formik
			onSubmit={(v, { setSubmitting }) => handleSubmit(v, setSubmitting)}
			initialValues={initialValues}
			validate={validateSchema}
		>
			{({ isSubmitting }) => (
				<Form
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						gap: "1rem",
						marginBottom: "5rem",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							width: "100%",
							gap: "1rem",
						}}
					>
						<FormField type="text" name="name" label="name" />
						<FormField type="email" name="email" label="email" />
					</div>
					<FormField as="textarea" type="" name="message" label="message" />
					<motion.button
						type="submit"
						className="submit"
						style={{
							alignSelf: "end",
						}}
            disabled={isSubmitting}
					>
						Submit
					</motion.button>
				</Form>
			)}
		</Formik>
		// <motion.form
		// 	style={{
		// 		display: "flex",
		// 		flexDirection: "column",
		// 		alignItems: "end",
		// 		justifyContent: "center",
		// 		gap: "1rem",
		// 		marginBottom: "5rem",
		// 	}}
		// 	onSubmit={handleSubmit}
		// >
		// 	<motion.div
		// 		style={{
		// 			display: "flex",
		// 			flexDirection: "row",
		// 			width: "100%",
		// 			gap: "1rem",
		// 		}}
		// 	>
		// 		<motion.input
		// 			type="text"
		// 			name="name"
		// 			placeholder="Name"
		// 			value={form.name}
		// 			onChange={handleChange}
		// 		/>
		// 		<motion.input
		// 			type="email"
		// 			name="email"
		// 			placeholder="Email"
		// 			value={form.email}
		// 			onChange={handleChange}
		// 		/>
		// 	</motion.div>
		// 	<motion.textarea
		// 		name="message"
		// 		placeholder="Message"
		// 		value={form.message}
		// 		onChange={handleChange}
		// 	/>
		// 	<motion.button type="submit" className="submit">
		// 		Submit
		// 	</motion.button>
		// </motion.form>
	)
}

export default ContactForm
