import Image from "next/image";
import Container from "../shared/Container";

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
      </Container>
    </section>
  );
};
export default Management;
