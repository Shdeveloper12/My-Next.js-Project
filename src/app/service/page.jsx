import Image from "next/image";
import Link from "next/link";
import React from "react";
import {  Roboto } from "next/font/google";


const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   subsets: ['latin']
});

 export const metadata = {
  title: "Service | Next.js App",
  description: "Explore our range of services.",

};

export const dynamic = "force-dynamic";

export default async function Service() {
  try {
    // For server-side rendering, we need to use the full URL
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_ADDRESS || 'http://localhost:3001';
    
    const res = await fetch(`${baseUrl}/api/items`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('Fetched data:', data); // For debugging

    return(
            <div className={`p-4 text-center ${roboto.className}`}>
                <h1>Service</h1>
                <p>Explore our range of services designed to meet your needs.</p>
                
                {data.error ? (
                    <div className="text-red-500 p-4">
                        Error: {data.error}
                    </div>
                ) : (
                    <div>
                        {data.items && data.items.length > 0 ? (
                            data.items.map((item) => (
                                <div key={item._id} className="border p-4 m-2">
                                    <h2 className="text-xl font-bold">{item.name}</h2>
                                    <p>{item.description}</p>
                                    <Link href={`/service/${item._id}`} className="text-blue-500 hover:underline">View Details</Link>
                                </div>
                            ))
                        ) : (
                            <div className="text-gray-500 p-4">
                                No items found. <Link href="/service/add" className="text-blue-500 hover:underline">Add a new service</Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
    );
  } catch (error) {
    console.error('Error in Service component:', error);
    return (
        <div className={`p-4 text-center ${roboto.className}`}>
            <h1>Service</h1>
            <div className="text-red-500 p-4">
                Failed to load services. Please try again later.
                <br />
                <small>Error: {error.message}</small>
            </div>
            <Link href="/service/add" className="text-blue-500 hover:underline">Add a new service</Link>
        </div>
    );
  }
}