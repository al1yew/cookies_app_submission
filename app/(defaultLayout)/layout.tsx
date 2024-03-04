import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cookies App",
  description: "Developed By Vasif Aliyev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="overflow-hidden relative">{children}</main>
      </body>
    </html>
  );
}
