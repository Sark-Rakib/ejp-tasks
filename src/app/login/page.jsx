"use client";

import SocialLogIn from "@/Component/SocialLogIn";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="w-11/12 mx-auto bg-base-200 my-10 p-5 md:w-100">
      <div className="space-y-2">
        <h1 className="font-bold text-4xl">Welcome Back</h1>
        <p>Login with MyShop</p>

        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input w-full"
              placeholder="Password"
            />

            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 characters or longer
              </p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {/* Correct button */}
            <button type="submit" className="btn w-full bg-[#CAEB66] mt-4">
              Login
            </button>
          </fieldset>
        </form>

        <p className="text-center">Or</p>
        <SocialLogIn />
        <h1 className="mt-5 ">
          Dont have an account ?{" "}
          <Link className="text-red-500" href="register">
            Register
          </Link>
        </h1>
      </div>
    </div>
  );
}
