"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clearAuthUser } from "@/lib/redux/features/authReducer";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { toast } from "react-toastify";

export const Upperbar = () => {
  const { isAuthenticated, token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !token) {
      dispatch(clearAuthUser());
      toast.success("Logout successful.");
      router.push("/app/auth/sign-in");
    }
  }, []);

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
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-full bg-slate-200/60 p-5"
        >
          <IoMdNotificationsOutline />
        </Button>
        <div className="h-10 w-10 rounded-full bg-slate-300"></div>
      </div>
    </div>
  );
};
