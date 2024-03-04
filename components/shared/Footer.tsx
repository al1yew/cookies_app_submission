import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { FOOTERLINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="w-full relative mt-16 mb-12">
      <Container>
        <div
          className="bg-[#FBFBFB] rounded-3xl p-5 lg:w-11/12 lg:max-w-[1100px] w-full mx-auto flex flex-col lg:flex-row 
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
          <ul className="flex flex-col lg:flex-row lg:justify-end justify-center items-center">
            {FOOTERLINKS.map((link, i) => {
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
