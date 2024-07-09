import React, { useRef } from "react"

type Props = {
	children: React.ReactNode | React.ReactNode[]
	tooltipText: string
	position?: "top" | "bottom" | "left" | "right"
	withArrow?: boolean
}

const Tooltip = (props: Props) => {
	const { children, position, tooltipText, withArrow } = props
	const tooltipRef = useRef<HTMLDivElement>(null)
	const childrenRef = useRef<HTMLDivElement>(null)

	const handleMouseEnter = () => {
		const tooltipElement = tooltipRef.current
		const childrenElement = childrenRef.current

		if (tooltipElement && childrenElement) {
			tooltipElement.style.display = "block"
			const childrenRect = childrenElement.getBoundingClientRect()
			const tooltipRect = tooltipElement.getBoundingClientRect()

			switch (position) {
				case "top":
					tooltipElement.style.top = `-${tooltipRect.height}px`
					tooltipElement.style.left = `${
						childrenRect.width / 2 - tooltipRect.width / 2
					}px`
					break
				case "bottom":
					tooltipElement.style.top = `${childrenRect.height}px`
					tooltipElement.style.left = `${
						childrenRect.width / 2 - tooltipRect.width / 2
					}px`
					break
				case "left":
					tooltipElement.style.top = `${
						childrenRect.height / 2 - tooltipRect.height / 2
					}px`
					tooltipElement.style.left = `-${tooltipRect.width}px`
					break
				case "right":
					tooltipElement.style.top = `${
						childrenRect.height / 2 - tooltipRect.height / 2
					}px`
					tooltipElement.style.left = `${childrenRect.width}px`
					break
				default:
					break
			}
		}
	}

	const handleMouseLeave = () => {
		const tooltipElement = tooltipRef.current
		if (tooltipElement) {
			tooltipElement.style.display = "none"
		}
	}
	return (
		<div
			style={{
				position: "relative",
				display: "inline-block",
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				style={{
					position: "absolute",
					backgroundColor: "#e5f0ff",
					color: "#000",
					padding: "0.5rem",
					borderRadius: "0.5rem",
					display: "none",
				}}
				ref={tooltipRef}
			>
				<p>{tooltipText}</p>
				{withArrow && (
					<div
						style={{
							position: "absolute",
							width: 0,
							height: 0,
							borderStyle: "solid",
							borderWidth: "0.5rem",
							borderColor: "transparent",
							borderBottomColor: "#e5f0ff",
							left: "50%",
							transform: "translateX(-50%) rotate(180deg)",
							bottom: "-0.9rem",
						}}
					/>
				)}
			</div>
			<div
				style={{
					display: "inline-block",
				}}
				ref={childrenRef}
			>
				{children}
			</div>
		</div>
	)
}

export default Tooltip
