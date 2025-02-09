"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clearAuthUser } from "@/lib/redux/features/authReducer";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { Bell, LucideUserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { toast } from "react-toastify";

export const Upperbar = () => {
  // const { isAuthenticated, token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="flex h-16 flex-row items-center justify-between px-8">
      <div className="flex w-[60%] flex-row gap-4">
        <label className="relative w-full">
          <Input
            type="text"
            placeholder="Search here..."
            className="h-[2.6rem] bg-slate-100"
          />
        </label>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/70"
        >
          <Bell size={18} />
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/70"
        >
          <LucideUserRound size={20} className="font-bold" />
        </div>
      </div>
    </div>
  );
};
