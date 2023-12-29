import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trophy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "grid min-h-[100svh] grid-rows-[auto_1fr_auto]",
        )}
      >
        <Header />

        <main>{children}</main>

        <Navbar />
      </body>
    </html>
  );
}
