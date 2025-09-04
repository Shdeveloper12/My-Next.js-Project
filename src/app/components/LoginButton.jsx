"use client";

import {  signIn } from "next-auth/react"
import React from 'react'

export default function LoginButton() {
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
