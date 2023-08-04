"use client";
import { Saira_Stencil_One } from "next/font/google";
import { MagnifyingGlass } from "@phosphor-icons/react";
import CartControl from "./CartControl";

const saira = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
  // variable: "--font-saira",
});

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between py-5 px-40">
        <div className={saira.className}>
          <a href="" className="text-logo font-normal text-4xl">
            capputeeno
          </a>
        </div>
        <div className="relative">
          <input
            alt="asd"
            placeholder="Procurando por algo especifico?"
            className="w-80 rounded-lg bg-branco py-2 px-2 text-sm font-mon text-dark border-none"
          />

          <MagnifyingGlass
            className="text-dark absolute right-5 bottom-[18px] translate-y-2/4"
            size={24}
          />
        </div>
        <CartControl />
      </div>
    </>
  );
}
