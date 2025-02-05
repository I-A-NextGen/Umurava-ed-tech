"use client";

import TaskCard from "@/app/_components/Home/TaskCard";
import { Button } from "@/components/ui/button";
import { fetchCompetitions } from "@/lib/redux/actionCreators/competitionAction";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const path = usePathname();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCompetitions());
  }, []);

  const { loading, competitions } = useAppSelector(
    (state) => state.competitions,
  );
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
            <span className="ml-4 text-umurava">{path.replace("/", " ")}</span>
          </p>
        </div>
      </div>
      <div className="flex min-h-screen flex-wrap gap-4 px-8 pb-32 md:grid-cols-2 md:px-16 lg:grid-cols-4">
        {competitions.competitions.map((competition) => (
          <TaskCard
            size={19}
            competitionData={competition}
            key={competition.id}
          />
        ))}
      </div>
    </>
  );
};

export default Page;
