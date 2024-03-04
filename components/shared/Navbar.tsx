"use client";

import Image from "next/image";
import Container from "./Container";
import { useEffect, useState } from "react";

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
          <span className="flexCenter sm:hidden px-2">
            <Image
              src="/images/menu.svg"
              width={24}
              height={24}
              alt="menu"
              className="cursor-pointer"
            />
            <span className="h-8 w-[0.5px] bg-gray-300 ml-4"></span>
          </span>
        </div>
      </Container>
    </header>
  );
};
export default Navbar;
