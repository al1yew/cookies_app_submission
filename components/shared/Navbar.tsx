"use client";

import Image from "next/image";
import Container from "./Container";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
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

  return (
    <header
      className={`w-full z-[99999] fixed top-0 left-0 bg-transparent duration-200 ${
        isScrolled ? "py-3 bg-opacity-40 bg-white" : "py-4"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <span className="flex justify-center items-center sm:hidden px-2">
            <Image
              src="/images/menu.svg"
              width={24}
              height={24}
              alt="menu"
              className="cursor-pointer"
            />
            <span className="h-8 w-[0.5px] bg-gray-300 ml-4"></span>
          </span>

          {/* sidebar */}

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

          {/* header links */}

          

        </div>
      </Container>
    </header>
  );
};
export default Navbar;
