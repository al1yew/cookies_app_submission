"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useEffect, useRef, useState } from "react";
import { HEADERLINKS } from "@/lib/constants";

const Navbar = () => {
  const [sidebarIsShown, setSidebarIsShown] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClicks);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClicks);
    };
  }, [sidebarRef]);

  const handleOutsideClicks = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setSidebarIsShown(false);
    }
  };

  return (
    <header
      className={`w-full z-[99999] fixed top-0 left-0 bg-transparent duration-200 ${
        isScrolled ? "py-3 bg-opacity-40 bg-white" : "py-4"
      }`}
    >
      <Container>
        <div className="flexBetween">
          <span
            className="flexCenter sm:hidden px-2"
            onClick={() => setSidebarIsShown(true)}
          >
            <Image
              src="/images/menu.svg"
              width={24}
              height={24}
              alt="menu"
              className="cursor-pointer"
            />
            <span className="h-8 w-[0.5px] bg-gray-300 ml-4"></span>
          </span>

          <div
            ref={sidebarRef}
            className={`sidebar z-[999999] absolute top-0 bg-white bg-opacity-90 h-screen w-[80%] max-w-[300px] duration-300 p-10 
            ${sidebarIsShown ? "left-[0%]" : "-left-[100%]"} `}
          >
            <ul>
              <li
                className="mb-4 w-fit"
                onClick={() => setSidebarIsShown(false)}
              >
                <Link href="/" className="font-bold text-xl">
                  Home
                </Link>
              </li>
              {HEADERLINKS.map((link, i) => {
                return (
                  <li
                    key={i}
                    className="mb-4"
                    onClick={() => setSidebarIsShown(false)}
                  >
                    <Link href={link.href} className="font-bold text-xl">
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <span
              className="absolute top-0 right-0 rounded-full text-3xl p-3 cursor-pointer"
              onClick={() => setSidebarIsShown(false)}
            >
              <Image
                src="/images/close.svg"
                width={25}
                height={25}
                alt="close"
              />
            </span>
          </div>

          <Link
            href="/"
            className="flexStart [&>*:first-child]:hover:rotate-180"
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
          <ul className="hidden lg:flex justify-end items-center">
            {HEADERLINKS.map((link, i) => {
              return (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="font-bold text-md ml-8 hover:underline"
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <span className="block lg:hidden"></span>
          <div className="block lg:hidden" />
        </div>
      </Container>
    </header>
  );
};
export default Navbar;
