"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="py-10 px-5 bg-gray-50 rounded-xl">
      <div className="max-11/12 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-yellow-500">
                    {"⭐".repeat(review.rating)}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
