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
    </>
  );
};
export default Info;
