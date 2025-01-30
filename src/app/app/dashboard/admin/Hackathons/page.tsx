import React from "react";
import { Button } from "@/components/ui/button";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import TaskCard from "@/app/_components/Home/TaskCard";
import { Upperbar } from "../../user/page";
import Link from "next/link";
import { Plus } from "lucide-react";

const page = () => {
  return (
    <div className="p-4">
      <Upperbar />
      <div className="flex flex-col items-start justify-center mb-16 gap-2 py-8">
        <h4>Challenges</h4>
        <p>Join a challenge or a hackathon to gain valuable work experience,</p>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <Button className="rounded-xl bg-umurava/20 py-6 text-umurava duration-300 hover:bg-umurava/60 hover:text-white">
            <IoDocumentTextOutline />
            <span>All Challenge</span>
            <span className="rounded-xl bg-umurava/40 p-1 px-2 text-white">
              0
            </span>
          </Button>
          <Button className="rounded-xl bg-umurava/20 py-6 text-umurava duration-300 hover:bg-umurava/60 hover:text-white">
            <IoDocumentTextOutline />
            <span>Completed Challenge</span>
            <span className="rounded-xl bg-umurava/40 p-1 px-2 text-white">
              0
            </span>
          </Button>
          <Button className="rounded-xl bg-umurava/20 py-6 text-umurava duration-300 hover:bg-umurava/60 hover:text-white">
            <IoDocumentTextOutline />
            <span>Open Challenge</span>
            <span className="rounded-xl bg-umurava/40 p-1 px-2 text-white">
              0
            </span>
          </Button>
          <Button className="rounded-xl bg-umurava/20 py-6 text-umurava duration-300 hover:bg-umurava/60 hover:text-white">
            <IoDocumentTextOutline />
            <span>Ongoing Challenge</span>
            <span className="rounded-xl bg-umurava/40 p-1 px-2 text-white">
              0
            </span>
          </Button>
          <Button className="ml-4 rounded-xl hover:bg-umurava/60 py-6 duration-300 bg-umurava text-white">
            <Link href={"create-new-challenge"} className="flex justify-center gap-4">
              <Plus />
              <span>Create New Challenge</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {[`1`, `2`, `3`, `4`, `5`, `6`].map((item, i) => (
          <TaskCard key={i} i={i} />
        ))}
      </div>
    </div>
  );
};

export default page;
