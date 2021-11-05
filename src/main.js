import './scss/index.scss'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import vertexShader from './js/shaders/vertex.glsl'
import fragmentShader from './js/shaders/fragment.glsl'



const canvas = document.createElement('canvas')
document.body.appendChild(canvas)

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// Renderer

const renderer = new THREE.WebGL1Renderer({ 
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Scene

const scene = new THREE.Scene()

// Camera 

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.z = 3


// Controls

const controls = new OrbitControls(camera, renderer.domElement)

// Geometry

const geometry = new THREE.PlaneGeometry(3,4,16,16)

// Material

const material = new THREE.RawShaderMaterial({
  vertexShader,
  fragmentShader
})

// Mesh 

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

renderer.render(scene, camera)

controls.update()

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

animate()


// resize window

window.addEventListener('resize', function(e) {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  renderer.setSize(sizes.width, sizes.height)
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
})
