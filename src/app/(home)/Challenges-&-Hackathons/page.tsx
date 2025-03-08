"use client";

import TaskCard from "@/app/_components/Home/TaskCard";
import { Button } from "@/components/ui/button";
import { fetchCompetitions } from "@/lib/redux/actionCreators/competitionAction";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
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
          <Link href="/" className="flex items-center justify-center gap-2">
            <Button className="border rounded-md p-3 size-6" variant={"ghost"}>
              <ArrowLeft />
            </Button>
            <p>Go back</p>
          </Link>
          <p>
            <span className="ml-4 text-umurava">{path.replace("/", " ")}</span>
          </p>
        </div>
      </div>
      <div className=" justify-center grid grid-cols-1 gap-4 px-8 pb-32 md:grid-cols-2 md:px-16 lg:grid-cols-4">
        {competitions.competitions.map((competition) => (
          <TaskCard
          className="w-full"
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
