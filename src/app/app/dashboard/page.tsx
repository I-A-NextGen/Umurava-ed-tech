"use client"
import { AppSidebar } from "@/app/_components/Dashboard/Appsidebar";
import TaskCard from "@/app/_components/Home/TaskCard";
import React, { useEffect } from "react";
import {
  Belowsection,
  BelowsectionAdmin,
} from "@/app/_components/Dashboard/DashboardSections";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { fetchCompetitions } from "@/lib/redux/actionCreators/competitionAction";

const page = () => {
  const user = "admin";

  const dispatch = useAppDispatch();

  const { loading, competitions } = useAppSelector(
    (state) => state.competitions,
  );

  useEffect(() => {
    if (!competitions.competitions.length) dispatch(fetchCompetitions());
  }, []);

  return (
    <>
      <div className="">
        <h4 className="text-2xl">Welcome back Hilaire,</h4>
        <p className="text-gray-500">
          Build Work Experience through Skills Challenges
        </p>
      </div>
      {user === "admin" ? <BelowsectionAdmin /> : <Belowsection />}
      <div className="">
        <h5>Recent Challenges</h5>
        <div className="mt-6 flex min-h-screen flex-wrap gap-x-5 gap-y-4">
          {competitions.competitions.map((competition) => (
            <TaskCard
              size={22}
              competitionData={competition}
              key={competition.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
