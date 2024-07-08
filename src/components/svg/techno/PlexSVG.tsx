import React from "react"

type Props = {}

const PlexSVG = (props: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="26"
			height="26"
			viewBox="0 0 26 26"
		>
			<defs>
				<radialGradient
					id="A"
					cx="1244.322"
					cy="919.871"
					r=".925"
					gradientTransform="matrix(30.05255 0 0 -49.2911 -37348.37 45373.334)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#f9be03" />
					<stop offset="1" stopColor="#cc7c19" />
				</radialGradient>
			</defs>
			<path
				d="M26 21.45C26 23.969 23.969 26 21.45 26H4.55C2.031 26 0 23.969 0 21.45V4.55C0 2.031 2.031 0 4.55 0h16.9C23.969 0 26 2.031 26 4.55z"
				fill="#494949"
			/>
			<path
				d="M8.078 2.988h5.804L20.287 13 13.882 23.012H8.078L14.483 13z"
				fill="url(#A)"
			/>
		</svg>
	)
}

export default PlexSVG
