"use client";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import LoadingSpinner from "./LoadingSpinner";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathName = usePathname();
  
  // Don't render navbar on dashboard pages
  if (pathName && pathName.includes("dashboard")) {
    return null;
  }

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-around items-center p-4">
          <li>
            <Link href="/" className="hover:text-blue-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/service" className="hover:text-blue-300 transition-colors">
              Service
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-blue-300 transition-colors">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-300 transition-colors">
              Contact
            </Link>
          </li>
          
          {/* Conditional rendering based on authentication status */}
          <li>
            {status === "loading" ? (
              <LoadingSpinner />
            ) : session?.user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-300">
                  Welcome, {session.user.name}
                  {session.user.role && (
                    <span className="ml-2 px-2 py-1 bg-blue-600 text-xs rounded">
                      {session.user.role}
                    </span>
                  )}
                </span>
                <LogoutButton />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <LoginButton />
                <Link 
                  href="/register" 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </li>
          
          {/* Show admin/user dashboard link if user is logged in */}
          {session?.user && (
            <li>
              <Link 
                href={
                  session.user.role === "admin" 
                    ? "/admin-dashboard" 
                    : "/user-dashboard"
                } 
                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded transition-colors"
              >
                {session.user.role === "admin" ? "Admin" : "User"} Dashboard
              </Link>
            </li>
          )}
          
          {/* Show Add Service link only for authenticated users */}
          {session?.user && (
            <li>
              <Link 
                href="/service/add" 
                className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded transition-colors"
              >
                Add Service
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}