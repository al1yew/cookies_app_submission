import Container from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <section className="w-full relative h-screen flex justify-center items-center">
      <div className="flex w-full justify-center items-center h-screen flex-wrap">
        <div className="bg-gradient-to-l from-gray-100 to-transparent lg:flex-1 h-full py-5 flex flex-col justify-between px-4 lg:pl-20 lg:pr-8 xl:pl-32 xl:pr-16">
          <Link
            href="/"
            className="flexStart w-fit [&>*:first-child]:hover:rotate-180"
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
          <div className="flex flex-col gap-4">
            <h1 className="font-black lg:text-[56px] text-2xl mb-8">Login</h1>
            <form
              action=""
              className="rounded-3xl flex flex-col gap-5 justify-between items-start p-10 shadow-2xl"
            >
              <input
                type="email"
                className="font-bold p-5 outline-none italic border-2 border-gray-100 rounded-xl w-full"
                placeholder="Email"
              />
              <input
                type="password"
                placeholder="Password"
                className="font-bold p-5 outline-none italic border-2 border-gray-100 rounded-xl w-full"
              />
              <button
                className="self-end bg-appRed text-white 
                flex justify-center gap-4 lg:gap-0 lg:justify-around 
                items-center p-3 px-5 rounded-full [&>*]:hover:scale-105"
              >
                <span className="text-white text-lg tracking-wide transition-transform transform">
                  Login
                </span>
                <Image
                  src="/images/arrow.svg"
                  width={25}
                  height={24}
                  alt="arrow"
                  className="transition-transform transform ml-5"
                />
              </button>
            </form>
            <div className="rounded-3xl bg-black px-7 py-4 flex items-center justify-between">
              <div className="w-fit text-white font-medium text-xl">
                Do not have an account yet?
              </div>
              <button
                className=" bg-white text-black 
                flex justify-center gap-4 lg:gap-0 lg:justify-around 
                items-center p-3 px-5 rounded-full [&>*]:hover:scale-105"
              >
                <span className="text-white text-lg tracking-wide transition-transform transform">
                  Login
                </span>
                <Image
                  src="/images/arrow.svg"
                  width={25}
                  height={24}
                  alt="arrow"
                  className="transition-transform transform ml-5"
                />
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div className="right lg:flex-1 flex flex-col gap-4">
          <h1 className="font-black text-[40px]">
            Automated Compliance Updates
          </h1>
          <p className="font-medium text-xl text-[#110000]">
            Stay current with evolving laws. Our service automatically aligns
            your site with the latest cookie regulations.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Login;
