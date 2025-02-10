"use client";
import { Button } from "@/components/ui/button";
import { navlinks } from "@/lib/utils/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="relative flex min-h-[96px] items-center justify-between px-8 md:px-24">
      <Link href={"/"} className="relative h-16 w-32">
        <Image
          src={"/Umurava logo.png"}
          fill
          className="object-contain"
          alt="Umuravalogo.png"
        />
      </Link>
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <RxCross2 /> : <Menu />}
        </button>
      </div>
      <div className="hidden flex-row gap-6 lg:flex">
        {navlinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="duration-300 hover:text-blue-500"
          >
            {link.label}
          </Link>
        ))}
      </div>
      {isMenuOpen && (
        <div className="absolute left-0 top-[96px] z-30 flex h-fit w-full flex-col gap-6 rounded-xl bg-white shadow-lg p-12">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-xl font-bold duration-300 hover:text-blue-500"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size={"lg"} className="mt-5">
            <Link href={"/app/dashboard"}>Join the Program</Link>
          </Button>
        </div>
      )}
      <Button
        asChild
        size={"lg"}
        className="hidden items-center justify-center bg-umuravadark lg:flex"
      >
        <Link href={"/app/dashboard"}>Join the Program</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
