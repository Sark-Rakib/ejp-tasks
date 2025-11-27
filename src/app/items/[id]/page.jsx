"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import PrivateRoute from "@/Component/PrivateRoute";
import Link from "next/link";

export default function ItemDetail() {
  const params = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(params.id));
        setItem(found);
      });
  }, [params.id]);

  if (!item) return <p>Loading...</p>;

  return (
    <PrivateRoute>
      <div className="max-w-4xl mx-auto py-16 px-5">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="relative w-full md:w-1/2 h-96">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
            <p className="text-gray-500 mb-4">{item.category}</p>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <p className="text-2xl font-bold mb-6">{item.price}</p>

            <button className="btn btn-primary">
              <Link href="/items">Back To Home</Link>
            </button>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
