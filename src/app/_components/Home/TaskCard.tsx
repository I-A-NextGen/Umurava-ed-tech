import { Button } from "@/components/ui/button";
import { ICompetition } from "@/lib/redux/features/competition/competitionsReducer";
import { formatDuration } from "@/lib/utils/formatDuration";
import { cn } from "@/lib/utils/utils";
import Link from "next/link";
import React from "react";

const TaskCard = ({
  competitionData,
  size,
  className
}: {
  competitionData: ICompetition;
  size: number;
  className?:string
}) => {
  return (
    <div
      className={
        cn("rounded-xl border border-umuravadark/20 max-w-[26rem] capitalize w-full flex flex-col justify-between",className)
      }
      // style={{
      //   width: `${size}rem`,
      // }}
    >
      <div className="relative flex flex-col gap-4 p-4 ">
        <span className="absolute right-8 top-8 rounded-2xl bg-green-600 p-2 px-4 text-sm text-white md:px-6">
          {competitionData.status}
        </span>
        <div className="flex items-center justify-center  min-h-56 w-full rounded-xl bg-umurava">
          <img src={"/thumbnail.png"} alt="logo" />
        </div>
        <h6 className="h-7 leading-5">{competitionData.title}</h6>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-[.9rem] font-medium text-umuaravablack">
              skills needed:
            </span>
            <div className="flex flex-row flex-wrap gap-1">
              {competitionData.skills.map((skill, i) => (
                <span
                  className="rounded-xl border border-umurava p-1 px-2 text-xs text-umurava duration-300 hover:bg-umurava hover:text-white"
                  key={i}
                >
                  {skill}{" "}
                </span>
              ))}
            </div>
          </div>
          <div className="text-[.9rem]">
            <span className="font-medium text-umuaravablack">
              Seniority Level:&nbsp;
            </span>
            <span className="text-gray-500">
              ({competitionData.seniorityLevel.join(", ")})
            </span>
          </div>
          <div className="text-[.9rem]">
            <span className="font-medium text-umuaravablack">Timeline: </span>
            <span className="text-gray-500">
              {formatDuration(competitionData.duration)}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-umuravadark/20 p-4 h-16 flex items-center">
        <Button
          className="size-fit bg-umurava px-5 py-2 font-semibold duration-300 hover:bg-umurava/80"
          asChild
        >
          <Link
            href={`/app/dashboard/Challenges&Hackathons/${competitionData.id}`}
          >
            View Challenge
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
