import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Nav_Bar from "@/components/Nav_bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esstore Store",
  description: "Esstore Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />

          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
