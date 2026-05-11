import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import useTheme from '../../context/useTheme';

/* ─── Palette ─────────────────────────────────────────────── */
function getPalette(isDark) {
  return isDark
    ? {
        primary: '#4488ff', emissive: '#1144aa', emissiveIntensity: 0.8,
        wireframe: '#88bbff', light1: '#4488ff', light2: '#88bbff', ambientIntensity: 0.5,
      }
    : {
        primary: '#2a5db0', emissive: '#1a3d80', emissiveIntensity: 0.5,
        wireframe: '#5588cc', light1: '#3a6fc8', light2: '#5588cc', ambientIntensity: 0.8,
      };
}

const lerp = (a, b, t) => a + (b - a) * t;

/* ══════════════════════════════════════════════════════════
   Organic Ramiel - 캔버스 이탈 방지
   ══════════════════════════════════════════════════════════ */
function UndulatingRamiel({ palette, isTransformed }) {
  const groupRef = useRef(null);
  const meshRef = useRef(null);
  const wireRef = useRef(null);
  const ampRef = useRef(0.02);

  const { basePositions, geometry } = useMemo(() => {
    // 캔버스 여백 확보를 위해 기본 크기 1.3
    const geo = new THREE.OctahedronGeometry(1.3, 12);
    const pos = geo.attributes.position.clone();
    geo.computeVertexNormals();
    return { basePositions: pos, geometry: geo };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    
    // 폭주 시 파동 진폭
    const targetAmp = isTransformed ? 0.25 : 0.03;
    ampRef.current = lerp(ampRef.current, targetAmp, delta * 2.0);
    const currentAmp = ampRef.current;
    
    const speed = isTransformed ? 2.5 : 1.0;
    const timeVar = t * speed;

    const positions = geometry.attributes.position.array;
    const bases = basePositions.array;

    for (let i = 0; i < positions.length; i += 3) {
      const bx = bases[i];
      const by = bases[i+1];
      const bz = bases[i+2];

      const length = Math.sqrt(bx*bx + by*by + bz*bz) || 1;
      const nx = bx / length;
      const ny = by / length;
      const nz = bz / length;

      const noise = 
        Math.sin(bx * 3.0 + timeVar * 1.2) + 
        Math.cos(by * 3.0 + timeVar * 0.8) + 
        Math.sin(bz * 3.0 + timeVar * 1.5);
        
      const intensity = noise * currentAmp;

      positions[i]     = bx + nx * intensity;
      positions[i+1]   = by + ny * intensity;
      positions[i+2]   = bz + nz * intensity;
    }
    
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    const rotSpeed = isTransformed ? 0.8 : 0.2;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotSpeed;
      meshRef.current.rotation.z += delta * (rotSpeed * 0.5);
    }
    if (wireRef.current) {
      wireRef.current.rotation.copy(meshRef.current.rotation);
    }

    // 그룹 팽창 스케일 조절 (최대 0.9배)
    if (groupRef.current) {
      const targetScale = isTransformed ? 0.9 : 1.0;
      groupRef.current.scale.setScalar(lerp(groupRef.current.scale.x, targetScale, delta * 3.0));
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhysicalMaterial
          color={palette.primary}
          emissive={palette.emissive}
          emissiveIntensity={isTransformed ? 1.5 : palette.emissiveIntensity}
          roughness={0.15}
          metalness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.65} 
          side={THREE.DoubleSide}
        />
      </mesh>
      
      <mesh ref={wireRef} geometry={geometry} scale={1.01}>
        <meshBasicMaterial 
          color={palette.wireframe} 
          wireframe 
          transparent 
          opacity={isTransformed ? 0.4 : 0.15} 
        />
      </mesh>
    </group>
  );
}

/* ─── HeroScene ───────────────────────────────────────────── */
const HeroScene = () => {
  const { theme } = useTheme();
  const palette = getPalette(theme === 'dark');
  const [isTransformed, setIsTransformed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // 화면 폭이 1400px 이하일 때 렌더링 중단
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1400);
    };

    handleResize(); // 마운트 시 최초 확인
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1400px 이하라면 빈 값(null)을 반환하여 리소스를 완전히 해제
  if (!isVisible) return null;

  return (
    <div className="hero-scene">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
        onDoubleClick={() => setIsTransformed((v) => !v)}
      >
        <OrbitControls
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.8}
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI * 0.75}
        />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <ambientLight intensity={palette.ambientIntensity} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color={palette.light1} />
          <pointLight position={[-3, -2, 4]} intensity={0.6} color={palette.light2} />
          
          <group onClick={(e) => e.stopPropagation()}>
            <UndulatingRamiel 
              palette={palette} 
              isTransformed={isTransformed} 
            />
          </group>
        </Float>
      </Canvas>
    </div>
  );
};

export default HeroScene;