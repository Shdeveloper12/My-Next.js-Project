"use client";
import { useSession } from 'next-auth/react';
import React from 'react'

export default function UserInfo() {
    const session = useSession();
  return (
    <div>
     <p>{JSON.stringify(session)}</p>
    </div>
  )
}
