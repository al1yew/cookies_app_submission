import Image from "next/image";
import Container from "../shared/Container";
import Link from "next/link";
import Button from "../shared/Button";
import { STEPS } from "@/lib/constants";

const Management = () => {
  return (
    <section className="w-full relative mt-24">
      <Container>
        <div>
          <Image
            src="/images/cells2.svg"
            width={900}
            height={900}
            alt="cells"
            className="hidden lg:block absolute opacity-40 top-40 -left-32 w-2/3  z-[-2]"
          />
          <h2 className="text-[#7B6969] font-normal text-md tracking-widest text-center">
            COOKIE MANAGEMENT
          </h2>
          <h1 className="font-black text-[32px] lg:text-[44px] text-center">
            Your Path to Easy Compliance
          </h1>
        </div>
        <div className="flex justify-center gap-6 items-center mt-4">
          <Link
            className="flex justify-start items-center p-2 rounded-md border border-gray-100"
            href="/"
          >
            <span className="text-sm mr-3 font-medium">
              What is Cookie Consent
            </span>
            <span>
              <Image
                src="/images/miniarrow.svg"
                width={16}
                height={16}
                alt="mini arrow"
              />
            </span>
          </Link>
          <Link
            className="flex justify-start items-center p-2 rounded-md border border-gray-100"
            href="/#FAQ"
          >
            <span className="text-sm mr-3 font-medium">FAQ </span>
            <span>
              <Image
                src="/images/miniarrow.svg"
                width={16}
                height={16}
                alt="mini arrow"
                className="rotate-90"
              />
            </span>
          </Link>
        </div>
        <div className="rounded-3xl border border-gray-100 mx-auto w-fit mt-8 ">
          <Image
            src="/images/videoimg.png"
            width={600}
            height={600}
            alt="video"
            className="rounded-3xl"
          />
        </div>
        <div className="flex justify-between w-full flex-wrap px-4 lg:px-16 items-center gap-10 lg:gap-32 mt-12">
          {STEPS.map((step, i) => {
            return (
              <div key={i} className="w-full flex flex-col lg:flex-1">
                <Image
                  className="mb-3"
                  src={step.icon}
                  height={24}
                  width={24}
                  alt="icon"
                />
              </div>
            );
          })}
        </div>
        <Button />
        {/* reusable button again */}
      </Container>
    </section>
  );
};
export default Management;
