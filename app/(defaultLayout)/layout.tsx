import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Bold.otf",
      style: "bold",
      weight: "700",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Black.otf",
      style: "black",
      weight: "900",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
