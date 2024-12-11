import * as THREE from "three"

const vertexShader = `
  uniform vec2 resolution;
  uniform float time;
  attribute float size;
  attribute vec3 color;
  varying vec3 vColor;

  void main() {
      vColor = color;
      float pulse = sin(time + position.x) * 0.5 + 1.0;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

      // Effet de traînée
      float trailFactor = sin(time * 2.0 + position.z * 0.1) * 5.0;
      vec3 trailPosition = position - normalize(position) * trailFactor;

      // Position de la particule ajustée
      mvPosition = modelViewMatrix * vec4(trailPosition, 1.0);

      // Ajustement basé sur la résolution
      float sizeFactor = 300.0 * (resolution.x / 1920.0);
      gl_PointSize = size * pulse * (sizeFactor / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
  }




// uniform float time;
// attribute float size;
// attribute vec3 color;
// varying vec3 vColor;
// //change scale of the particles

// void main() {
//     vColor = color;
//     float pulse = sin(time + position.x) * 0.5 + 1.0;
//     vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

//     // Effet de traînée
//     float trailFactor = sin(time * 2.0 + position.z * 0.1) * 5.0; // Exemple de facteur de traînée
//     vec3 trailPosition = position - normalize(position) * trailFactor;

//     // Position de la particule
//     mvPosition = modelViewMatrix * vec4(trailPosition, 1.0);

//     gl_PointSize = size * pulse * (300.0 / -mvPosition.z);
//     gl_Position = projectionMatrix * mvPosition;
// }
`

const fragmentShader = `
uniform float time;
uniform vec3 color;
uniform float opacity;
varying vec3 vColor;

void main() {
    float r = length(gl_PointCoord - vec2(0.5, 0.5));
    float alpha = smoothstep(0.1, 0.0, r);  // Une gradation lisse de la transparence pour la traînée
    float pulse = sin(time + gl_FragCoord.x) * 0.5 + 1.0;
    gl_FragColor = vec4(color * vColor, alpha * opacity);
    // gl_FragColor = vec4(color * vColor, alpha * opacity * (1.0 - r));
}
`

const generateStars = (numStars: number, maxDistance: number) => {
	const positions = []
	const sizes = []
	const colors = []

	for (let i = 0; i < numStars; i++) {
		//use the best algorithm to place the stars in the space
		const theta = Math.random() * Math.PI * 4
		const phi = Math.acos(2 * Math.random() - 1)
		const radius = Math.random() * maxDistance
		const x = radius * Math.sin(phi) * Math.cos(theta)
		const y = radius * Math.sin(phi) * Math.sin(theta)
		const z = radius * Math.cos(phi)
		positions.push(x, y, z)

		sizes.push(10) // Larger size for special stars

		// Randomize color based on temperature (simple model)
		const temperature = Math.random() // Random value from 0 to 1
		let color
		if (temperature < 0.3) {
			color = new THREE.Color(0xffd2a1) // Cooler, orange/red
		} else if (temperature < 0.7) {
			color = new THREE.Color(0xffffff) // Average, white
		} else {
			color = new THREE.Color(0x9db4ff) // Hot, blue
		}
		colors.push(color.r, color.g, color.b) // Assign RGB components
	}

	const geometry = new THREE.BufferGeometry()
	geometry.setAttribute(
		"position",
		new THREE.Float32BufferAttribute(positions, 3)
	)
	geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1))
	geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))

	return geometry
}

//help me recreate a nebula effect
//https://www.shadertoy.com/view/4tj3z2

export { vertexShader, fragmentShader, generateStars }
