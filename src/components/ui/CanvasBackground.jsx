import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 800 }) {
  const mesh = useRef();
  const { size } = useThree();
  
  // Reduce count on smaller screens
  const finalCount = useMemo(() => {
    return size.width < 768 ? Math.min(count, 300) : count;
  }, [count, size.width]);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < finalCount; i++) {
      const t = Math.random() * 100;
      const factor = 10 + Math.random() * 40;
      const speed = 0.001 + Math.random() / 1500;
      const xFactor = -40 + Math.random() * 80;
      const yFactor = -40 + Math.random() * 80;
      const zFactor = -40 + Math.random() * 80;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
    }
    return temp;
  }, [finalCount]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!mesh.current) return;
    
    const scrollY = window.scrollY;
    const scrollFactor = scrollY * 0.015;

    for (let i = 0; i < finalCount; i++) {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particles[i];
      t = particles[i].t += speed;
      
      const a = Math.cos(t);
      const b = Math.sin(t);
      const s = Math.cos(t) * 0.2 + 0.3;
      
      dummy.position.set(
        a * xFactor + Math.cos(t) * 2,
        b * yFactor + Math.sin(t) * 2 - scrollFactor,
        b * zFactor + a * 2
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, finalCount]}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial 
        color="#d4af37" 
        transparent 
        opacity={0.06}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

export default function CanvasBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none bg-[#030303]">
      <Canvas 
        camera={{ position: [0, 0, 40], fov: 75 }} 
        dpr={typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : [1, 1.5]}
        gl={{ antialias: false, alpha: true, stencil: false, depth: false }}
        performance={{ min: 0.5 }}
      >
        <Particles />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,3,0.8)_100%)]" />
    </div>
  );
}

