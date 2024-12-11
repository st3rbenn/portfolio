import React, { useState } from "react"
import { motion } from "framer-motion"
import { Formik, Form, Field, ErrorMessage, FormikConfig } from "formik"
import FormField from "../../components/form/FormField"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next"

type Props = {}

type Form = {
	name: string
	email: string
	message: string
}

emailjs.init({
	publicKey: process.env.REACT_APP_EMAIL_JS_PROVIDER_KEY,
})

const ContactForm = (props: Props) => {
	const { t } = useTranslation()
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

	const handleSubmit = async (
		values: Form,
		setSubmitting: (isSubmitting: boolean) => void
	) => {
		const emailResp = await emailjs.send(
			process.env.REACT_APP_EMAIL_JS_SERVICE_ID as string,
			process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID as string,
			{
				name: values.name,
				message: values.message,
				from: values.email,
			}
		)

		if (emailResp.status !== 200) {
			console.error("Error sending email")
		}

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
						<FormField
							type="text"
							name="name"
							label={t("translation.contact.form.name")}
						/>
						<FormField type="email" name="email" label={t("translation.contact.form.email")} />
					</div>
					<FormField as="textarea" type="" name="message" label={t("translation.contact.form.message")} />
					<motion.button
						type="submit"
						className="submit"
						style={{
							alignSelf: "end",
						}}
						disabled={isSubmitting}
					>
						{t("translation.contact.form.send")}
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
