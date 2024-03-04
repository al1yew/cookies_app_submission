"use client";
import { useState } from "react";
import Button from "../shared/Button";
import Image from "next/image";

const HeroForm = () => {
  const [formData, setFormData] = useState({
    url: "",
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
    if (!formData.url.startsWith("https://")) {
      setError('Please enter a valid URL starting with "https://".');
      return;
    }

    //potom axios

    setFormData({
      url: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 bg-[#FAFAFA] rounded-2xl w-full grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4 border border-gray-100 mt-4 lg:mt-0"
    >
      <input
        placeholder="Your Website..."
        type="text"
        id="url"
        name="url"
        value={formData.url}
        onChange={handleChange}
        className="p-3 rounded-xl outline-none col-span-1 lg:col-span-2 italic border border-gray-100 font-medium tracking-wider"
      />
      <button
        type="submit"
        className="bg-appRed text-white lg:rounded-l-xl lg:rounded-r-3xl rounded-full flex justify-center gap-4 lg:gap-0 lg:justify-around items-center 
        py-3 col-span-1 [&>*]:hover:scale-105"
      >
        <span className="text-white text-lg tracking-wide transition-transform transform">
          Get Started
        </span>
        <Image
          src="/images/arrow.svg"
          width={25}
          height={24}
          alt="arrow"
          className="transition-transform transform"
        />
      </button>
      {error && (
        <p className="text-appRed text-sm lg:text-md col-span-1 lg:col-span-3">
          {error}
        </p>
      )}
    </form>
  );
};
export default HeroForm;
