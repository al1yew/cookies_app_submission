import Image from "next/image";
import Container from "../shared/Container";

const Feedback = () => {
  return (
    <section className="w-full relative mt-32">
      <Container>
        <div className="lg:w-10/12 lg:max-w-[900px] w-full mx-auto flex items-center justify-between flex-wrap gap-6 lg:gap-32">
          <div className="lg:flex-1">
            <p className="italic font-medium text-xl text-black">
              Aliquam tristique sed vulputate amet. Amet a orci nunc risus
              scelerisque varius placerat bibendum tristique. Ut pharetra non eu
              in cras ullamcorper viverra ac malesuada. Venenatis proin non
              magna ullamcorper nec adipiscing condimentum.
            </p>
            <h1 className="capitalize mt-6 lg:mt-10 font-black text-44">
              John Doe
            </h1>
            <h3 className="uppercase text-[#7B6969] text-md font-normal tracking-widest">
              Lorem Ipsum Company
            </h3>
          </div>

          <div className="lg:flex-1">
            <Image
              src="/images/feedbackuser.png"
              width={550}
              height={550}
              alt="user feedback"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Feedback;
