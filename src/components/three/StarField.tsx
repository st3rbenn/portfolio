import { useFrame, useThree } from "@react-three/fiber"
import { useScroll } from "framer-motion"
import gsap from "gsap"
import { RefObject, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { fragmentShader, generateStars, vertexShader } from "./utils"

type StarFieldProps = {
	globalRef: RefObject<HTMLDivElement>
}

const StarField = (props: StarFieldProps) => {
	const meshRef = useRef<THREE.Points>(null!)
	const { scene, camera, gl } = useThree()
	const { scrollYProgress } = useScroll()
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [windowHeight, setWindowHeight] = useState(window.innerHeight)

	useEffect(() => {
		let geometry: THREE.BufferGeometry

		if (windowWidth < 768) {
			geometry = generateStars(25000, 1000)
		} else {
			geometry = generateStars(50000, 10000)
		}

		const material = new THREE.ShaderMaterial({
			uniforms: {
				color: { value: new THREE.Color(0xffffff) },
				opacity: { value: 1 },
				time: { value: 0 },
				resolution: {
					value: new THREE.Vector2(windowWidth, windowHeight),
				}, // Ajout de la résolution comme uniform
			},
			vertexShader,
			fragmentShader,
			blending: THREE.AdditiveBlending,
			depthTest: false,
			transparent: true,
		})
		const p = new THREE.Points(geometry, material)
		p.castShadow = true

		meshRef.current = p
		scene.add(meshRef.current)

		gsap.fromTo(
			meshRef.current.material,
			{
				duration: 1,
				size: 0.5,
				ease: "power2.inOut",
			},
			{
				size: 1,
			}
		)

		const CAMERA_POSITION = windowWidth < 768 ? 200 : 1000
		const CAMERA_ZOOM = windowWidth < 768 ? 50 : 200

		camera.position.z = CAMERA_POSITION

		// Camera zoom animation
		gsap.to(camera.position, {
			duration: 2.5,
			z: CAMERA_ZOOM,
			ease: "power2.inOut",
		})
		//smooth rotate using gsap
		gsap.to(meshRef.current.rotation, {
			duration: 2.5,
			x: 0.5,
			z: 0.5,
			ease: "power2.inOut",
		})

		setTimeout(() => {
			document.body.style.overflow = "auto"
		}, 2400)

		// Cleanup on unmount
		return () => {
			if (meshRef.current) {
				scene.remove(meshRef.current)
				geometry.dispose()
				material.dispose()
			}
		}
	}, [scene, camera])

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.0002 // Rotation for animation
		}

		const scrollY = Math.round(scrollYProgress.get() * 100)
		if (scrollY > 10 && scrollY < 20) {
			if (windowWidth < 768) {
				const zoom = THREE.MathUtils.lerp(0, 500, scrollYProgress.get())
				camera.position.z = zoom
			} else {
				const zoom = THREE.MathUtils.lerp(0, 2000, scrollYProgress.get())
				camera.position.z = zoom
			}
		}
	})

	return null
}

export default StarField
