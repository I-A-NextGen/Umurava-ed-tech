"use client";
import { Button } from "@/components/ui/button";
import { navlinks } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex min-h-[96px] relative items-center justify-between px-8 md:px-16">
      <Link href={"/"}>Umurava</Link>
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <RxCross2 /> : <Menu />}
        </button>
      </div>
      <div className="flex-row hidden lg:flex gap-4">

        {
          navlinks.map((link, index) => (
            <Link key={index} href={link.href} className="duration-300 hover:text-blue-500">{link.label}</Link>
          ))
        }
      </div>
      {
        isMenuOpen && (
          <div className="absolute top-[96px] w-full h-fit left-0 z-30 bg-white flex flex-col gap-4 rounded-xl bg-white p-4">
            {
              navlinks.map((link, index) => (
                <Link key={index} href={link.href} className="duration-300 text-3xl font-bold hover:text-blue-500">{link.label}</Link>
              ))
            }
            <Button asChild size={"lg"} className="">
              <Link href={"/app/dashboard"}>Join the Program</Link>
            </Button>
          </div>
        )
      }
      <Button asChild size={"lg"} className="hidden  lg:flex items-center justify-center bg-umurava">
        <Link href={"/app/dashboard"}>Join the Program</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
