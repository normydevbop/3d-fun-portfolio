"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const NavBar = () => {
    const pathname = usePathname();

    return ( 
       <header className="flex justify-between align-middle items-center m-0 p-0 w-full">
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
        
       
        <nav className="flex text-lg gap-7 font-medium mr-10">
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