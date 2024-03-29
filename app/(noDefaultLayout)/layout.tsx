import localFont from "next/font/local";
import "../globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Bold.otf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Black.otf",
      style: "normal",
      weight: "900",
    },
  ],
});

export const metadata = {
  title: "Sign In | Register",
  description: "Sign In | Register",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <main className="overflow-hidden relative">{children}</main>
      </body>
    </html>
  );
}
