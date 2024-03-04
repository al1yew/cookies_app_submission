"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleOutsideClicks = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClicks);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClicks);
    };
  }, []);

  return (
    modalIsOpen && (
      <div className="fixed inset-0 z-[99999999999999] flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
        <div
          ref={modalRef}
          className="bg-white w-[92%] lg:w-[650px] px-3 py-4 lg:p-8 rounded-3xl flex flex-col items-start relative"
        >
          <Image
            src="/images/cells.svg"
            width={1}
            height={1}
            alt="cells"
            className="absolute top-0 right-0 w-1/2 h-full"
          />
          <span
            onClick={() => setModalIsOpen(false)}
            className="absolute -top-3 -right-3 lg:-top-5 lg:-right-5 bg-white rounded-full flex justify-center items-center border border-gray-100 p-2 lg:p-3"
          >
            <Image src="/images/close.svg" width={25} height={25} alt="close" />
          </span>
          <h1 className="text-5xl lg:text-64 text-black font-black mb-8">
            GDPR
          </h1>
          <p className="text-xl font-medium mb-6">
            <strong>GDPR</strong>, or{" "}
            <strong>General Data Protection Regulation</strong>, is a
            comprehensive data privacy law in the EU that protects personal data
            and privacy, giving individuals more control over their personal
            information.
          </p>
          <Link className="text-appRed font-black text-xl mb-10" href="/">
            Learn More
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
            <button
              className="bg-black rounded-full col-span-1 text-center p-3 text-white font-bold text-xl"
              onClick={() => setModalIsOpen(false)}
            >
              Close
            </button>
            <Link
              href="/info"
              className="bg-appRed text-white flex justify-center items-center 
              py-3 rounded-full [&>*]:hover:scale-105 col-span-1"
            >
              <span className="text-lg tracking-wide transition-transform transform text-white">
                Check Your Website
              </span>
              <Image
                src="/images/arrow.svg"
                width={25}
                height={24}
                alt="arrow"
                className="transition-transform transform ml-4"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
