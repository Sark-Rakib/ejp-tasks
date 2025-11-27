"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Items() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "all" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className=" bg-base-100 px-5 md:px-20 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Products</h1>
        <p className="text-lg md:text-xl text-gray-700">
          Browse through our wide selection of high-quality products.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="flex gap-5 md:flex justify-between my-10">
        <input
          type="text"
          placeholder="Search Products"
          className="input input-bordered"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-3">
                {item.description.split(" ").slice(0, 12).join(" ")}
                {item.description.split(" ").length > 12 ? "....." : ""}
              </p>

              <p className="text-gray-800 font-bold mb-4">{item.price}</p>
              <Link
                href={`/items/${item.id}`}
                className="btn btn-primary w-full"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
