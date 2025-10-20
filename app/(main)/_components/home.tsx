"use client";
import HomeInfo from "@/components/homeinfo";
import { Spinner } from "@/components/spinner";

import Landing from "@/models/landing";
import Sanic from "@/models/sanic";
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
   const [isRotating,setIsRotating] = useState(false);
   const [currentStage,setCurrentStage] = useState(1);

    return ( 
        
            <section className="w-full h-screen relative">
               <div className="absolute top-10 left-0 right-0 z-10 flex items-center justify-center">
                  {currentStage && <HomeInfo currentStage={currentStage}/>}

               </div>
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
                <Sanic />
                
                <Sky />
                <Landing 
                isRotating = {isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
                />
                
                

                <OrbitControls enablePan={false} enableZoom={true}  />

                </Suspense>
                
               </Canvas>
                
            </section>
       
     );
}
 
export default Home;