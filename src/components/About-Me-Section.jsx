import { useEffect, useRef } from "react";
import { render } from "react-dom";
import * as THREE from "three";

const AboutMeSection = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth; // or any desired width
    const height = window.innerHeight; // or any desired height

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);

    scene.add(line);
    renderer.render(scene, camera);
  }, []);

  return (
    <section
      ref={mountRef}
      className="normal-page p-0"
    ></section>
  );
};

export default AboutMeSection;
