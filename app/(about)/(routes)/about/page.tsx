"use client";
import NavBar from "@/components/NavBar";
import { Spinner } from "@/components/spinner";

import Landing from "@/models/landing";
import Sanic from "@/models/sanic";
import Sky from "@/models/sky";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const AboutPage = () => {
    return ( 
        <div>
            <NavBar />
            <div>
                 <Canvas 
               className={`w-full h-screen bg-transparent `}
               camera={{near:0.1,far: 1000}}
               >

                <Suspense fallback={<Spinner/>}>
                <directionalLight/>
                <ambientLight/>
                <pointLight/>
                <spotLight/>
                <hemisphereLight/>
                
                
                

                <OrbitControls enablePan={false} enableZoom={true}  />

                </Suspense>
                
               </Canvas>
            </div>
        </div>
     );
}
 
export default AboutPage;