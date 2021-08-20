'use strict';

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';

// function render(time, cubes){
//     time *= 0.001;

//     cubes.forEatch((cube, ndx) => {
//         const speed = 1 + ndx *.1;
//         const rotation = time * speed;
//         cube.rotation.x = rotation;
//         cube.rotation.y = rotation;
//     });

//     rendererMultipleCubes.render(scene, camera);
    
//     requestAnimationFrame(render);
// }

function main(){

    function makeInstance(geometry, color, x_position){
        const material = new THREE.MeshPhongMaterial({color});
    
        const cube = new THREE.Mesh(geometry, material);
        multCubesScene.add(cube);
        
        cube.position.x = x_position;
    
        return cube;
    }

    const canvas = document.querySelector('#c'); // Static cube
    const livingCubeRotation = document.querySelector('#living-cube-rotaion');
    // const multipleCubes = document.querySelector('#multiple-cubes-rotation');

    const renderer = new THREE.WebGLRenderer({canvas});
    const renderer3DCube = new THREE.WebGLRenderer({canvas: livingCubeRotation});
    // const rendererMultipleCubes = new THREE.WebGLRenderer({canvas: multipleCubes});

    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene();
    const multCubesScene = new THREE.Scene();

    // Object geometry set up
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    // Creating a material
    // const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
    const material = new THREE.MeshPhongMaterial({color: 0x44aa88});

    // Mesh object by combining geometry + material objects
    const cube = new THREE.Mesh(geometry, material);

    const cubes = [
        makeInstance(geometry, 0x44aa88, 0),
        makeInstance(geometry, 0xC03221, -2),
        makeInstance(geometry, 0x3c91e6, 2),
    ];
    
    // Light set up
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    
    scene.add(cube);
    scene.add(light);
    
    renderer.render(scene, camera);
    
    // Creating animation
    function render(time){
        time *= 0.001;

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer3DCube.render(scene, camera);
        
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

main();