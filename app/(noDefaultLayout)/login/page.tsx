import Container from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <section className="w-full relative h-screen flex justify-center items-center">
      <Container>
        <div className="flex w-full justify-center items-center h-screen ">
          <div className="bg-[#A5A5A5] lg:flex-1 h-full py-5">
            <div className="logo">
              <Link
                href="/"
                className="flexStart [&>*:first-child]:hover:rotate-180"
              >
                <Image
                  src="/images/logo.svg"
                  alt="Cookies Logo"
                  width={27}
                  height={27}
                  className="transition-transform hover:rotate-180"
                />
                <span className="ml-4 font-black text-2xl">Cookie Service</span>
              </Link>
            </div>
            <h1 className="font-black lg:text-[56px] text-2xl">Login</h1>
            <form action="">
              <input type="text" />
              <input type="password" name="" id="" />
              <button>Login arrow</button>
            </form>
            <div>do not have account? reg</div>
          </div>
          <div className="right hidden lg:flex-1 lg:flex lg:flex-col gap-4">
            <h1 className="font-black text-[40px]">
              Automated Compliance Updates
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Login;
