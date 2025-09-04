"use client";
import { useSession } from 'next-auth/react';
import React from 'react'

export default function UserInfo() {
    const { data: session, status } = useSession();
    
    if (status === "loading") return <p>Loading...</p>
    
    if (!session) return <p>Not signed in</p>
    
  return (
    <div className="mt-4 p-4 border rounded">
      <h3 className="text-xl font-bold">User Information:</h3>
      <p><strong>Name:</strong> {session?.user?.name}</p>
      <p><strong>Email:</strong> {session?.user?.email}</p>
      <p><strong>Role:</strong> {session?.user?.role || 'No role assigned'}</p>
      <p><strong>ID:</strong> {session?.user?.id}</p>
      <details className="mt-2">
        <summary className="cursor-pointer text-sm text-gray-600">Full Session Data</summary>
        <pre className="text-xs bg-gray-100 p-2 mt-2 overflow-auto">
          {JSON.stringify(session, null, 2)}
        </pre>
      </details>
    </div>
  )
}
