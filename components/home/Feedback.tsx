import Image from "next/image";
import Container from "../shared/Container";

const Feedback = () => {
  return (
    <section className="w-full relative mt-32">
      <Container>
        <div className="lg:w-10/12 lg:max-w-[1000px] w-full mx-auto flex items-center justify-between flex-wrap gap-6 lg:gap-32">
          <div className="lg:flex-1">
            dsadasdsa Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor, cupiditate voluptatum ducimus beatae obcaecati ut voluptates
            assumenda mollitia excepturi similique quia ex? Error minus
            veritatis itaque fugiat voluptatum aspernatur consequatur in qui
            fuga ipsam, atque, et quos reiciendis nobis mollitia.
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
