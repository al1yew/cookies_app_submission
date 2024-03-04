import Image from "next/image";
import Container from "../shared/Container";

const Benefits = () => {
  return (
    <section className="w-full relative lg:mt-40 mt-20">
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
            <div className="w-full lg:w-[31%] h-[400px] bg-[#FBFBFB] rounded-2xl p-8 relative overflow-hidden border border-gray-100">
              <h2 className="font-black text-2xl mb-3">
                Automated Compliance Updates
              </h2>
              <p className="font-medium text-md text-[#110000]">
                Stay current with evolving laws. Our service automatically
                aligns your site with the latest cookie regulations.
              </p>
              <Image
                src="/images/ring.svg"
                width={460}
                height={460}
                alt="ring"
                className="-rotate-[30] absolute bottom-0 right-0"
              />
            </div>
            <div className="w-full lg:w-[41%] h-[400px] bg-black rounded-2xl p-8 relative overflow-hidden border border-gray-100">
              <h2 className="font-black text-2xl mb-3 text-white">
                Customizable Consent Banners
              </h2>
              <p className="font-medium text-md text-[#7B7B7B]">
                Tailor cookie banners to fit your brand. Customize design and
                messaging for seamless website integration.
              </p>
              <Image
                src="/images/table.svg"
                width={480}
                height={460}
                alt="ring"
                className="translate-x-1/2 absolute bottom-0 right-1/2 "
              />
            </div>
            <div className="w-full lg:w-[24%] h-[400px] bg-[#FBFBFB] rounded-2xl p-8 relative overflow-hidden border border-gray-100">
              <h2 className="font-black text-2xl mb-3">User Consent Logging</h2>
              <p className="font-medium text-md text-[#110000]">
                Reliable consent record-keeping. Securely log user consents to
                maintain comprehensive records
              </p>
              <Image
                src="/images/user.svg"
                width={220}
                height={220}
                alt="ring"
                className="absolute -bottom-4 right-1/2 translate-x-1/2"
              />
            </div>
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
