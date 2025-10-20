"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
const Sanic = ( {...props}) => {

    const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/3d/classic_sonic.glb");
  const { actions , names } = useAnimations(animations, group);
  

  const { nodes : SanicNodes, materials : SanicMeterials } = useGLTF("/assets/3d/sanic.glb");

  useEffect(() => {
      if (names.length > 0) {
        actions[names[0]]?.play();
      }
    }, [actions, names]);


    useFrame((state, delta) => {
      if (!group.current ) return;
    
      // Make time move forward smoothly
      const t = state.clock.getElapsedTime();
    
      // Adjust these values for position and speed
      const radius = 1;        // how far from Ame
      const speed = 0.5;         // orbit speed
 const height = 0;        // vertical offset if you want
    
      // Circular horizontal movement
      group.current.position.x = Math.cos(t * speed) * radius;
      group.current.position.z = -Math.sin(t * speed) * radius;
      
    
      // Optional: make fish face the center (Ame)
      group.current.lookAt(0, height, 0);
    });

    const [isSanic,setIsSanic] = useState(false);
useEffect(() => {
  const interval = setInterval(() => {
    // Trigger the flash
    setIsSanic(true);

    // Turn back to Sonic after 200ms
    const timeout = setTimeout(() => setIsSanic(false), 300);

    // Clean up timeout inside the interval
    return () => clearTimeout(timeout);
  }, 3000); // every 3 seconds

  // Cleanup on unmount
  return () => clearInterval(interval);
}, []);
    return ( 
        <>
             {isSanic ? (
            <>
                 {isSanic ? (
                <group {...props} dispose={null} ref={group}>
  <group position={[0, -0.5, 4]} rotation={[0, -Math.PI / 2, 0]} scale={0.15}>
    <group
      position={[1.256, -1.896, 0.042]}
      rotation={[Math.PI / 2, 0.096, -1.658]}
      scale={[0.095, 0.073, 0.062]}>
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_46.geometry} material={SanicMeterials.rsMaterial1SG1} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_47.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG14} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_48.geometry} material={SanicMeterials.aj1CubeFBXASC046003SG} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_49.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG7} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_50.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG8} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_51.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG2} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_52.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG5} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_53.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG1} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_54.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG9} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_55.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG6} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_56.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG17} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_57.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG3} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_58.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_59.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG13} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_60.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG10} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_61.geometry} material={SanicMeterials.aj1L_Air_J_outsoleSG_among_us_aj2aj2rsMaterial1SG11} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_62.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG19} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_63.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG4} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_64.geometry} material={SanicMeterials['Material.002']} />
    </group>

    <group
      position={[-1.6, -1.867, 0.042]}
      rotation={[1.598, 0.051, 1.624]}
      scale={[-0.088, 0.095, 0.067]}>
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_66.geometry} material={SanicMeterials.rsMaterial1SG1} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_67.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG14} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_68.geometry} material={SanicMeterials.aj1CubeFBXASC046003SG} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_69.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG7} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_70.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG8} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_71.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG2} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_72.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG5} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_73.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG1} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_74.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG9} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_75.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG6} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_76.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG17} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_77.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG3} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_78.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_79.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG13} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_80.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG10} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_81.geometry} material={SanicMeterials.aj1L_Air_J_outsoleSG_among_us_aj2aj2rsMaterial1SG11} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_82.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG19} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_83.geometry} material={SanicMeterials.among_us_aj2aj2rsMaterial1SG4} />
      <mesh castShadow receiveShadow geometry={SanicNodes.Object_84.geometry} material={SanicMeterials['Material.002']} />
    </group>

    <mesh castShadow receiveShadow geometry={SanicNodes.Object_4.geometry} material={SanicMeterials['Fur_Material.001']} position={[0.064, -0.507, 0]} scale={0.814} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_6.geometry} material={SanicMeterials['Material.007']} position={[0.212, -0.402, 0.574]} scale={0.274} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_8.geometry} material={SanicMeterials['Fur_Material.001']} position={[0.111, 0.439, 0]} scale={0.165} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_10.geometry} material={SanicMeterials['Fur_Material.001']} position={[0.303, 1.129, 0]} scale={0.577} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_12.geometry} material={SanicMeterials['Material.005']} position={[0.042, 1.2, 0.154]} scale={0.267} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_14.geometry} material={SanicMeterials['Material.004']} position={[0.489, 1.201, 0.128]} scale={0.315} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_16.geometry} material={SanicMeterials['Material.001']} position={[-0.019, 1.443, -0.047]} rotation={[-0.371, 0.06, -1.315]} scale={[0.101, 0.326, 0.171]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_18.geometry} material={SanicMeterials['Material.001']} position={[-0.255, 1.166, -0.047]} rotation={[-0.343, -0.157, -0.751]} scale={[0.079, 0.257, 0.135]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_20.geometry} material={SanicMeterials['Material.001']} position={[-0.061, 0.59, -0.047]} rotation={[-0.323, -0.176, -0.671]} scale={[0.036, 0.115, 0.061]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_22.geometry} material={SanicMeterials['Material.001']} position={[-0.397, 0.39, -0.047]} rotation={[-0.371, 0.06, -1.315]} scale={[0.039, 0.126, 0.066]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_24.geometry} material={SanicMeterials['Material.007']} position={[0.335, 0.905, 0.405]} rotation={[0.003, -0.031, 0.018]} scale={[0.111, 0.132, 0.04]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_26.geometry} material={SanicMeterials['Material.003']} position={[0.251, 1.048, 0.454]} rotation={[0.488, 0.008, 0.044]} scale={[0.054, 0.026, 0.029]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_28.geometry} material={SanicMeterials['Material.007']} position={[0.402, 0.879, 0.376]} rotation={[0.003, -0.031, 0.018]} scale={[0.1, 0.119, 0.036]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_30.geometry} material={SanicMeterials['Fur_Material.001']} position={[-0.438, 0.303, 0]} rotation={[0, 0, -0.389]} scale={0.177} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_32.geometry} material={SanicMeterials.HAZMAT_SUIT} position={[2.023, -0.311, 0.073]} rotation={[1.796, -0.895, 0.041]} scale={[-0.366, 0.421, 0.387]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_34.geometry} material={SanicMeterials['Fur_Material.001']} position={[1.047, 0.235, 0]} rotation={[0, 0, -0.862]} scale={0.048} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_36.geometry} material={SanicMeterials.HAZMAT_SUIT} position={[-1.647, -0.419, 0.054]} rotation={[2.699, 0.107, -1.075]} scale={[0.385, 0.529, 0.512]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_38.geometry} material={SanicMeterials['Material.001']} position={[-0.552, -0.161, -0.047]} rotation={[-0.371, 0.06, -1.315]} scale={[0.051, 0.164, 0.086]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_40.geometry} material={SanicMeterials['Material.001']} position={[-0.622, -0.401, -0.047]} rotation={[-0.375, 0.024, -1.224]} scale={[0.051, 0.164, 0.086]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_42.geometry} material={SanicMeterials['Material.001']} position={[0.155, -0.762, -0.54]} rotation={[-1.776, -1.291, -2.169]} scale={[0.041, 0.103, 0.134]} />
    <mesh castShadow receiveShadow geometry={SanicNodes.Object_44.geometry} material={SanicMeterials['Fur_Material.001']} position={[0.554, -0.904, 0.045]} rotation={[0, 0, 0.372]} scale={[0.083, 0.083, 0.139]} />
  </group>
</group>

        ) :
    (
         <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 1.5]} position={[0, -1, 4]} scale={100}>
          <group name="chr_classicsonicfbx" rotation={[Math.PI / 2, 0, 0]}  scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.chr_classicsonic_body}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.chr_classicsonic_mouth}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.chr_classicsonic_eye}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <group name="Object_6" />
                  <group name="Object_8" />
                  <group name="Object_10" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>

    )}
           
            </>
        ) :
    (
         <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 1.5]} position={[0, -1, 4]} scale={100}>
          <group name="chr_classicsonicfbx" rotation={[Math.PI / 2, 0, 0]}  scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.chr_classicsonic_body}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.chr_classicsonic_mouth}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.chr_classicsonic_eye}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <group name="Object_6" />
                  <group name="Object_8" />
                  <group name="Object_10" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>

    )}
           
        </>
   
    );
}
 
export default Sanic;