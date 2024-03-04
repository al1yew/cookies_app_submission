import Image from "next/image";
import Container from "../shared/Container";

const Hero = () => {
  return (
    <section className="w-full relative">
      <Container>
        <div
          className="absolute -left-8 -top-32 
        bg-gradient-to-br from-[#e74d5c1d] via-white to-white
        w-screen h-[800px] z-[-3]"
        />
        <Image
          src="/images/cells.svg"
          width={1}
          height={1}
          alt="cells"
          className="hidden lg:block absolute -top-20 -right-0 w-1/2 h-screen z-[-2]"
        />
        <div className="absolute left-1/2 -top-18 -translate-x-1/2 -z-[1]">
          <div className="relative">
            <Image
              src="/images/redCloud.svg"
              width={171}
              height={171}
              alt="icon"
              className="z-10"
            />
            <Image
              src="/images/tick.svg"
              width={75}
              height={75}
              alt="tick"
              className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
            />
          </div>
        </div>
        <div
          className="mt-32
        mx-auto lg:w-[869px] shadow-2xl rounded-3xl z-30 
        bg-white bg-opacity-95 flex flex-col items-center py-6 lg:py-12 px-4 lg:px-28 gap-1 lg:gap-4"
        >
          <h3 className="text-appRed text-md lg:text-2xl font-medium uppercase tracking-widest pt-8 lg:pt-0">
            Effortless
          </h3>
          <h1 className="font-black text-[40px] lg:text-[80px] leading-[40px] lg:leading-[80px]">
            Cookie Consent
          </h1>
          <h5 className="font-normal text-appGray text-md lg:text-lg text-center mt-4">
            Expert-led{" "}
            <strong className="text-black">Cookie Management Services</strong>{" "}
            <br /> Tailored for Your Business Needs.
          </h5>
          {/* form */}
          {/* gdpa things */}
          <p className="text-sm lg:text-md font-normal text-center text-[#898080] mt-4 lg:mt-0">
            Our comprehensive cookie consent services handle everything from
            initial cookie audits to ongoing compliance monitoring, ensuring
            your website adheres to all relevant regulations without you having
            to lift a finger.
          </p>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
