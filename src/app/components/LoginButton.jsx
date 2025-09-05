"use client";

import { signIn } from "next-auth/react";
import React from 'react';

export default function LoginButton() {
  const handleSignIn = () => {
    signIn('credentials', { 
      callbackUrl: '/',
      redirect: true 
    });
  };

  return (
    <button 
      className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors font-medium"
      onClick={handleSignIn}
    >
      Sign In
    </button>
  );
}
