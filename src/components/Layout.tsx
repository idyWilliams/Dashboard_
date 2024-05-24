"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import Footer from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname();

  return (
    <div className="h-full bg-white">
      <motion.header
        layoutScroll
        className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
      >
        <Header />
      </motion.header>
      <div className=" flex h-full flex-col  pt-14 ">
        <main className="">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
