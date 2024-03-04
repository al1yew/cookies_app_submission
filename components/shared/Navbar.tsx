import Image from "next/image";
import Container from "./Container";

const Navbar = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center">
          <span className="flexCenter sm:hidden px-2">
            <Image
              src="/images/menu.svg"
              width={24}
              height={24}
              alt="menu"
              className="cursor-pointer"
            />
            <span className="h-8 w-[0.5px] bg-gray-300 ml-4"></span>
          </span>
        </div>
      </Container>
    </header>
  );
};
export default Navbar;
