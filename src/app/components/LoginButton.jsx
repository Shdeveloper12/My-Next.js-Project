"use client";

import {  signIn } from "next-auth/react"
import React from 'react'

export default function LoginButton() {
  return (
    <div>
      <button className="bg-blue-500 text-white p-2 rounded hover:cursor-pointer" onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
