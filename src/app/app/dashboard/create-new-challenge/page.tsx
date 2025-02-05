"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { PulseLoader } from "react-spinners";
import CompetitionForm from "@/app/_components/Dashboard/CompetitionForm";
import TopNavbar from "@/app/_components/Dashboard/TopNavbar";
import { AuthWrapper } from "@/app/_components/Dashboard/AuthWrapper";

const page = () => {
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
              label: "Create New Challenge",
              link: "",
            },
          ]}
        />
        <div className="flex w-[42rem] flex-col items-center gap-6 rounded-xl border border-gray-300 bg-white p-4">
          <h4 className="-mb-4 mt-4">Create New Challenge</h4>
          <p className="text-gray-400">
            Fill out these details to build your broadcast
          </p>
          <CompetitionForm mode="new" />
        </div>
      </div>
    </>
  );
};

export default page;
