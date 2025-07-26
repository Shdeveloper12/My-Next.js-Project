import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul  className="flex justify-around items-center p-4 bg-gray-800 text-white">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}