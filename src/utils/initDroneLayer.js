import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

let camera, scene, renderer;
let geometry, material, mesh;
const loader = new GLTFLoader();

// init
export function init() {
    camera = new THREE.PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        0.01,
        10
    );
    // how near to the scene our camera
    camera.position.z = 5;
    camera.rotation.z = 1;

    scene = new THREE.Scene();

    // Initially its getting dark. then i had to set light
    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);

    loader.load("/models/heli/scene.gltf", (gltf) => {
        let model = gltf.scene;

        // initially it gets very big and need to do scale it (x-axis, y-axis, z-axis)
        // In here scaling down by 45%
        model.scale.set(0.45, 0.45, 0.45);

        // GSAP is powerfull animation library for JS
        gsap.to(camera.position, {
            z: 2,
            duration: 1,
            ease: "back.out(1.7)",
        });
        gsap.to(camera.rotation, {
            x: 0.1,
            y: 0.1,
            z: 0,
            duration: 1,
        });
        gsap.to(model.rotation, {
            y: Math.PI * 3.2,
            duration: 10,
            delay: 1,
        });
        gsap.to(model.scale, {
            delay: 1,
            durtion: 1,
            x: 0.5,
            y: 0.5,
            z: 0.5,
        });
        gsap.to(model.position, {
            delay: 1,
            duration: 1,
            x: 0.4,
            y: 0,
        });
        scene.add(model);
    });
    // geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    // material = new THREE.MeshNormalMaterial();

    // mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);

    // renderer render all the elements in our page and animate them
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    renderer.setClearColor(0xffffff, 1);

    // appending our canves to our body
    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectonMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// animation
function animation(time) {
    // mesh.rotation.x = time / 2000;
    // mesh.rotation.y = time / 1000;

    renderer.render(scene, camera);
}
