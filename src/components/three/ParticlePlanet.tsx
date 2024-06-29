import React, { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei" // Corrected to PointMaterial as you mentioned
import { BufferGeometry, Float32BufferAttribute, Vector3 } from "three"

const NUM_POINTS = 500 // Adjusted for performance
const RADIUS = 50 // Maximum distance of stars

// Function to convert equatorial coordinates to Cartesian coordinates
const equatorialToCartesian = (ra: number, dec: number, distance: number) => {
	const raRadians = (ra / 24) * 2 * Math.PI // Convert right ascension from hours to radians
	const decRadians = (dec / 360) * 2 * Math.PI // Convert declination from degrees to radians

	const x = distance * Math.cos(decRadians) * Math.cos(raRadians)
	const y = distance * Math.cos(decRadians) * Math.sin(raRadians)
	const z = distance * Math.sin(decRadians)

	return new Vector3(x, y, z)
}

// Example of use for generating points
const generateStars = (numStars: number, maxDistance: number) => {
	const positions = []
	const colors = []
	for (let i = 0; i < numStars; i++) {
		const ra = Math.random() * 24 // Random right ascension between 0 and 24 hours
		const dec = Math.random() * 180 - 90 // Random declination between -90° and +90°
		const distance = Math.random() * maxDistance

		const position = equatorialToCartesian(ra, dec, distance)
		positions.push(position.x, position.y, position.z)
		colors.push(1, 1, 1) // RGB for white
	}
	const geometry = new BufferGeometry()
	geometry.setAttribute("position", new Float32BufferAttribute(positions, 3))
	geometry.setAttribute("color", new Float32BufferAttribute(colors, 3))

	return geometry
}

// Main component
const ParticleGalaxy = () => {
	const [rotationSpeed, setRotationSpeed] = useState(0.003)
	const geometry = generateStars(NUM_POINTS, RADIUS)

	const ref = useRef(null)
	useFrame(() => {
		if (ref.current) {
			;(ref.current as any).rotation.y += rotationSpeed
		}
	})

	return (
		<group ref={ref}>
			<Points geometry={geometry}>
				<PointMaterial size={5} sizeAttenuation={true} vertexColors={true} />
			</Points>
			{/* <mesh>
				<boxGeometry args={[10, 10, 10]} />
				<meshStandardMaterial color={"orange"} />
			</mesh> */}
		</group>
	)
}

export default ParticleGalaxy
