import Image from "next/image";
import Container from "../shared/Container";

const Hero = () => {
  return (
    <section className="w-full relative">
      <Container>
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
      </Container>
    </section>
  );
};
export default Hero;
