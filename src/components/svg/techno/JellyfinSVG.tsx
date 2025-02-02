import React from "react"
import { motion } from "framer-motion"
type JellyfinSVGProps = {}

function JellyfinSVG(props: JellyfinSVGProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			aria-label="Jellyfin"
			role="img"
			viewBox="0 0 512 512"
			width="26px"
			height="26px"
			fill="#ffffff"
			stroke="#ffffff"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<rect width="512" height="512" rx="15%" fill="#ffffff"></rect>
				<defs>
					<path
						d="M190.56 329.07c8.63 17.3 122.4 17.12 130.93 0 8.52-17.1-47.9-119.78-65.46-119.8-17.57 0-74.1 102.5-65.47 119.8z"
						id="A"
					></path>
					<linearGradient
						id="B"
						gradientUnits="userSpaceOnUse"
						x1="126.15"
						y1="219.32"
						x2="457.68"
						y2="410.73"
					>
						<stop offset="0%" stopColor="#aa5cc3"></stop>
						<stop offset="100%" stopColor="#00a4dc"></stop>
					</linearGradient>
					<path
						d="M58.75 417.03c25.97 52.15 368.86 51.55 394.55 0S308.93 56.08 256.03 56.08c-52.92 0-223.25 308.8-197.28 360.95zm68.04-45.25c-17.02-34.17 94.6-236.5 129.26-236.5 34.67 0 146.1 202.7 129.26 236.5-16.83 33.8-241.5 34.17-258.52 0z"
						id="C"
					></path>
				</defs>
				<use xlinkHref="#A" fill="url(#B)"></use>
				<use
					xlinkHref="#A"
					fillOpacity="0"
					stroke="#000000"
					strokeOpacity="0"
				></use>
				<use xlinkHref="#C" fill="url(#B)"></use>
				<use
					xlinkHref="#C"
					fillOpacity="0"
					stroke="#000000"
					strokeOpacity="0"
				></use>
			</g>
		</svg>
	)
}

export default JellyfinSVG
