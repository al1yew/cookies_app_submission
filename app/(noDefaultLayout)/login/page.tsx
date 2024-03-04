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
          <div>
            <h1 className="font-black lg:text-[56px] text-2xl mb-12">Login</h1>
            <form
              action=""
              className="rounded-3xl flex flex-col gap-5 justify-between items-start p-10 shadow-2xl"
            >
              <input
                type="text"
                className="font-bold p-5 text-gray-100 italic border border-gray-100 rounded-xl w-full"
                placeholder="Email"
              />
              <input
                type="password"
                placeholder="Password"
                className="font-bold p-5 text-gray-100 italic border border-gray-100 rounded-xl w-full"
              />
              <button className="">Login arrow</button>
            </form>
            <div>do not have account? reg</div>
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
