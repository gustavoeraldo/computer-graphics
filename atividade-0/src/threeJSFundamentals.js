'use strict';

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';

function main(){

    function multipleRender(time){
        time *= 0.001;

        cubes.forEach((cube, index) => {
            const speed = 1 + index *.1;
            const rotation = time * speed;
            cube.rotation.x = rotation;
            cube.rotation.y = rotation;
        });

        rendererMultipleCubes.render(multCubesScene, camera);
        
        requestAnimationFrame(multipleRender);
    }

    function render(time){
        time *= 0.001;

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer3DCube.render(scene, camera);
        
        requestAnimationFrame(render);
    }

    function makeInstance(geometry, color, x_position){
        const material = new THREE.MeshPhongMaterial({color});
    
        const cube = new THREE.Mesh(geometry, material);
        multCubesScene.add(cube);
        
        cube.position.x = x_position;
    
        return cube;
    }

    const canvas = document.querySelector('#c'); // Static cube
    const livingCubeRotation = document.querySelector('#living-cube-rotaion');
    const multipleCubes = document.querySelector('#multiple-cubes-rotation');

    const renderer = new THREE.WebGLRenderer({canvas});
    const renderer3DCube = new THREE.WebGLRenderer({canvas: livingCubeRotation});
    const rendererMultipleCubes = new THREE.WebGLRenderer({canvas: multipleCubes});

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
    const light2 = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    light2.position.set(-1, 2, 4);
    
    // scene for single cube
    scene.add(cube);
    scene.add(light);

    multCubesScene.add(light2);
    
    renderer.render(scene, camera);
    
    rendererMultipleCubes.render(multCubesScene, camera)

    // Single cube animation
    requestAnimationFrame(render);
    
    // Multiple cubes animation
    requestAnimationFrame(multipleRender);    
}

main();