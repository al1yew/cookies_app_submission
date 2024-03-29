import { FEATURES } from "@/lib/constants";
import Container from "../shared/Container";
import Image from "next/image";

const Features = () => {
  return (
    <section className="w-full relative mt-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 bg-[#FBFBFB] lg:w-11/12 w-full p-10 rounded-3xl mx-auto">
          {FEATURES.map((feature, i) => {
            return (
              <div key={i} className="col-span-1 flex flex-col justify-between">
                <Image
                  src={feature.icon}
                  width={i % 2 != 0 ? 30 : 25}
                  height={i % 2 != 0 ? 30 : 25}
                  alt="icon"
                />
                <h1 className="font-black lg:text-2xl text-xl mt-3 mb-5">
                  {feature.title}
                </h1>
                <p className="font-medium lg:text-lg text-md text-[#5B5B5B] leading-180">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Features;
