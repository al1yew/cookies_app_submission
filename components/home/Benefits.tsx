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
            56 41 percent
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Benefits;
