import React, { useRef, useEffect, RefObject } from "react"
import * as THREE from "three"
import { useThree, useFrame } from "@react-three/fiber"
import gsap from "gsap"
import { generateStars, vertexShader, fragmentShader } from "./utils"
import { useScroll } from "framer-motion"

type StarFieldProps = {
	globalRef: RefObject<HTMLDivElement>
}

const StarField = (props: StarFieldProps) => {
	const { globalRef } = props
	const meshRef = useRef<THREE.Points>(null!)
	const { scene, camera, gl } = useThree()
	const { scrollYProgress } = useScroll()

	useEffect(() => {
		const geometry = generateStars(50000, 10000)
		const material = new THREE.ShaderMaterial({
			uniforms: {
				color: { value: new THREE.Color(0xffffff) },
				opacity: { value: 1 },
        time: { value: 0 },
			},
			vertexShader,
			fragmentShader,
			blending: THREE.AdditiveBlending,
			depthTest: false,
			transparent: true,
		})
		const p = new THREE.Points(geometry, material)
		p.castShadow = true
    
    //change width and height of the particles
    // p.scale.set(5, 0.5, 0.5)

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

    camera.position.z = 1000

		// Camera zoom animation
		gsap.to(camera.position, {
			duration: 2.5,
			z: 350,
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
			meshRef.current.rotation.y += 0.001 // Rotation for animation
		}

		const scrollY = Math.round(scrollYProgress.get() * 100)
		if (scrollY > 10 && scrollY < 30) {
      const zoom = THREE.MathUtils.lerp(0, 2000, scrollYProgress.get())
      camera.position.z = zoom
		}
	})

	return null
}

export default StarField
