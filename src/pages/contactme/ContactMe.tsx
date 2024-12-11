import { motion } from "framer-motion"
import ContactForm from "./ContactForm"

import "./contact.scss"
import { useTranslation } from "react-i18next"

type Props = {}

const ContactMe = (props: Props) => {
  const {t} = useTranslation()
	return (
		<motion.section className="contact_container">
			<motion.div>
				<motion.h1
					style={{
						fontWeight: "normal",
						alignSelf: "center",
					}}
				>
					{t("translation.contact.title")}
				</motion.h1>
				<motion.p
					style={{
						fontWeight: "normal",
					}}
				>
					{t("translation.contact.description")}
				</motion.p>
			</motion.div>
			<ContactForm />
		</motion.section>
	)
}

export default ContactMe
