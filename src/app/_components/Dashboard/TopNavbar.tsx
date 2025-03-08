"use client";
import { FilterIcon, MoveLeft, Search } from "lucide-react";
import BreadcrumbsNav from "./BreadcrumbsNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TopNavbar = ({
  routes,
}: {
  routes: Array<{ label: string; link: string }>;
}) => {
  return (
    <div className="md:absolute left-0 top-0 flex max-md:flex-col h-fit w-full md:items-center justify-between border-y border-gray-300 bg-white py-2 px-8">
      <div className="flex max-md:flex-col md:items-center gap-x-3 text-gray-500">
        <Link href={routes[routes.length - 2]?.link || ""} className="cursor-pointer flex size-7 md:items-center justify-center rounded-lg border border-gray-300">
          <MoveLeft size={15} />
        </Link>
        <span className="mr-2 text-gray-600">Go Back</span>
        <BreadcrumbsNav routes={routes} />
      </div>
      <div className="flex items-center text-sm">
        <Search className="mr-1 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="min-w-[20px] outline-none"
        />
        <Button variant={"ghost"} size={"icon"} className="w-fit text-gray-500">
          <FilterIcon />
          <span>Filter</span>
        </Button>
      </div>
    </div>
  );
};

export default TopNavbar;
