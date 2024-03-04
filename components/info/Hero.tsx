import Image from "next/image";
import Container from "../shared/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full relative mt-32">
      <Container>
        <div
          className="absolute -left-8 -top-32 
        bg-gradient-to-br from-[#e74d5c11] via-white to-white
        w-screen h-[800px] z-[-3]"
        />
        <Image
          src="/images/cells.svg"
          width={1}
          height={1}
          alt="cells"
          className="hidden lg:block absolute top-12 -left-0 w-1/2 h-screen z-[-2] rotate-180"
        />
        <div className="w-full px-10 lg:w-2/3 mx-auto flex flex-col gap-8 tracking-widest ">
          <h1 className="font-black lg:text-[80px] text-3xl">GDPR</h1>
          <h5 className="lg:text-lg text-md font-medium text-[#7B6969] uppercase">
            Why It Matters for Your Website
          </h5>
          <p className="font-normal lg:text-xl text-lg mt-3 text-[#5B5B5B]">
            In today's digital landscape, data privacy has become a paramount
            concern, and the General Data Protection Regulation (GDPR) stands at
            the forefront of this movement. As an EU law, GDPR sets stringent
            standards for data protection, fundamentally reshaping the way
            businesses approach data privacy. It's not just an EU concern; any
            website with EU visitors must comply, making it a global priorit
          </p>
          <Link
            href="/login"
            className="bg-appRed text-white flex justify-center gap-4 lg:gap-0 lg:justify-around items-center 
        py-3 px-8 rounded-full w-fit [&>*]:hover:scale-105"
          >
            <span className="text-lg tracking-wide transition-transform transform text-white mr-5">
              Get Complaint Now
            </span>
            <Image
              src="/images/arrow.svg"
              width={25}
              height={24}
              alt="arrow"
              className="transition-transform transform"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
