import { motion } from "framer-motion"
import ContactForm from "./ContactForm"

import "./contact.scss"

type Props = {}

const ContactMe = (props: Props) => {
	return (
		<motion.section className="contact_container">
			<motion.div>
				<motion.h1
					style={{
						fontWeight: "normal",
						alignSelf: "center",
					}}
				>
					Let's talk
				</motion.h1>
				<motion.p
					style={{
						fontWeight: "normal",
					}}
				>
					Feel free to contact me any time for any questions or inquiries. I'm
					always open to new opportunities and collaborations and i'm currently
					looking for a job as a web developer.
				</motion.p>
			</motion.div>
			<ContactForm />
		</motion.section>
	)
}

export default ContactMe
