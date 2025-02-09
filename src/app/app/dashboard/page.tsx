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
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
      {statsLoading && (
        <div className="w-full gap-4">
          {user?.role !== UserRoles.TALENT &&
            Array.from({ length: 2 }, (_, i) => (
              <Skeleton
                key={i}
                baseColor="#e2e8f0"
                highlightColor="#f1f5f9"
                width="49%"
                className={`${i == 0 && "mr-[1.8%]"} h-28`}
                inline
              />
            ))}
          {Array.from({ length: 3 }, (_, i) => (
            <Skeleton
              baseColor="#e2e8f0"
              highlightColor="#f1f5f9"
              width="32%"
              className={`${i !== 2 && "mr-[1.8%]"} mt-5 h-28`}
              inline
            />
          ))}
        </div>
      )}
      {!statsLoading &&
        user?.role &&
        [UserRoles.CLIENT, UserRoles.ADMIN].includes(user?.role) && (
          <BelowsectionAdmin stats={stats} />
        )}
      {!statsLoading && user?.role === UserRoles.TALENT && (
        <Belowsection stats={stats} />
      )}

      <div className="min-h-[30rem] w-full">
        <div className="flex items-center justify-between">
          <h5>Recent Challenges</h5>
          <Link
            href="/app/dashboard/Challenges&Hackathons"
            className="flex items-center gap-1 text-umurava"
          >
            <span className="text-sm font-medium text-umurava">See all</span>
            <ChevronRight size={20} />
          </Link>
        </div>
        <div className="text-center">
          {loading &&
            Array.from({ length: 3 }, (_, i) => (
              <Skeleton
                baseColor="#e2e8f0"
                highlightColor="#f1f5f9"
                width="31%"
                className={`${i !== 2 && "mr-[1.8%]"} mt-5 h-[22rem]`}
                inline
              />
            ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-4">
          {!loading &&
            competitions.competitions
              .slice(0, 3)
              .map((competition) => (
                <TaskCard
                  size={20}
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
