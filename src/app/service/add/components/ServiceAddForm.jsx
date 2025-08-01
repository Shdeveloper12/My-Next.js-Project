"use client";

import { useRouter } from "next/navigation";
import React from "react";

export async function ServiceAddForm() {
    const router = useRouter();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
          name: formData.get("name"),
          description: formData.get("description"),
        };
      
        const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
      const response = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((data) => {
          console.log("Service added successfully:", data);
          alert("Service added successfully!");
          router.push("/service"); // Redirect to the service page after successful submission
          form.reset(); // Reset the form after successful submission
      }).catch((error) => {
          console.error("Error adding service:", error);
      });
    };
  return (
    <div className="p-4 text-center  rounded shadow-md space-y-2">
      <h1>Add New Service</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Service Name:</label>
          <input className="border p-2 rounded" type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea className="border p-2 rounded" id="description" name="description" required></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Add Service</button>
      </form>
    </div>
  );
}