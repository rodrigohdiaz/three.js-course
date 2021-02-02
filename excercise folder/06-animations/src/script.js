import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'



// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// Time
// let time = Date.now()

// Clock
const clock = new THREE.Clock()

// Animations
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

const tick = () =>
{
    // Clock
    const elapsedTime = clock.getElapsedTime()

    //Time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime
    // console.log(deltaTime)

    // console.log(time)

    // Update objects
    // mesh.position.x -= 0.01
    // mesh.position.y += 0.01
    // mesh.rotation.y += 0.001 * deltaTime
    
    // mesh.rotation.y = elapsedTime
    // mesh.position.y = Math.cos(elapsedTime)
    // mesh.position.x = Math.sin(elapsedTime)

    // camera.position.y = Math.cos(elapsedTime)
    // camera.position.x = Math.sin(elapsedTime)
    // camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()