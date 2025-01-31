"use client";

import TaskCard from "@/app/_components/Home/TaskCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const path = usePathname();

  const taks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 8, 9, 5, 4, 4, 4];

  return (
    <>
      <div className="min-h-fit px-8 md:px-16">
        <div className="mt-16" />
        <div className="flex items-center pb-8">
          <Button className="" variant={"ghost"}>
            <ArrowLeft />
          </Button>
          <p>
            Go back{" "}
            <span className="text-umurava ml-4">{path.replace("/", " ")}</span>
          </p>
        </div>
      </div>
      <div className="grid min-h-screen grid-cols-1 gap-2 px-8 md:grid-cols-2 md:px-16 lg:grid-cols-4 pb-32">
        {taks.map((item, i) => (
          <TaskCard key={i} i={i} />
        ))}
      </div>
    </>
  );
};

export default Page;
