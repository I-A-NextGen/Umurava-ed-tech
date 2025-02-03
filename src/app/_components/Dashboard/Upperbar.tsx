"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

export const Upperbar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <div className="flex flex-row gap-4">
        <label className="relative w-32">
          <Input type="text" placeholder="search" className="p-4" />
        </label>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Button variant={"ghost"} size={"icon"} className="p-4">
          <IoMdNotificationsOutline className="text-xl" />
        </Button>
        <div className="w-10 h-10 rounded-full bg-slate-300"></div>
      </div>
    </div>
  );
};
