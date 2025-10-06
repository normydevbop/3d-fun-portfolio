"use client";
import { Spinner } from "@/components/spinner";
import Landing from "@/models/landing";
import Sky from "@/models/sky";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
const Home = () => {
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
    return ( 
        
            <section className="w-full h-screen relative">
               <Canvas 
               className="w-full h-screen bg-transparent"
               camera={{near:0.1,far: 1000}}
               >

                <Suspense fallback={<Spinner/>}>
                <directionalLight/>
                <ambientLight/>
                <pointLight/>
                <spotLight/>
                <hemisphereLight/>
                <Sky/>
                <Landing scale={screenscale} position={screenPosition} />
                

                <OrbitControls enablePan={false} enableZoom={true}  />

                </Suspense>
                
               </Canvas>
                
            </section>
       
     );
}
 
export default Home;