"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { SelectNative } from "@/components/ui/select-native";
import { useId, useState } from "react";
import { redirect } from "next/navigation";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  function buttonClick(){
    redirect("/app/dashboard")
  }
  return (
    <form className="flex min-h-screen flex-col items-center justify-center">
      <div className="size-fit rounded-lg border-2 border-umuravadark/20 p-8">
        <div className="grid min-w-[600px] grid-cols-2">
        <Link href={"/app/auth/sign-up"}>
            <h1 className="p-4 text-center text-3xl font-bold">
            Sign in
            </h1>
          </Link>
          <h1 className="border-b-2 border-umurava p-4 text-center text-3xl font-bold text-umurava">
            Create account
          </h1>
        </div>
        <div className="flex min-w-[600px] flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor={"id"} ></Label>
            <SelectNative id={"id"} className="w-full border-2 border-black/20 h-16 focus-visible:outline-none">
              <option value="1" defaultChecked>Talent</option>
              <option value="2">Client</option>
            </SelectNative>
          </div>
          <div className="space-y-2">
            <label htmlFor="firstname"></label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter your First name"
              className="w-full border-2 border-black/20 p-4 focus-visible:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastname"></label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter your Last name"
              className="w-full border-2 border-black/20 p-4 focus-visible:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="w-full border-2 border-black/20 p-4 focus-visible:outline-none"
            />
          </div>
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
          </div>
          <div className="space-y-2">
            <Label htmlFor={"password"}></Label>
            <div className="relative">
              <input
                id="Confirm-Fpassword"
                className="w-full border-2 border-black/20 p-4 focus-visible:outline-none"
                placeholder="Confirm password"
                type={isVisible ? "text" : "password"}
              />
              <button
                className="absolute inset-y-0 end-0 flex h-full items-center justify-center rounded-e-lg p-4 text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
                onClick={toggleVisibility}
                aria-label={isVisible ? "Hide password" : "Show password"}
                aria-pressed={isVisible}
                aria-controls="confirm-password"
              >
                {isVisible ? (
                  <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Eye size={16} strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        <Button className="mt-4 size-fit w-full bg-umurava p-4" onClick={buttonClick}>Sign in</Button>
        <p className="text-center text-sm">or</p>
        <Button variant={"link"} className="size-fit w-full p-4" asChild>
          <Link href={""} className="w-full text-center text-umurava">
            Forgot Password
          </Link>
        </Button>
      </div>
    </form>
  );
};

export default Page;
