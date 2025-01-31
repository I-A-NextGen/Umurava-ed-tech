"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);
  return (
    <form className="flex min-h-screen flex-col items-center justify-center">
      <div className="size-fit rounded-lg border-2 border-umuravadark/20 p-8 ">
        <div className="grid min-w-[600px] grid-cols-2">
          <h1 className="border-b-2 border-umurava p-4 text-center text-3xl font-bold text-umurava">
            Sign in
          </h1>
          <Link href={"/app/auth/sign-in"}>
            <h1 className="p-4 text-center text-3xl font-bold">
              Create account
            </h1>
          </Link>
        </div>
        <div className="flex min-w-[600px] flex-col gap-4">
          <label htmlFor="email"></label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="w-full border-2 border-black/20 p-4 focus-visible:outline-none"
          />
          <div className="space-y-2">
            <Label htmlFor={"password"}></Label>
            <div className="relative">
              <input
                id="password"
                className="w-full border-2 border-black/20 p-4 focus-visible:outline-none"
                placeholder="Password"
                type={isVisible ? "text" : "password"}
              />
              <button
                className="absolute inset-y-0 end-0 flex h-full items-center justify-center rounded-e-lg p-4 text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
                onClick={toggleVisibility}
                aria-label={isVisible ? "Hide password" : "Show password"}
                aria-pressed={isVisible}
                aria-controls="password"
              >
                {isVisible ? (
                  <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Eye size={16} strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            </div>
            <Button className="mt-4 size-fit w-full bg-umurava p-4">
              Sign in
            </Button>
            <p className="text-center text-sm">or</p>
            <Button variant={"link"} className="w-full p-4 size-fit" asChild>
              <Link href={""} className="w-full text-center text-umurava">
                Forgot Password
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Page;
