"use client";

import React from "react";
import { FaArrowUpLong, FaPeopleGroup } from "react-icons/fa6";
import { IoMdDocument } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

export function Belowsection() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
      <div className="flex flex-row items-center justify-between rounded-md bg-white p-4">
        <div className="border-l-4 border-umurava p-4">
          <h6 className="opacity-70">Completed Challenges</h6>
          <p className="">05</p>
        </div>
        <div className="rounded-full bg-umurava/20 p-4 text-umurava">
          <IoDocumentTextOutline className="" size={24} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between rounded-md bg-white p-4">
        <div className="border-l-4 border-umurava p-4">
          <h6 className="opacity-70">Open Challenges</h6>
          <p className="">200</p>
        </div>
        <div className="rounded-full bg-umurava/20 p-4 text-umurava">
          <IoDocumentTextOutline className="" size={24} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between rounded-md bg-white p-4">
        <div className="border-l-4 border-umurava p-4">
          <h6 className="opacity-70">Ongoing Challenges</h6>
          <p className="">205</p>
        </div>
        <div className="rounded-full bg-umurava/20 p-4 text-umurava">
          <IoDocumentTextOutline className="" size={24} />
        </div>
      </div>
    </div>
  );
}

export function BelowsectionAdmin() {
  return (
    <div className="grid grid-cols-6 grid-rows-4 gap-4">
      <div className="col-span-3 row-span-2 h-[9.3rem] rounded-lg border bg-white p-4">
        <div className="flex size-full flex-col justify-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex-1" />
            <select className="text-sm text-gray-500">
              <option>This day</option>
              <option value="">This Week</option>
              <option value="">This Month</option>
            </select>
          </div>
          <div className="flex flex-row items-center">
            <div className="size-fit rounded-full bg-umurava/20 p-4">
              <IoDocumentTextOutline className="text-umurava" size={24} />
            </div>
            <div className="flex flex-col items-start justify-center gap-1 p-4">
              <p className="text-sm text-gray-500">Total Challenge</p>
              <div className="flex flex-row items-center gap-2">
                <h6>29,405</h6>
                <div className="flex flex-row items-center gap-1 rounded-xl bg-umurava/10 px-2 py-[2px]">
                  <FaArrowUpLong className="text-umurava" size={10} />
                  <span className="text-sm">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 col-start-4 row-span-2 h-[9.3rem] rounded-lg border bg-white p-4">
        <div className="flex size-full flex-col justify-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex-1" />
            <select className="text-sm text-gray-500">
              <option>This day</option>
              <option value="">This Week</option>
              <option value="">This Month</option>
            </select>
          </div>
          <div className="flex flex-row items-center">
            <div className="size-fit rounded-full bg-umurava/20 p-4">
              <FaPeopleGroup className="text-umurava" size={24} />
            </div>
            <div className="flex flex-col items-start justify-center p-4">
              <p className="text-sm text-gray-500">Total Participants</p>
              <div className="flex flex-row items-center gap-2">
                <h6>29,405</h6>
                <div className="flex flex-row items-center gap-1 rounded-xl bg-umurava/10 px-2 py-[2px]">
                  <FaArrowUpLong className="text-umurava" size={10} />
                  <span className="text-sm">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-2 row-start-3 h-[9.3rem] rounded-lg border bg-white p-4">
        <div className="flex size-full flex-col justify-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex-1" />
            <select className="text-sm text-gray-500">
              <option>This day</option>
              <option value="">This Week</option>
              <option value="">This Month</option>
            </select>
          </div>
          <div className="flex flex-row items-center">
            <div className="size-fit rounded-full bg-umurava/20 p-4">
              <IoDocumentTextOutline className="text-umurava" size={24} />
            </div>
            <div className="flex flex-col items-start justify-center p-4">
              <p className="text-sm text-gray-500">Completed Challenges</p>
              <div className="flex flex-row items-center gap-2">
                <h6>5,837</h6>
                <div className="flex flex-row items-center gap-1 rounded-xl bg-umurava/10 px-2 py-[2px]">
                  <FaArrowUpLong className="text-umurava" size={10} />
                  <span className="text-sm">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 col-start-3 row-span-2 row-start-3 h-[9.3rem] rounded-lg border bg-white p-4">
        <div className="flex size-full flex-col justify-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex-1" />
            <select className="text-sm text-gray-500">
              <option>This day</option>
              <option value="">This Week</option>
              <option value="">This Month</option>
            </select>
          </div>
          <div className="flex flex-row items-center">
            <div className="size-fit rounded-full bg-umurava/20 p-4">
              <IoDocumentTextOutline className="text-umurava" size={24} />
            </div>
            <div className="flex flex-col items-start justify-center p-4">
              <p className="text-sm text-gray-500">Open Challenges</p>
              <div className="flex flex-row items-center gap-2">
                <h6>5,837</h6>
                <div className="flex flex-row items-center gap-1 rounded-xl bg-umurava/10 px-2 py-[2px]">
                  <FaArrowUpLong className="text-umurava" size={10} />
                  <span className="text-sm">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 col-start-5 row-span-2 row-start-3 h-[9.3rem] rounded-lg border bg-white p-4">
        <div className="flex size-full flex-col justify-center">
          <div className="flex w-full flex-row justify-between">
            <div className="flex-1" />
            <select className="text-sm text-gray-500">
              <option>This day</option>
              <option value="">This Week</option>
              <option value="">This Month</option>
            </select>
          </div>
          <div className="flex flex-row items-center">
            <div className="size-fit rounded-full bg-umurava/20 p-4">
              <IoDocumentTextOutline className="text-umurava" size={24} />
            </div>
            <div className="flex flex-col items-start justify-center p-4">
              <p className="text-sm text-gray-500">Ongoing Challenges</p>
              <div className="flex flex-row items-center gap-2">
                <h6>5,837</h6>
                <div className="flex flex-row items-center gap-1 rounded-xl bg-umurava/10 px-2 py-[2px]">
                  <FaArrowUpLong className="text-umurava" size={10} />
                  <span className="text-sm">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
