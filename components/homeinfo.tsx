"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowBigRight } from "lucide-react";

const HomeInfo = ({currentStage}) => {

      const InfoBox = ({text,link,btnText}) => (

        <div className="w-[400px] neo-brutalism-blue sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-black mx-5">
            <p className="font-medium sm:text-xl text-center mb-5">{text}</p>
            <Link href={link} className="neo-brutalism-white py-2 px-2 mx-5  text-center">
            {btnText}
            

            </Link>
        </div>

    );
    
    const   RenderContent = {
        1 : (
            <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-black mx-5">
                Hi, I am <span className="font-semibold">Normy</span>
                <br />
                A software developer from Algeria.
            </h1>
        ),
         2 : (
            <InfoBox text={"Studied computer science and worked a digital artist freelancer and learned a lot of skills along the way."} link={"/about"} btnText={"learn more"}/>
        ),
         3 : (
             <InfoBox text={"Made a SaaS notes, docs, whiteboard and extra islamic features, curious about it?"} link={"/projects"} btnText={"Visit my portfolio"}/>
        ),
         4 : (
             <InfoBox text={"Need a projecty done or looking for a dev? I'm just a few keystrokes away"} link={"/contact"} btnText={"Let's get in touch"}/>
        ),


    }
  
    return RenderContent[currentStage] || null;
}
 
export default HomeInfo;