import { ErrorMessage, Field } from "formik"

type Props = {
	type: string
	name: string
	label: string
	as?: string
}

const FormField = (props: Props) => {
	const { type, name, label, as } = props
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				gap: "0.5rem",
			}}
		>
			<label htmlFor={name}>
				{label}
				<span
					style={{
						color: "red",
            marginLeft: "0.3rem",
					}}
				>
					*
				</span>
			</label>
			<Field as={as} type={as ? "text" : type} name={name} />
			<ErrorMessage name={name} component="div" />
		</div>
	)
}

export default FormField
