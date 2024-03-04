"use client";

import Image from "next/image";
import Button from "../shared/Button";
import { PRICING_PLANS } from "@/lib/constants";

const PricingPlans = () => {
  return (
    <section className="w-full relative mt-24">
      <div className="max-w-[1320px] mx-auto px-0 lg:px-10 xl:px-15">
        <div className="bg-black w-full lg:h-[550px] lg:w-10/12 lg:max-w-[900px] lg:rounded-3xl p-3 py-7 pb-3 lg:p-10 mx-auto relative ">
          <h2 className="font-normal text-md text-[#DBD1D1] text-center tracking-widest uppercase">
            Tailored solutions for every compliance requirement
          </h2>
          <h1 className="lg:text-5xl text-3xl font-black text-center mt-2 lg:mt-0 mb-8 lg:mb-4 text-white">
            Find Your Perfect Plan
          </h1>
          <div>
            <Image
              src="/images/squares.svg"
              width={400}
              height={400}
              alt="squares"
              className="absolute -right-[40%] -top-24 hidden lg:block"
            />
          </div>
          <div
            className="lg:absolute lg:-bottom-20 lg:left-1/2 lg:-translate-x-1/2 lg:gap-6 lg:w-5/6
          flex flex-wrap flex-col lg:flex-row justify-center items-center gap-3 w-full"
          >
            {PRICING_PLANS.map((plan, i) => {
              return (
                <div key={i}>
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
                          img
                          <span className="ml-3">{option}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="w-full">
                    <Button />
                    {/* reusable button */}
                  </div>
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
