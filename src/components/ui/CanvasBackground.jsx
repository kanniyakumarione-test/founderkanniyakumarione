import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1500 }) {
  const mesh = useRef();
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 60;
      const speed = 0.003 + Math.random() / 800; // Calmer, elite motion
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    // Sync with scroll position for parallax depth
    const scrollY = window.scrollY;
    const scrollFactor = scrollY * 0.02;

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t) * 0.4;
      
      dummy.position.set(
        a * xFactor + Math.cos((t / 10) * factor),
        b * yFactor + Math.sin((t / 10) * factor) - scrollFactor, // Scroll parallax on Y
        b * zFactor + Math.cos((t / 10) * factor)
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 2, s * 2, s * 2);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <dodecahedronGeometry args={[0.08, 0]} />
      <meshStandardMaterial 
        color="#d4af37" 
        roughness={0} 
        metalness={1} 
        opacity={0.03} 
        transparent 
      />
    </instancedMesh>
  );
}

export default function CanvasBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none bg-[#050505]">
      <Canvas 
        camera={{ position: [0, 0, 30], fov: 75 }} 
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[50, 50, 50]} intensity={0.5} color="#d4af37" />
        <pointLight position={[-50, -50, -50]} intensity={0.2} color="#ffffff" />
        <Particles />
      </Canvas>
      {/* Immersive vignette layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.9)_120%)]" />
    </div>
  );
}
