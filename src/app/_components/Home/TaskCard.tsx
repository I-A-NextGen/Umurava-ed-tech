import { Button } from "@/components/ui/button";
import { Challenge } from "@/lib/utils";
import React from "react";

interface Item{
    id:number
}


const TaskCard = ({i}:{i:number}) => {
  return (
    <div
      key={i}
      className="text relative flex flex-col gap-4 rounded-lg p-4 capitalize"
    >
      <span className="absolute right-6 top-6 rounded-xl bg-green-700 p-2 px-4 text-white md:px-8">
        Open
      </span>
      <div className="bg-umurava min-h-56 w-full rounded-xl"></div>
      <h5>{Challenge.text}</h5>
      <h6 className="opacity-80">skills needed:</h6>
      <div className="flex flex-row flex-wrap gap-2  opacity-90">
        {Challenge.skills.map((skill, i) => (
          <span
            className="text-umurava hover:bg-umurava text-sm border-umurava rounded-xl border p-1 px-2 font-light duration-300 hover:text-white"
            key={i}
          >
            {skill}{" "}
          </span>
        ))}
      </div>
      <h6 className="opacity-80">
        Seniority Level:{" "}
        {Challenge.seniority.map((skill, i) => (
          <span
            className="cursor-pointer border font-light duration-300"
            key={i}
          >
            {skill}{" "}
          </span>
        ))}
      </h6>
      <h6>
        Timeline:{" "}
        <span className="font-normal"> {Challenge.timeline} Days</span>
      </h6>
      <Button className="bg-umurava size-fit font-semibold px-16 hover:bg-umuravadark duration-300">View Challenge</Button>
    </div>
  );
};

export default TaskCard;
