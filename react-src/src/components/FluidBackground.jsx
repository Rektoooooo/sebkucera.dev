import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FluidBackground = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Simple fluid-like animation with Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a simple animated plane
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          float d = length(uv - vec2(0.5 + 0.3 * sin(time), 0.5 + 0.3 * cos(time)));
          vec3 color1 = vec3(0.322, 0.153, 1.0); // #5227FF
          vec3 color2 = vec3(1.0, 0.624, 0.988); // #FF9FFC
          vec3 color = mix(color1, color2, d);
          gl_FragColor = vec4(color, 0.3);
        }
      `
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      material.uniforms.time.value += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default FluidBackground;
