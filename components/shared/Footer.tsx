import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { FOOTERLINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="w-full relative mt-16 mb-12">
      <Container>
        <div
          className="bg-[#FBFBFB] rounded-3xl p-5 xl:w-11/12 lg:max-w-[1100px] w-full mx-auto flex flex-col lg:flex-row 
        justify-between items-center"
        >
          <Link
            href="/"
            className="flex items-end justify-end [&>*:first-child]:hover:rotate-180"
          >
            <div className="flex items-center justify-start">
              <Image
                src="/images/logo.svg"
                alt="Cookies Logo"
                width={27}
                height={27}
                className="transition-transform hover:rotate-180"
              />
              <span className="ml-4 font-black text-2xl">Cookie Service</span>
            </div>
            <span className="text-[#919191] font-normal text-xs ml-2">
              By INCORE
            </span>
          </Link>
          {/* consider merging footer and header, they look same */}
          <ul className="flex flex-col lg:flex-row lg:justify-end justify-center items-center">
            {FOOTERLINKS.map((link, i) => {
              if (link.isRound) {
                return (
                  <li className="mt-8 lg:mt-0 lg:ml-8 py-2 px-4 rounded-full bg-black text-white">
                    <Link
                      href={link.href}
                      className="flex justify-center gap-4 lg:gap-0 lg:justify-around items-center "
                    >
                      <span className="text-lg tracking-wide mr-4">
                        {link.text}
                      </span>
                      <Image
                        src="/images/arrow.svg"
                        width={25}
                        height={24}
                        alt="arrow"
                      />
                    </Link>
                  </li>
                );
              }
              return (
                <li key={i} className="mt-8 lg:mt-0 text-center">
                  <Link
                    href={link.href}
                    className="font-bold text-md lg:ml-8 hover:underline"
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
