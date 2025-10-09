"use client";
import { Spinner } from "@/components/spinner";
import Fish from "@/models/fish";
import Landing from "@/models/landing";
import Sky from "@/models/sky";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
const Home = () => {
  /*
   const adjustIslandForScreenSize = () => {
      let screenscale = null;
      const screenPosition = [0, -1, 0];

      if (window.innerWidth < 768) {
         screenscale = 0.9;
      }
      else {
         screenscale = 1.6;
      }
      return [screenscale,screenPosition];
   };
   
   const [screenscale,screenPosition] = adjustIslandForScreenSize();
   */
   const [isRotating,setIsrotating] = useState(false);
    return ( 
        
            <section className="w-full h-screen relative">
               <Canvas 
               className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
               camera={{near:0.1,far: 1000}}
               >

                <Suspense fallback={<Spinner/>}>
                <directionalLight/>
                <ambientLight/>
                <pointLight/>
                <spotLight/>
                <hemisphereLight/>
                <Fish/>
                <Sky />
                <Landing  />
                

                <OrbitControls enablePan={false} enableZoom={true}  />

                </Suspense>
                
               </Canvas>
                
            </section>
       
     );
}
 
export default Home;