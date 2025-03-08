"use client";
import React, { CSSProperties, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import TaskCard from "@/app/_components/Home/TaskCard";
import Link from "next/link";
import { FilterIcon, Plus, Search } from "lucide-react";
import Breadcrumbs from "@/app/_components/Dashboard/BreadcrumbsNav";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import {
  fetchCompetitions,
  fetchCompetitionsStats,
} from "@/lib/redux/actionCreators/competitionAction";
import { UserRoles } from "@/lib/redux/features/authReducer";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const page = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "open" | "ongoing" | "completed"
  >("all");

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const { loading: statsLoading, stats } = useAppSelector(
    (state) => state.competitionsStats,
  );

  const { loading, competitions } = useAppSelector(
    (state) => state.competitions,
  );

  useEffect(() => {
    if (!competitions.competitions.length) dispatch(fetchCompetitions());
  }, []);

  useEffect(() => {
    if (stats.all.competitions === 0) {
      dispatch(fetchCompetitionsStats());
    }
  }, [stats]);

  return (
    <>
      <div>
        <h4 className="text-2xl">Challenges</h4>
        <p className="text-gray-500">
          Join a challenge or a hackathon to gain valuable work experience,
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-sm">
            <div
              onClick={() => setActiveTab("all")}
              className={`${activeTab === "all" ? "border-orange-200 bg-umurava/25" : "group border-gray-300 bg-gray-200/60"} flex cursor-pointer items-center gap-2 rounded border p-3 text-black duration-300 hover:border-orange-200 hover:bg-umurava/25`}
            >
              <IoDocumentTextOutline />
              <span className="text-nowrap">All Challenge</span>
              <span
                className={`${activeTab === "all" ? "bg-umurava text-white" : "bg-gray-300"} rounded-xl px-2 group-hover:bg-umurava group-hover:text-white`}
              >
                {competitions.totalCompetitions}
              </span>
            </div>
            <div
              onClick={() => setActiveTab("completed")}
              className={`${activeTab === "completed" ? "border-orange-200 bg-umurava/25" : "group border-gray-300 bg-gray-200/60"} flex cursor-pointer items-center gap-2 rounded border p-3 text-black duration-300 hover:border-orange-200 hover:bg-umurava/25`}
            >
              <IoDocumentTextOutline />
              <span className="text-nowrap">Completed Challenge</span>
              <span
                className={`${activeTab === "completed" ? "bg-umurava text-white" : "bg-gray-300"} rounded-xl px-2 group-hover:bg-umurava group-hover:text-white`}
              >
                {stats.all.completed}
              </span>
            </div>
            <div
              onClick={() => setActiveTab("open")}
              className={`${activeTab === "open" ? "border-orange-200 bg-umurava/25" : "group border-gray-300 bg-gray-200/60"} flex cursor-pointer items-center gap-2 rounded border p-3 text-black duration-300 hover:border-orange-200 hover:bg-umurava/25`}
            >
              <IoDocumentTextOutline />
              <span className="text-nowrap">Open Challenge</span>
              <span
                className={`${activeTab === "open" ? "bg-umurava text-white" : "bg-gray-300"} rounded-xl px-2 group-hover:bg-umurava group-hover:text-white`}
              >
                {stats.all.open}
              </span>
            </div>
            <div
              onClick={() => setActiveTab("ongoing")}
              className={`${activeTab === "ongoing" ? "border-orange-200 bg-umurava/25" : "group border-gray-300 bg-gray-200/60"} flex cursor-pointer items-center gap-2 rounded border p-3 text-black duration-300 hover:border-orange-200 hover:bg-umurava/25`}
            >
              <IoDocumentTextOutline />
              <span className="text-nowrap">Ongoing Challenge</span>
              <span
                className={`${activeTab === "ongoing" ? "bg-umurava text-white" : "bg-gray-300"} rounded-xl px-2 group-hover:bg-umurava group-hover:text-white`}
              >
                {stats.all.ongoing}
              </span>
            </div>
          </div>
          {(user?.role === UserRoles.ADMIN ||
            user?.role === UserRoles.CLIENT) && (
            <Button className="rounded-lg bg-umurava py-7 text-white duration-300 hover:bg-umurava/80">
              <Link
                href={"create-new-challenge"}
                className="flex items-center justify-center gap-2"
              >
                <Plus />
                <span className="">Create New Challenge</span>
              </Link>
            </Button>
          )}
        </div>
        <div className="mt-6  text-center">
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
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3 gap-x-6 gap-y-4">
          {!loading &&
            competitions.competitions.map((competition) => {
              if (activeTab === "all") {
                return (
                  <TaskCard
                  className="w-full "
                    size={20.5}
                    competitionData={competition}
                    key={competition.id}
                  />
                );
              }
              if (competition.status === activeTab) {
                return (
                  <TaskCard
                    size={20.5}
                    competitionData={competition}
                    key={competition.id}
                  />
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default page;
