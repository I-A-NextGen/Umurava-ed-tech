"use client";
import { redirect, useParams } from "next/navigation";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const page = ({}) => {
  const userRole = "user";
  const { challengeid } = useParams();

  console.log(challengeid);
  

  if (challengeid === "Community") {
    return (
      <>
       <div className="w-[312px] h-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl border-2 border-black/20">
       </div>
      </>
    );
  }
  if (challengeid !== "challenge") {
    return (
      <div className="grid size-full min-h-screen place-items-center text-3xl font-bold text-umurava">
        Challenge not found
      </div>
    );
  }
  if (challengeid === "challenge" && userRole !== "user") {
    redirect("/app/dashboard/challenge/edit");
  }
};

export default page;
