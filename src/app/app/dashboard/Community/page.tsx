"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [trigger, setTrigger] = useState(true);

  function handleTrigger() {
    setTrigger((prev) => !prev);
  }

  useEffect(() => {
    if (!trigger) {
      redirect("/app/dashboard");
    }
  }, [trigger]);

  return (
    trigger && (
      <div
        className="fixed left-0 top-0 z-20 grid h-screen w-screen place-items-center bg-black/40"
        onClick={handleTrigger}
      >
        <div className="flex h-96 min-w-[512px] flex-col items-center justify-center gap-4 rounded-xl bg-white">
          <div className="relative size-fit rounded-full bg-umurava/20 p-8">
            <img src={"/Plain.png"} alt="" className="size-8" />
          </div>
          <h4>Join our WhatsApp community</h4>
          <p className="w-2/3 text-center">
            Get notified on the latest projects and hackathons
          </p>
          <Button size={"lg"} asChild className="bg-umurava duration-300 hover:bg-umuravadark">
            <Link href={""}>Join</Link>
          </Button>
        </div>
      </div>
    )
  );
};

export default Page;
