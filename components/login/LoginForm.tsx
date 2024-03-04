"use client";

import Image from "next/image";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!formData.password.trim()) {
      setError("Please enter your password.");
      return;
    }

    //axios

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl flex flex-col gap-5 justify-between items-start p-7 bg-white"
      style={{ boxShadow: "0 -20px 52px 1px rgba(0, 0, 0, 0.1)" }}
    >
      <input
        name="email"
        type="email"
        id="email"
        onChange={(e) => handleChange(e)}
        className="font-bold p-3 lg:text-lg text-md outline-none italic border-2 border-gray-100 rounded-xl w-full"
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        id="password"
        onChange={(e) => handleChange(e)}
        placeholder="Password"
        className="font-bold p-3 lg:text-lg text-md outline-none italic border-2 border-gray-100 rounded-xl w-full"
      />
      <div className="flex justify-between w-full items-center">
        <p className=" text-appRed text-sm lg:text-md w-fit">{error}</p>
        <button
          type="submit"
          className="bg-appRed text-white 
                flex justify-center lg:justify-around 
                items-center p-3 px-6 rounded-full [&>*]:hover:scale-105"
        >
          <span className="text-white lg:text-lg text-sm tracking-wide transition-transform transform">
            Login
          </span>
          <Image
            src="/images/arrow.svg"
            width={25}
            height={24}
            alt="arrow"
            className="transition-transform transform ml-3"
          />
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
