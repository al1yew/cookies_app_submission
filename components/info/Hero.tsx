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
      </Container>
    </section>
  );
};
export default Hero;
