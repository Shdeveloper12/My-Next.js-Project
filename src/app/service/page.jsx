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
  const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env;
  const  res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
  const data = await res.json();


    return(
            <div className={`p-4 text-center ${roboto.className}`}>
                <h1>Service</h1>

                <p>Explore our range of services designed to meet your needs.</p>
                <div>
                    {data.items.map((item) => (
                        <div key={item._id} className="border p-4 m-2">
                          
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p>{item.description}</p>
                            <Link href={`/service/${item._id}`} className="text-blue-500 hover:underline">View Details</Link>
                        </div>
                    ))}
                </div>
                
            </div>

    )
}