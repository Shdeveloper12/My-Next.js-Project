"use client";
import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="inline-flex items-center">
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
      <span className="ml-2 text-sm">Loading...</span>
    </div>
  );
}
