"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const payload = { name, email, password };
    const result = await registerUser(payload);
    console.log("Registration result:", result);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center w-full max-w-md p-6  rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" className="input input-bordered" placeholder="Name" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" className="input input-bordered" placeholder="Email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" className="input input-bordered" placeholder="Password" required />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
