import React from "react";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center w-full max-w-md p-6  rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
