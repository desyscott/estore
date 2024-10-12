import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../../styles/globals.css";
// import Navbar from "@/components/Navbar";
import Nav_Bar from "@/components/Nav_bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esstore Store",
  description: "Esstore Ecommerce Store",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={inter.className}>
      {/* <Navbar /> */}
      <Nav_Bar />
      {children}
    </main>
  );
}
