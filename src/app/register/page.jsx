"use client";

import SocialLogIn from "@/Component/SocialLogIn";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="space-y-2 w-11/12 mx-auto bg-base-200 p-5 my-10 md:w-100">
      <h1 className="font-bold text-4xl">Create an Account</h1>
      <p>Register with MyShop</p>

      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />

          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            })}
            className="input w-full"
            placeholder="Password"
          />

          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}

          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer
            </p>
          )}

          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must have at least one uppercase, one lowercase, one
              number and one special character
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn bg-[#CAEB66] mt-4">Register</button>
        </fieldset>

        <p className="text-center">Or</p>
      </form>
      <SocialLogIn></SocialLogIn>
      <h1 className="mt-5">
        Already have an account ?{" "}
        <Link className="text-red-500" href="login">
          Login
        </Link>
      </h1>
    </div>
  );
}
