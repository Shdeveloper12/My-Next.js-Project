import Link from "next/link";
import React from "react";

export default function Login() {
    return(
<div className="flex items-center justify-center min-h-screen ">
  <div className="flex flex-col items-center w-full max-w-md p-6  rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-6">Login</h1>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a> <span>If you're not registered, please </span><Link className="link link-hover text-blue-400" href="/register">Register now</Link></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    )
}