import { FEATURES } from "@/lib/constants";
import Container from "../shared/Container";

const Features = () => {
  return (
    <section className="w-full relative mt-24">
      <Container>
        <div className="features">
          {FEATURES.map((feature, i) => {
            return <div></div>;
          })}
        </div>
      </Container>
    </section>
  );
};
export default Features;
