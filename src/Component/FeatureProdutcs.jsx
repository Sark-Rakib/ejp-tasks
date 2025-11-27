"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  // Take first 6 products
  const featured = products.slice(0, 6);

  return (
    <section className="py-16 mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
          >
            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-xl mb-4"
              />
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 mb-3">
              {item.description.split(" ").slice(0, 12).join(" ")}
              {item.description.split(" ").length > 12 ? "....." : ""}
            </p>
            <p className="text-gray-500 text-sm">{item.category}</p>
            <p className="text-xl font-bold mt-2">{item.price}</p>
            <Link href={`/items/${item.id}`} className="btn btn-primary w-full">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
