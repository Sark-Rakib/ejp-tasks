import React from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Best Products",
    excerpt:
      "Learn the tips and tricks for selecting the best products for your needs.",
    date: "2025-11-26",
  },
  {
    id: 2,
    title: "Top 10 Gadgets of 2025",
    excerpt: "A curated list of the top 10 must-have gadgets this year.",
    date: "2025-11-20",
  },
  {
    id: 3,
    title: "Beginner’s Guide to Online Shopping",
    excerpt: "Everything you need to know to shop safely and smartly online.",
    date: "2025-11-15",
  },
  {
    id: 4,
    title: "Why Quality Matters",
    excerpt:
      "Understanding the importance of quality over quantity in every purchase.",
    date: "2025-11-10",
  },
  {
    id: 5,
    title: "Eco-friendly Shopping Tips",
    excerpt: "Simple ways to make your shopping habits more sustainable.",
    date: "2025-11-05",
  },
  {
    id: 6,
    title: "How to Spot Fake Products Online",
    excerpt: "Tips to identify authentic products when shopping online.",
    date: "2025-11-01",
  },
];

export default function Blog() {
  return (
    <div className="bg-base-100 px-5 md:px-20 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Our Blog
      </h1>

      <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-700 mb-12">
        Stay updated with our latest news, tips, and product guides.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.excerpt}</p>
            <p className="text-gray-400 text-sm mb-4">
              Published on {blog.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
