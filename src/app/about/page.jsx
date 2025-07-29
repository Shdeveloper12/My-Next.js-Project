"use client";

import { useRouter } from "next/navigation";
import React from "react";



export default function About() {
    const router = useRouter();
    const handleLogin = () => {
        router.push("/about/address");
    }

  return (
    <div className="p-4 text-center">
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
