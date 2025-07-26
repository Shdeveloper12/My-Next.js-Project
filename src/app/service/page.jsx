import Link from "next/link";
import React from "react";

export default function Service() {
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
    return(
            <div className="text-center">
                <h1>Service</h1>

                <p>Explore our range of services designed to meet your needs.</p>
                <div>
                    {
                        services.map((service) => (
                            <div key={service.id} className="border p-4 m-2 text-center space-y-2">
                                <h2>ID: {service.id}</h2>
                                <h3>Name: {service.name}</h3>
                                <img src={service.image} alt={service.name} className="w-80 h-auto mx-auto" />
                                <p>{service.details}</p>
                                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={`/service/${service.id}`}>Service Details</Link>
                            </div>
                        ))
                    }
                </div>
                
            </div>

    )
}