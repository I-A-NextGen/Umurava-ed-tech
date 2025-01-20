import { Button } from "@/components/ui/button";
import { navlinks } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex min-h-[96px] items-center font-dmsans justify-between px-8 md:px-16">
      <Link href={"/"}>Umurava</Link>
      <div className="flex flex-row gap-4">
        {
            navlinks.map((link,index) => (
                <Link key={index} href={link.href} className="duration-300 hover:text-blue-500">{link.label}</Link>
            ))
        }
      </div>
      <Button asChild size={"lg"}>
        <Link href={"/"}>Join the Program</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
