import React from "react";
export async function generateMetadata({ params}) {
  const id = (await params).id;


  return {
    title: `Service Details | ${id}`,
    description: `Learn more about our ${id} service.`,
  }
}
export default async function Details({params}) {
    const { id } = await params;

    const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env;
  const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const item = data.item || data; // Handle different response structures

  
  return (
        <div className="text-center border border-green-400 p-4 m-2">
            <h1>Id: {id}</h1>
            <h1>Name: {item.name || 'No name available'}</h1>
            <p>Description: {item.description || 'No description available'}</p>
            
    
        </div>
    )


}