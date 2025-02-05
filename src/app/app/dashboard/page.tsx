"use client";
import { AppSidebar } from "@/app/_components/Dashboard/Appsidebar";
import TaskCard from "@/app/_components/Home/TaskCard";
import React, { useEffect } from "react";
import {
  Belowsection,
  BelowsectionAdmin,
} from "@/app/_components/Dashboard/DashboardSections";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import {
  fetchCompetitions,
  fetchCompetitionsStats,
} from "@/lib/redux/actionCreators/competitionAction";
import { UserRoles } from "@/lib/redux/features/authReducer";

const page = () => {
  const dispatch = useAppDispatch();

  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { loading, competitions } = useAppSelector(
    (state) => state.competitions,
  );

  const { loading: statsLoading, stats } = useAppSelector(
    (state) => state.competitionsStats,
  );

  useEffect(() => {
    if (!competitions.competitions.length) {
      dispatch(fetchCompetitions());
    }

    dispatch(fetchCompetitionsStats());
  }, []);
  

  return (
    <>
      <div className="">
        <h4 className="text-2xl">Welcome back Hilaire,</h4>
        <p className="text-gray-500">
          Build Work Experience through Skills Challenges
        </p>
      </div>
      {user?.role &&
        [UserRoles.CLIENT, UserRoles.ADMIN].includes(user?.role) && (
          <BelowsectionAdmin stats={stats} />
        )}
      {user?.role === UserRoles.TALENT && <Belowsection />}
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
