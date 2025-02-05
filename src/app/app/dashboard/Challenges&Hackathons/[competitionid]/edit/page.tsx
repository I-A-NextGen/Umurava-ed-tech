"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import CompetitionForm from "@/app/_components/Dashboard/CompetitionForm";
import TopNavbar from "@/app/_components/Dashboard/TopNavbar";

const page = () => {
  const router = usePathname();
  return (
    <>
      <div className="grid w-full place-items-center py-16">
        <TopNavbar
          routes={[
            {
              label: "Challenges & Hackathons",
              link: "/app/dashboard/Challenges&Hackathons",
            },
            {
              label: "CompetitionForm.",
              link: "",
            },
            {
              label: "Edit",
              link: "",
            },
          ]}
        />
        <div className="flex w-[42rem] flex-col items-center gap-6 rounded-xl border border-gray-300 bg-white p-4">
          <h4 className="-mb-4 mt-4">Edit a Challenge</h4>
          <p className="text-gray-400">
            Fill out these details to build your broadcast
          </p>
          <CompetitionForm mode="edit" />
        </div>
      </div>
    </>
  );
};

export default page;
