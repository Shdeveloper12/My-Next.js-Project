import React from "react";

export default function Details({params}){
    const { id } = params;
    
    const services = [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "image": "https://picsum.photos/id/1080/300/200",
      "details": "Noise-cancelling Bluetooth headphones with 30hr battery"
    },
    {
      "id": 2,
      "name": "Smart Watch",
      "image": "https://picsum.photos/id/119/300/200",
      "details": "Fitness tracker with heart rate monitor and GPS"
    },
    {
      "id": 3,
      "name": "VR Headset",
      "image": "https://picsum.photos/id/106/300/200",
      "details": "Immersive virtual reality experience with motion tracking"
    },
    {
      "id": 4,
      "name": "DSLR Camera",
      "image": "https://picsum.photos/id/250/300/200",
      "details": "24MP sensor with 4K video recording"
    },
    {
      "id": 5,
      "name": "Gaming Laptop",
      "image": "https://picsum.photos/id/180/300/200",
      "details": "RTX 4070, 32GB RAM, 1TB SSD"
    }
  ]
  const singleData = services.find((item) => item.id === parseInt(id));
    return(

        <div className="text-center border border-green-400 p-4 m-2">
            <img src={singleData.image} alt={singleData.name} className="w-80 h-auto mx-auto " />
            <h1>Id: {id}</h1>
            <h1>Name: {singleData.name}</h1>
            <p>{singleData.details}</p>
        </div>
    )


}