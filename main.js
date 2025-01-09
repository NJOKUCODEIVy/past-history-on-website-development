import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById('canvas');

// 1. scene
const scene = new THREE.Scene();

scene.background = new THREE.Color('yellow');

// add camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(0, 0, 5);

//object
const geometry = new THREE.DodecahedronGeometry();

const material = new THREE.MeshLambertMaterial({color: 'green', emissive: '' });

const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2,0.1,2);

const boxMaterial   = new THREE.MeshStandardMaterial({color: 'darkred', emissive: 'brown' });

const box = new THREE.Mesh(boxGeometry, boxMaterial);

box.position.y = -1.5;

scene.add(dodecahedron);

scene.add(box);

// light
const light = new THREE.DirectionalLight(0x006769, 100);

light.position.set(1,1,1);

scene.add(light);

// Renderer
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);

renderer.render(scene, camera);

// Add Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableDampingFactor = 0.05;
controls.enableZoom=true;
controls.enablePan = true;


// Add animations
function animate() {
    requestAnimationFrame(animate);

    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    box.rotation.y += 0.005;
    controls.update();
    renderer.render(scene, camera);
}

//  handle window resizing
window.addEventListener('resize', () =>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
});


animate()