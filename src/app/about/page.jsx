import React from "react";

export default function About() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-2">
        We are a team of passionate developers dedicated to building amazing web applications.
      </p>
      <p>
        Our mission is to create user-friendly and efficient software solutions that meet the needs of our clients.
      </p>
        <p className="mt-4">Learn more about our <a href="/about/address" className="text-blue-500 underline">address</a>.</p>
    </div>
  );
}
