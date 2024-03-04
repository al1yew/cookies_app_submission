"use client";
import { useState } from "react";

const HeroForm = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    url: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.url.startsWith("https://")) {
      setError('Please enter a valid URL starting with "https://".');
      return;
    }

    //do axios

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
        className="p-3 rounded-xl outline-none col-span-1 lg:col-span-2 italic border border-gray-100 font-medium tracking-wider"
      />
      <button type="submit">dsadsad</button>
      {error && (
        <p className="text-appRed text-sm lg:text-md col-span-1 lg:col-span-3">
          {error}
        </p>
      )}
    </form>
  );
};
export default HeroForm;
