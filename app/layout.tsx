import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/bigt/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Tasin",
  description: "Personal Portfolio Site that showcases skills, achievements, projects of Nur Tasin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-[100vh] w-[100vw] overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
