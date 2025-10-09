"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const NavBar = () => {
    const pathname = usePathname();

    return ( 
       <header className="fixed top-0 left-0 flex justify-between items-center w-full bg-transparent z-10 p-4 ">

        <div>
 <Link href={"/"} >
        <Image 
                   src={"/logo.png"}
                   alt="this is logo"
                   width={150}
                   height={150}
        >

        </Image>
        </Link>
        </div>
        
       
        <nav className="flex text-lg gap-7 font-medium mr-10 bg-transparent">
             <Link href={"/about"}   className={pathname === "/about" ? "text-gray-500" : "text-black"}>
        <p>About</p>
        </Link>
        <Link href={"/projects"} className={pathname === "/projects" ? "text-gray-500" : "text-black"} >
        <p>Projects</p>
        </Link>
        <Link href={"/contact"} className={pathname === "/contact" ? "text-gray-500" : "text-black"} >
        <p>Contact</p>
        </Link>
        </nav>
       
       </header>
     );
}
 
export default NavBar;