"use client";

import { IStatsState } from "@/lib/redux/features/competition/statsReducer";
import React, { useState } from "react";
import { FaArrowUpLong, FaPeopleGroup } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

export function Belowsection({ stats }: { stats: IStatsState["stats"] }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="flex flex-row items-center justify-between rounded-lg border bg-white px-4 py-6">
        <div className="border-l-4 border-umurava pl-2">
          <p className="text-sm text-slate-800 font-medium">Completed Challenges</p>
          <p className="font-semibold">{stats.all.completed || 0}</p>
        </div>
        <div className="rounded-full bg-umurava/20 p-2 text-umurava">
          <IoDocumentTextOutline className="" size={22} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border bg-white px-4 py-6">
        <div className="border-l-4 border-umurava pl-2">
          <p className="text-sm text-slate-800 font-medium">Open Challenges</p>
          <p className="font-semibold">{stats.all.open || 0}</p>
        </div>
        <div className="rounded-full bg-umurava/20 p-2 text-umurava">
          <IoDocumentTextOutline className="" size={22} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border bg-white px-4 py-6">
        <div className="border-l-4 border-umurava pl-2">
          <p className="text-sm text-slate-800 font-medium">Ongoing Challenges</p>
          <p className="font-semibold">{stats.all.ongoing || 0}</p>
        </div>
        <div className="rounded-full bg-umurava/20 p-2 text-umurava">
          <IoDocumentTextOutline className="" size={22} />
        </div>
      </div>
    </div>
  );
}

