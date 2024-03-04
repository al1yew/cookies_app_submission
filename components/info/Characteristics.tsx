import Image from "next/image";
import Container from "../shared/Container";
import { CHARACTERISTICS } from "@/lib/constants";

const Characteristics = () => {
  return (
    <section className="w-full relative mt-20">
      <Container>
        <Image
          src="/images/squares.svg"
          width={400}
          height={400}
          alt="squares"
          className="absolute -right-36 -top-24 hidden lg:block"
        />
        <div className="flex flex-col gap-8 lg:w-8/12 w-full mx-auto">
          {CHARACTERISTICS.map((char, i) => {
            return (
              <div className="col-span-1 flex flex-col justify-between">
                <h1 className="font-black lg:text-5xl text-2xl lg:mb-8 mb-5">
                  {char.title}
                </h1>
                <p className="font-medium lg:text-lg text-md text-[#5B5B5B] lg:mb-10 mb-5">
                  {char.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Characteristics;
