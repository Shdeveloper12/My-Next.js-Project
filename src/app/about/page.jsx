"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function About() {
    const router = useRouter();
    const isLogin = true;
    const handleLogin = () => {
        if(isLogin){
            router.push("/about/address");
        }
        else{
            router.push("/")
        }
    }

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-2">
        We are a team of passionate developers dedicated to building amazing web applications.
      </p>
      <p>
        Our mission is to create user-friendly and efficient software solutions that meet the needs of our clients.
      </p>
        <p className="mt-4">Learn more about our <button onClick={handleLogin} className="text-blue-500 underline">address</button>.</p>
    </div>
  );
}