export function BelowsectionAdmin({ stats }: { stats: IStatsState["stats"] }) {
  const [filter, setFilter] = useState({
    competitions: "all",
    participants: "all",
    open: "all",
    completed: "all",
    ongoing: "all",
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-4 gap-4">
      <div className="lg:col-span-3 lg:row-span-2 h-[9.3rem] rounded-lg border bg-white py-6 px-4">
        <div className="flex size-full flex-col justify-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex-1" />
            <select
              className="cursor-pointer bg-transparent text-sm text-gray-500 outline-none"
              onChange={(e) =>
                setFilter((prevData) => ({
                  ...prevData,
                  competitions: e.target.value,
                }))
              }
            >
              <option value="all">All</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div className="flex flex-row items-center">
            <div className="size-fit rounded-full bg-umurava/20 p-4">
              <IoDocumentTextOutline className="text-umurava" size={24} />
            </div>
            <div className="flex flex-col items-start justify-center gap-1 p-4">
              <p className="text-sm text-gray-500">Total Challenge</p>
              <div className="flex flex-row items-center gap-2">
                <h6>
                  {stats[
                    filter.competitions as "all" | "week" | "month" | "year"
                  ].competitions || 0}
                </h6>
                <div className="flex flex-row items-center gap-1 rounded-xl bg-umurava/10 px-2 py-[2px]">
                  <FaArrowUpLong className="text-umurava" size={10} />
                  <span className="text-sm">
                    {stats.all.competitions
                      ? (stats[
                          filter.competitions as
                            | "all"
                            | "week"
                            | "month"
                            | "year"
                        ].competitions /
                          stats.all.competitions) *
                        100
                      : 0}
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-3 lg:col-start-4 lg:row-span-2 h-[9.3rem] rounded-lg border bg-white py-6 px-4">
        <div className="flex size-full flex-col justify-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex-1" />
            <select
              className="cursor-pointer bg-transparent text-sm text-gray-500 outline-none"
              onChange={(e) =>
                setFilter((prevData) => ({
                  ...prevData,
                  participants: e.target.value,
                }))
              }
            >
              <option value="all">All</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div className="flex flex-row items-center">
            <div className="size-fit rounded-full bg-umurava/20 p-4">
              <FaPeopleGroup className="text-umurava" size={24} />
            </div>
            <div className="flex flex-col items-start justify-center p-4">
              <p className="text-sm text-gray-500">Total Participants</p>
              <div className="flex flex-row items-center gap-2">
                <h6>
                  {
                    stats[
                      filter.participants as "all" | "week" | "month" | "year"
                    ].participants
                  }
                </h6>
                <div className="flex flex-row items-center gap-1 rounded-xl bg-umurava/10 px-2 py-[2px]">
                  <FaArrowUpLong className="text-umurava" size={10} />
                  <span className="text-sm">
                    {stats.all.participants
                      ? (stats[
                          filter.participants as
                            | "all"
                            | "week"
                            | "month"
                            | "year"
                        ].participants /
                          stats.all.participants) *
                        100
                      : 0}
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 lg:row-span-2 lg:row-start-3 h-[9.3rem] rounded-lg border bg-white py-6 px-4">
        <div className="flex size-full flex-col justify-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex-1" />
            <select
              className="cursor-pointer bg-transparent text-sm text-gray-500 outline-none"
              onChange={(e) =>
                setFilter((prevData) => ({
                  ...prevData,
                  completed: e.target.value,
                }))
              }
            >
              <option value="all">All</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div className="flex flex-row items-center">
            <div className="size-fit rounded-full bg-umurava/20 p-4">
              <IoDocumentTextOutline className="text-umurava" size={24} />
            </div>
            <div className="flex flex-col items-start justify-center p-4">
              <p className="text-sm text-gray-500">Completed Challenges</p>
              <div className="flex flex-row items-center gap-2">
                <h6>
                  {
                    stats[filter.completed as "all" | "week" | "month" | "year"]
                      .completed
                  }
                </h6>
                <div className="flex flex-row items-center gap-1 rounded-xl bg-umurava/10 px-2 py-[2px]">
                  <FaArrowUpLong className="text-umurava" size={10} />
                  <span className="text-sm">
                    {stats.all.completed
                      ? (stats[
                          filter.completed as "all" | "week" | "month" | "year"
                        ].completed /
                          stats.all.completed) *
                        100
                      : 0}
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-3 h-[9.3rem] rounded-lg border bg-white py-6 px-4">
        <div className="flex size-full flex-col justify-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex-1" />
            <select
              className="cursor-pointer bg-transparent text-sm text-gray-500 outline-none"
              onChange={(e) =>
                setFilter((prevData) => ({
                  ...prevData,
                  open: e.target.value,
                }))
              }
            >
              <option value="all">All</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div className="flex flex-row items-center">
            <div className="size-fit rounded-full bg-umurava/20 p-4">
              <IoDocumentTextOutline className="text-umurava" size={24} />
            </div>
            <div className="flex flex-col items-start justify-center p-4">
              <p className="text-sm text-gray-500">Open Challenges</p>
              <div className="flex flex-row items-center gap-2">
                <h6>
                  {stats[filter.open as "all" | "week" | "month" | "year"].open}
                </h6>
                <div className="flex flex-row items-center gap-1 rounded-xl bg-umurava/10 px-2 py-[2px]">
                  <FaArrowUpLong className="text-umurava" size={10} />
                  <span className="text-sm">
                    {stats.all.open
                      ? (stats[filter.open as "all" | "week" | "month" | "year"]
                          .open /
                          stats.all.open) *
                        100
                      : 0}
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 lg:col-start-5 lg:row-span-2 lg:row-start-3 h-[9.3rem] rounded-lg border bg-white py-6 px-4">
        <div className="flex size-full flex-col justify-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex-1" />
            <select
              className="cursor-pointer bg-transparent text-sm text-gray-500 outline-none"
              onChange={(e) =>
                setFilter((prevData) => ({
                  ...prevData,
                  ongoing: e.target.value,
                }))
              }
            >
              <option value="all">All</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div className="flex flex-row items-center">
            <div className="size-fit rounded-full bg-umurava/20 p-4">
              <IoDocumentTextOutline className="text-umurava" size={24} />
            </div>
            <div className="flex flex-col items-start justify-center p-4">
              <p className="text-sm text-gray-500">Ongoing Challenges</p>
              <div className="flex flex-row items-center gap-2">
                <h6>
                  {
                    stats[filter.ongoing as "all" | "week" | "month" | "year"]
                      .ongoing
                  }
                </h6>
                <div className="flex flex-row items-center gap-1 rounded-xl bg-umurava/10 px-2 py-[2px]">
                  <FaArrowUpLong className="text-umurava" size={10} />
                  <span className="text-sm">
                    {stats.all.ongoing
                      ? (stats[
                          filter.ongoing as "all" | "week" | "month" | "year"
                        ].ongoing /
                          stats.all.ongoing) *
                        100
                      : 0}
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
