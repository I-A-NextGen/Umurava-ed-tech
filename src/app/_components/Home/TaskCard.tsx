import { Button } from "@/components/ui/button";
import { Challenge } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Item {
  id: number;
}

const TaskCard = ({ i }: { i: number }) => {


  const user = "user";

  return (
    <div
      key={i}
      className="text relative flex flex-col gap-4 rounded-xl border-2 border-umuravadark/20 p-5 capitalize"
    >
      <span className="absolute right-8 top-8 rounded-xl bg-green-700 p-2 px-4 text-white md:px-8">
        Open
      </span>
      <div className="min-h-56 w-full rounded-xl bg-umurava"></div>
      <h5>{Challenge.text}</h5>
      <div className="flex flex-col gap-2">
        <h6 className="text-umuaravablack text-lg">skills needed:</h6>
        <div className="flex flex-row flex-wrap gap-2">
          {Challenge.skills.map((skill, i) => (
            <span
              className="rounded-xl border border-umurava p-1 px-2 text-sm font-light text-umurava duration-300 hover:bg-umurava hover:text-white"
              key={i}
            >
              {skill}{" "}
            </span>
          ))}
        </div>
        <div className="text-lg"><span className="font-semibold">Seniority Level:</span> 
            (
            {Challenge.seniority.map((skill, i) => (
              <span
                className="cursor-pointer border text-lg font-normal  duration-300"
                key={i}
              >
                {skill}
                {i < Challenge.seniority.length - 1 ? "," : ""}
              </span>
            ))}
            )
        </div>
        <h6 className="text-umuaravablack text-lg">
          Timeline:{" "}
          <span className="font-normal"> {Challenge.timeline} Days</span>
        </h6>
      </div>
      <Button
        className="size-fit bg-umurava/60 px-10 font-semibold duration-300 hover:bg-umurava"
        asChild
      >
        <Link href={""}>View Challenge</Link>
      </Button>
    </div>
  );
};

export default TaskCard;
