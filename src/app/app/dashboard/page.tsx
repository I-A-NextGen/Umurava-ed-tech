import { AppSidebar } from "@/app/_components/Dashboard/Appsidebar";
import TaskCard from "@/app/_components/Home/TaskCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { FaArrowUpLong, FaPeopleGroup } from "react-icons/fa6";
import { IoMdDocument, IoMdNotificationsOutline } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Upperbar } from "@/app/_components/Dashboard/Upperbar";
import { Belowsection, BelowsectionAdmin } from "@/app/_components/Dashboard/DashboardSections";

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



