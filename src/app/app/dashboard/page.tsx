import { AppSidebar } from "@/app/_components/Dashboard/Appsidebar";
import TaskCard from "@/app/_components/Home/TaskCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { FaArrowUpLong, FaPeopleGroup } from "react-icons/fa6";
import { IoMdDocument, IoMdNotificationsOutline } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

const page = () => {
  const user = "admin"
  return (
    <div className="size-full bg-umuravawhite">
      <Upperbar />
      <div className="flex flex-col items-start justify-center gap-2 p-4">
        <h3>Welcome back Hilaire,</h3>
        <p>Build Work Experience through Skills Challenges</p>
      </div>
      {user === "admin" ? <BelowsectionAdmin /> : <Belowsection />}
      <div className="p-4">
        <h4>Recent Challenges</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            [1, 2, 3, 4, 5, 6].map((item, i) => (
              <TaskCard key={i} i={i} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default page;

export function Upperbar() {
  return (
    <div className="flex flex-row justify-between p-4">
      <Input type="text" placeholder="search" className="w-2/3 p-4" />
      <div className="flex flex-row items-center gap-4">
        <Button variant={"ghost"}>
          <IoMdNotificationsOutline />
        </Button>
        <div className="relative size-12 overflow-clip rounded-full border-2 border-white bg-white">
          <Image
            src={
              "https://i.pinimg.com/736x/e8/e6/41/e8e64141f4c0ae39c32f9701ccea9a2e.jpg"
            }
            className="object-cover"
            fill
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export function Belowsection() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
      <div className="flex flex-row items-center justify-between rounded-md bg-white p-4 ">
        <div className="border-l-4 border-umurava p-4">
          <h6 className="opacity-70">Completed Challenges</h6>
          <p className="">05</p>
        </div>
        <div className="rounded-full bg-umurava/20 p-4 text-umurava">
          <IoDocumentTextOutline className="" size={24} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between rounded-md bg-white p-4 ">
        <div className="border-l-4 border-umurava p-4">
          <h6 className="opacity-70">Open Challenges</h6>
          <p className="">200</p>
        </div>
        <div className="rounded-full bg-umurava/20 p-4 text-umurava">
          <IoDocumentTextOutline className="" size={24} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between rounded-md bg-white p-4 ">
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

    <div className="grid grid-cols-6  grid-rows-4 gap-4 p-4">
      <div className="col-span-3 min-h-56 row-span-2 p-4">
        <div className="flex flex-col size-full justify-center">
        <div className="w-full flex flex-row justify-between">
          <div className="flex-1" />
          <select>
            <option>This day</option>
            <option value="">This Week</option>
            <option value="">This Month</option>
          </select>
        </div>
        <div className="flex flex-row items-center">
          <div className="p-4 bg-umurava/20 size-fit rounded-full">
            <IoDocumentTextOutline className="text-umurava" size={24} />
          </div>
          <div className="flex flex-col items-start justify-center p-4">
            <p>Total Challenge</p>
            <div className="flex flex-row items-center gap-2">
              <h6>29,405</h6>
              <div className="flex flex-row items-center gap-2 p-2 bg-umurava/20 rounded-xl">
                <FaArrowUpLong className="text-umurava" size={12} />
                <span>15%</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="col-span-3 row-span-2 col-start-4 p-4">
      <div className="flex flex-col size-full justify-center">
        <div className="w-full flex flex-row justify-between">
          <div className="flex-1" />
          <select>
            <option>This day</option>
            <option value="">This Week</option>
            <option value="">This Month</option>
          </select>
        </div>
        <div className="flex flex-row items-center">
          <div className="p-4 bg-umurava/20 size-fit rounded-full">
            <FaPeopleGroup  className="text-umurava" size={24} />
          </div>
          <div className="flex flex-col items-start justify-center p-4">
            <p>Total Participants</p>
            <div className="flex flex-row items-center gap-2">
              <h6>29,405</h6>
              <div className="flex flex-row items-center gap-2 p-2 bg-umurava/20 rounded-xl">
                <FaArrowUpLong className="text-umurava" size={12} />
                <span>15%</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="col-span-2 row-span-2 row-start-3 p-4">
      <div className="flex flex-col size-full justify-center">
        <div className="w-full flex flex-row justify-between">
          <div className="flex-1" />
          <select>
            <option>This day</option>
            <option value="">This Week</option>
            <option value="">This Month</option>
          </select>
        </div>
        <div className="flex flex-row items-center">
          <div className="p-4 bg-umurava/20 size-fit rounded-full">
            <IoDocumentTextOutline className="text-umurava" size={24} />
          </div>
          <div className="flex flex-col items-start justify-center p-4">
            <p>Completed Challenges</p>
            <div className="flex flex-row items-center gap-2">
              <h6>5,837</h6>
              <div className="flex flex-row items-center gap-2 p-2 bg-umurava/20 rounded-xl">
                <FaArrowUpLong className="text-umurava" size={12} />
                <span>15%</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="col-span-2 row-span-2 col-start-3 row-start-3 p-4">
      <div className="flex flex-col size-full justify-center">
        <div className="w-full flex flex-row justify-between">
          <div className="flex-1" />
          <select>
            <option>This day</option>
            <option value="">This Week</option>
            <option value="">This Month</option>
          </select>
        </div>
        <div className="flex flex-row items-center">
          <div className="p-4 bg-umurava/20 size-fit rounded-full">
            <IoDocumentTextOutline className="text-umurava" size={24} />
          </div>
          <div className="flex flex-col items-start justify-center p-4">
            <p>Open Challenges</p>
            <div className="flex flex-row items-center gap-2">
              <h6>5,837</h6>
              <div className="flex flex-row items-center gap-2 p-2 bg-umurava/20 rounded-xl">
                <FaArrowUpLong className="text-umurava" size={12} />
                <span>15%</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="col-span-2 row-span-2 col-start-5 row-start-3 p-4">
      <div className="flex flex-col size-full justify-center">
        <div className="w-full flex flex-row justify-between">
          <div className="flex-1" />
          <select>
            <option>This day</option>
            <option value="">This Week</option>
            <option value="">This Month</option>
          </select>
        </div>
        <div className="flex flex-row items-center">
          <div className="p-4 bg-umurava/20 size-fit rounded-full">
            <IoDocumentTextOutline className="text-umurava" size={24} />
          </div>
          <div className="flex flex-col items-start justify-center p-4">
            <p>Ongoing Challenges</p>
            <div className="flex flex-row items-center gap-2">
              <h6>5,837</h6>
              <div className="flex flex-row items-center gap-2 p-2 bg-umurava/20 rounded-xl">
                <FaArrowUpLong className="text-umurava" size={12} />
                <span>15%</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

  )

}