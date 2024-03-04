"use client";

import { PRICING_PLANS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const PricingPlans = ({ isHomePage }: { isHomePage?: boolean }) => {
  return (
    <section className="w-full relative mt-24 lg:mb-24">
      <div className="max-w-[1320px] mx-auto px-0 lg:px-10 xl:px-15">
        <div className="bg-black w-full lg:h-[550px] lg:w-11/12 lg:max-w-[1000px] lg:rounded-3xl p-3 pt-20 pb-3 lg:p-10 mx-auto relative ">
          <h2 className="font-normal text-md text-[#DBD1D1] text-center tracking-8 uppercase">
            Tailored solutions for every compliance requirement
          </h2>
          <h1 className="lg:text-5xl text-3xl font-black text-center mt-3 lg:mt-5 mb-8 lg:mb-4 text-white">
            Find Your Perfect Plan
          </h1>
          {isHomePage && (
            <Image
              src="/images/squares.svg"
              width={500}
              height={500}
              alt="squares"
              className="absolute -right-[45%] -top-44 hidden lg:block"
            />
          )}
          <div
            className="lg:absolute lg:-bottom-20 lg:left-1/2 lg:-translate-x-1/2 lg:gap-6 lg:w-9/12
          flex flex-wrap flex-col lg:flex-row justify-center items-center gap-3 w-full"
          >
            {PRICING_PLANS.map((plan, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    plan.isPreferred
                      ? "bg-appRed text-white"
                      : "bg-white text-black"
                  } p-8 flex flex-col justify-between items-start lg:flex-1 
                  h-[440px] max-w-[380px] w-full rounded-3xl shadow-md lg:hover:scale-105 duration-100 `}
                >
                  <h1 className="font-black text-3xl">{plan.name}</h1>
                  <p
                    className={`font-normal text-md mb-4 ${
                      plan.isPreferred ? "text-white" : "text-[#5B5B5B]"
                    }`}
                  >
                    {plan.text}
                  </p>
                  <p>
                    <span className="text-5xl font-black">${plan.price}</span>
                    <span
                      className={`text-md font-normal ${
                        plan.isPreferred ? "text-white" : "text-[#5B5B5B]"
                      }`}
                    >
                      {" "}
                      / month
                    </span>
                  </p>
                  <ul className="w-full">
                    {plan.options.map((option, i) => {
                      return (
                        <li
                          key={i}
                          className={`px-3 py-1 w-full rounded-lg ${
                            plan.isPreferred
                              ? "text-white bg-[#CA2B2B]"
                              : "text-black bg-[#F1EEED]"
                          } flex items-center justify-start mb-2 `}
                        >
                          <Image
                            src={
                              plan.isPreferred
                                ? "/images/whitetick.svg"
                                : "/images/blacktick.svg"
                            }
                            width={11}
                            height={11}
                            alt="tick"
                          />
                          <span className="ml-3">{option}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    href="/info"
                    className={`${
                      !plan.isPreferred
                        ? "bg-appRed text-white"
                        : "bg-white text-appRed"
                    } flex justify-center gap-4 items-center py-3 rounded-full w-full [&>*]:hover:scale-105`}
                  >
                    <span
                      className={`text-lg tracking-wide transition-transform transform ${
                        !plan.isPreferred ? "text-white" : "text-appRed"
                      }`}
                    >
                      Get Started
                    </span>
                    <Image
                      src={
                        !plan.isPreferred
                          ? "/images/arrow.svg"
                          : "/images/miniarrow.svg"
                      }
                      width={25}
                      height={24}
                      alt="arrow"
                      className="transition-transform transform"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingPlans;
