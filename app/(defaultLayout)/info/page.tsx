import PricingPlans from "@/components/shared/PricingPlans";
import Characteristics from "@/components/info/Characteristics";
import Features from "@/components/info/Features";
import Hero from "@/components/info/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Information about service",
  description: "Cookie service - your tool!",
};

const Info = () => {
  return (
    <>
      <Hero />
      <Features />
      <Characteristics />
      <PricingPlans />
    </>
  );
};
export default Info;
