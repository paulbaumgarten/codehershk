"use client"
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { vertex, fragment } from './scripts/shaders';
import viewportHeight from './scripts/viewportHeight'

interface GradientProps {
  colors: [string, string, string];
  noiseStrength?: number;
  noiseDensity?: number;
  animate?: boolean;
  shape?: 'sphere' | 'plane';
  speed?: number;
  style?: React.CSSProperties;
}

export default ({
  colors,
  noiseStrength = 0.4,
  noiseDensity = 1.1,
  animate = true,
  shape = 'plane',
  speed = 0.01,
  style = {}
} : GradientProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);

  const [ vw, setVW ] = useState(1);
  const [ vh, setVH ] = useState(1);

  const defaultStyling = {
    width: '100dvw',
    height: '100dvh',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    background: 'transparent',
    zIndex: -1
  }
  
  style = Object.assign({}, defaultStyling, style);
  
  const updatePlaneSize = () => {
    if (!cameraRef.current || !meshRef.current || shape !== 'plane') return;
    
    const camera = cameraRef.current;
    const distance = camera.position.z;
    const fov = camera.fov * (Math.PI / 180);
    const height = 2 * Math.tan(fov / 2) * distance;
    const width = height * (vw / vh);
    
    // Update plane geometry
    const newGeometry = new THREE.PlaneGeometry(width, height, 64, 64);
    meshRef.current.geometry.dispose();
    meshRef.current.geometry = newGeometry;
  };
  
  useEffect(() => {
    function handleResize() {
      setVW(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0))
      setVH(Math.max(document.documentElement.clientHeight || 0, viewportHeight() || 0))
      
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      
      const width = vw;
      const height = vh;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();

      rendererRef.current.setSize(width, height, false);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      updatePlaneSize();
    }

    handleResize();

    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.display = 'block';

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      vw / vh,
      0.1,
      100
    );
    camera.position.z = shape === 'plane' ? 5 : 7.1;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(vw, vh);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Initial geometry (will be updated for plane)
    const geometry = shape === 'sphere'
      ? new THREE.SphereGeometry(2, 64, 64)
      : new THREE.PlaneGeometry(5, 5, 64, 64);

    const material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color(colors[0]) },
        uColor2: { value: new THREE.Color(colors[1]) },
        uColor3: { value: new THREE.Color(colors[2]) },
        uStrength: { value: noiseStrength },
        uDensity: { value: noiseDensity },
      },
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    meshRef.current = mesh;
    scene.add(mesh);

    // Initial size update for plane
    if (shape === 'plane') {
      updatePlaneSize();
    }

    let animationFrameId: number;
    const animate = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value += speed;
      }
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };  

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [colors, noiseStrength, noiseDensity, shape, animate]);

  return (
    <motion.div
      ref={containerRef}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};