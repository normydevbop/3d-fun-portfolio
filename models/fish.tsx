"use client"

import React, { useRef, useEffect, useState, JSX } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import {a} from '@react-spring/three';

const Fish = (props : JSX.IntrinsicElements["group"]) => {
    const { nodes: FishNodes, materials: FishMaterials, animations : FishAnimation } = useGLTF(
        "/assets/3d/koi_fish.glb"
      );
      const fishRef = useRef<THREE.Group>(null);
    const { actions: fishActions, names: fishNames } = useAnimations(FishAnimation, fishRef);

    const [fishHovered, setFishHovered] = useState(false);
     useEffect(() => {
      if (fishNames.length > 0) {
        fishActions[fishNames[0]]?.play();
      }
    }, [fishActions, fishNames]);
    
useEffect(() => {
  const fishAction = fishActions[fishNames[0]];
  if (!fishAction) return;
  fishHovered ? (fishAction.paused = true) : (fishAction.paused = false);
}, [fishHovered, fishActions, fishNames]);

useFrame((state, delta) => {
  if (!fishRef.current || fishHovered) return;

  // Make time move forward smoothly
  const t = state.clock.getElapsedTime();

  // Adjust these values for position and speed
  const radius = 1.5;        // how far from Ame
  const speed = 0.5;         // orbit speed
  const height = -2;        // vertical offset if you want

  // Circular horizontal movement
  fishRef.current.position.x = Math.cos(t * speed) * radius;
  fishRef.current.position.z = -Math.sin(t * speed) * radius;
  fishRef.current.position.y = height;

  // Optional: make fish face the center (Ame)
  fishRef.current.lookAt(0, height, 0);
});

    return ( 
         <group ref={fishRef} {...props} dispose={null} onPointerOver={() => setFishHovered(true)}
      onPointerOut={() => setFishHovered(false)}
      >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="koifish_0" position={[-0.268, 2, 4.5]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh
                  name="mesh_0"
                  castShadow
                  receiveShadow
                  geometry={FishNodes.mesh_0.geometry}
                  material={FishMaterials.SimplygonCastMaterial}
                  morphTargetDictionary={FishNodes.mesh_0.morphTargetDictionary}
                  morphTargetInfluences={FishNodes.mesh_0.morphTargetInfluences}
                  scale={fishHovered ? 0.6 : 0.4}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
     );
}
 
export default Fish;