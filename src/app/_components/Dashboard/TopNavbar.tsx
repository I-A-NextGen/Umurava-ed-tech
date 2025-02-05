"use client";
import { FilterIcon, MoveLeft, Search } from "lucide-react";
import BreadcrumbsNav from "./BreadcrumbsNav";
import { Button } from "@/components/ui/button";

const TopNavbar = ({
  routes,
}: {
  routes: Array<{ label: string; link: string }>;
}) => {
  return (
    <div className="absolute left-0 top-0 flex h-16 w-full items-center justify-between border-y border-gray-300 bg-white px-8">
      <div className="flex items-center gap-x-3 text-gray-500">
        <div className="flex size-7 items-center justify-center rounded-lg border border-gray-300">
          <MoveLeft size={15} />
        </div>
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
