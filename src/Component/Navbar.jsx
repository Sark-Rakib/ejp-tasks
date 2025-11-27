"use client";
import { AuthContext } from "@/Context/AuthContext";
import button from "daisyui/components/button";
import Link from "next/link";
import React, { useContext } from "react";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="w-11/12 mx-auto mt-5 sticky top-5 z-50 rounded-full px-5 navbar bg-base-100 shadow-sm">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>
        <p className="text-xl font-bold px-5">MyShop</p>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={logout} className="btn">
            LogOut
          </button>
        ) : (
          <Link href="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
