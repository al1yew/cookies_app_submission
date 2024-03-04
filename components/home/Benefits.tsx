import Image from "next/image";
import Container from "../shared/Container";

const Benefits = () => {
  return (
    <section className="w-full relative mt-40">
      <Container>
        <div>
          <h2 className="text-[#7B6969] font-normal text-md tracking-widest text-center lg:text-start">
            SUPERIOR BENEFITS
          </h2>
          <h1 className="font-black text-[32px] lg:text-[44px] text-center lg:text-start">
            Unlocking Efficiency and Security
          </h1>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex justify-between flex-wrap items-center w-full gap-5">
            31 41 23 percent
          </div>
          <div className="flex justify-between flex-wrap items-center w-full gap-5">
            <div className="w-full lg:w-[56%] h-[210px] bg-[#FBFBFB] rounded-2xl p-8 relative overflow-hidden border border-gray-100">
              <h2 className="font-black text-2xl mb-3">
                Real-time Cookie Scanning
              </h2>
              <p className="font-medium text-md text-[#110000] max-w-[320px] text-wrap">
                Instantly identify and categorize cookies.
                <br />
                Our real-time scanning ensures your website is always compliant.
              </p>
              <Image
                src="/images/circles.svg"
                width={400}
                height={400}
                alt="ring"
                className="absolute bottom-0 right-0 hidden lg:block"
              />
            </div>
            <div className="w-full lg:w-[41%] h-[210px] bg-black rounded-2xl p-8 relative overflow-hidden border border-gray-100 flex justify-between items-center gap-10">
              <Image
                src="/images/rotatedsmile.svg"
                width={110}
                height={110}
                alt="ring"
                className="hidden lg:block"
              />
              <div className="flex flex-col items-start justify-between">
                <h2 className="font-black text-2xl mb-3 text-white">
                  User Experience Optimization
                </h2>
                <p className="font-medium text-md text-[#7B7B7B]">
                  Enhance visitor satisfaction. Balance compliance with an
                  optimal user experience on your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Benefits;
