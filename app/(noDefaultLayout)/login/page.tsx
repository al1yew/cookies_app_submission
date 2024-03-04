"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
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
    //validate
    //axios

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <section className="w-full relative h-screen flex justify-center items-center  flex-wrap">
      <div className="bg-gradient-to-l from-gray-100 to-transparent lg:flex-1 h-full w-full py-5 px-4 lg:pl-20 lg:pr-8 xl:pl-32 xl:pr-16">
        <div className="lg:max-w-[700px] max-w-[480px] mx-auto flex flex-col justify-between h-full">
          <Link
            href="/"
            className="flexStart w-fit [&>*:first-child]:hover:rotate-180"
          >
            <Image
              src="/images/logo.svg"
              alt="Cookies Logo"
              width={27}
              height={27}
              className="transition-transform hover:rotate-180"
            />
            <span className="ml-4 font-black text-2xl">Cookie Service</span>
          </Link>
          <div className="flex flex-col gap-6">
            <h1 className="font-black lg:text-[48px] text-3xl mb-5">Login</h1>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl flex flex-col gap-5 justify-between items-start p-7 shadow-2xl "
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
                flex justify-center gap-4 lg:gap-0 lg:justify-around 
                items-center p-3 px-5 rounded-full [&>*]:hover:scale-105"
                >
                  <span className="text-white lg:text-lg text-sm tracking-wide transition-transform transform">
                    Login
                  </span>
                  <Image
                    src="/images/arrow.svg"
                    width={25}
                    height={24}
                    alt="arrow"
                    className="transition-transform transform lg:ml-5"
                  />
                </button>
              </div>
            </form>
            <div className="rounded-3xl bg-black lg:px-7 lg:py-4 p-4 flex items-center justify-between ">
              <div className="w-fit text-white font-medium lg:text-lg text-sm">
                Do not have an account yet?
              </div>
              <button
                className=" bg-white text-black 
                flex justify-center gap-4 lg:gap-0 lg:justify-around 
                items-center lg:py-3 lg:px-7 py-2 px-4 rounded-full [&>*]:hover:scale-105"
              >
                <span className="text-black lg:text-lg text-sm tracking-wide transition-transform transform">
                  Register
                </span>
                <Image
                  src="/images/blackarrow.svg"
                  width={25}
                  height={24}
                  alt="arrow"
                  className="transition-transform transform lg:ml-5"
                />
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="right lg:flex-1 flex flex-col gap-4 py-5 px-4 lg:pr-20 lg:pl-8 xl:pr-32 xl:pl-16">
        <h1 className="font-black text-[40px]">Automated Compliance Updates</h1>
        <p className="font-medium text-xl text-[#110000]">
          Stay current with evolving laws. Our service automatically aligns your
          site with the latest cookie regulations.
        </p>
        <Image
          src="/images/ring.svg"
          width={460}
          height={460}
          alt="ring"
          className="-rotate-[30] absolute bottom-0 right-0 hidden lg:block"
        />
      </div>
    </section>
  );
};
export default Login;
