"use client";
import { signOut } from 'next-auth/react';
import React from 'react';

export default function LogoutButton() {
  const handleSignOut = () => {
    signOut({ 
      callbackUrl: '/',
      redirect: true 
    });
  };

  return (
    <button 
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors font-medium"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}

