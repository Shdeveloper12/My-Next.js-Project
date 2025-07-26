"use client";
import { usePathname } from "next/navigation";
import React, { use } from "react";

export default function Navbar() {
    const pathName = usePathname();
    console.log(pathName, pathName.includes("dashboard"));
    if (!pathName.includes("dashboard")) {
       return (
    <nav>
      <ul  className="flex justify-around items-center p-4 bg-gray-800 text-white">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/service">Service</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  ); 
    }
    else {
        <></>
    }
  
}