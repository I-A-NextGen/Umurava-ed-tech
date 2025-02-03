"use client"
import React from "react";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { partipants } from "@/lib/utils";
import { ChallengeDetails } from "@/app/_components/ChallengeDetails";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Breadcrumbs from "@/app/_components/Dashboard/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { FilterIcon, Search } from "lucide-react";
import { Upperbar } from "@/app/_components/Dashboard/Upperbar";

type UserRole = "user" | "admin";

const UserRole: UserRole = "admin";

const markdowntext = `
# Project Brief : Payroll and HR Management System

A Fintech company that is developing a Digital Financial Platform designed for businesses 
and their workforce in Africa is partnering with Umurava to run a Skills Challenge for 
Product Design. This Fintech Company offers Payroll Management System to Employers and 
Embedded Financial services and products to Employees and Gig Workers across Africa.

### Tasks: 

##### Product Requirements
- UX research to understand Project Requirements 
- Understanding User Needs
- Understanding Business Goals 
- Determine interaction between users 
- Requirements Catalog


##### Product Design:
- User Interface Design for each step 
- Creating wireframes to outline the basic structure and layout of the web and mobile app.
- Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.
- Ensuring the web application works seamlessly across web, mobile, and tablet devices.
- Provide a feedback session for in-development guidance

##### Deliverables:

- Requirements Catalog and User Interaction Diagram
- User Interface Mockups 
- Payroll and HR System Design Completed

#### Deliverables:

- The Product Designer will provide all documents and deliverables to the client before the review meetings

#### NOTE:

- Find Product Requirements Summary and Features Description for Saway Pay HERE


`;

const ProductRequirements = `
- UX research to understand Project Requirements 
- Understanding User Needs
- Understanding Business Goals 
- Determine interaction between users 
- Requirements Catalog
`
const ProductDesign = `
- User Interface Design for each step 
- Creating wireframes to outline the basic structure and layout of the web and mobile app.
- Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.
- Ensuring the web application works seamlessly across web, mobile, and tablet devices.
- Provide a feedback session for in-development guidance
`


const Deliverables = `
- Requirements Catalog and User Interaction Diagram
- User Interface Mockups 
- Payroll and HR System Design Completed
`

const Notes = `
- Find Product Requirements Summary and Features Description for Saway Pay HERE
`

const page = () => {
  const { challengeid } = useParams();
  if (challengeid !== "challenge") {
    return (
      <div className="grid size-full min-h-screen place-items-center text-3xl font-bold text-umurava">
        Challenge not found
      </div>
    );
  }

  const router = usePathname()
  return (
    <div>
      <Upperbar />
      <div className="p-6 flex flex-row justify-between items-center">
        <Breadcrumbs pathname={router.toString()} />
        <div className="flex flex-row items-center w-fit">
          <div className="flex flex-row gap-4">
            <label className="relative w-32">
              <Input type="text" placeholder="search" className=" p-4" />
              <Search className="absolute right-2 -translate-y-1/2 top-1/2 text-umurava" />
            </label>
            <Button variant={"ghost"} size={"icon"} className="p-4">
              <FilterIcon />
            </Button>
          </div>

        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-8">
        <div className="col-span-2 rounded-xl border-2 border-umuravadark/10 p-4">
          <div className="relative min-h-[512px] rounded-xl bg-umurava" />
          <h3 className="mt-4">Project Brief : Payroll and HR Management System</h3>
          <div className="py-4 flex flex-col gap-4">
            <h5 className="">Tasks</h5>
            <h5>Product Requirements</h5>
            <Markdown className="prose-lg p-2">{ProductRequirements}</Markdown>
          </div>
          <div>
            <h4>Product Design</h4>
            <Markdown className="prose-lg  p-2">{ProductDesign}</Markdown>
          </div>
          <div>
            <h4>Deliverables</h4>
            <Markdown className="prose-lg p-2">{Deliverables}</Markdown>
          </div>
          <div>
            <h4>Notes</h4>
            <Markdown className="prose-lg p-2">{Notes}</Markdown>
          </div>
        </div>
        <div>
          <div className="flex min-h-fit flex-col gap-4 rounded-xl border-2 border-umuravadark/10 p-4">
            <div>
              <h6>Key Instructions:</h6>
              <p className="opacity-70">
                You are free to schedule the clarification call with the team via
                this
              </p>
              <ChallengeDetails email={"talent@umurava.africa"} category={"Web design"} Duration={"7 Days"} Prize={"$150 - $400"} />

              {UserRole == "admin" ? (
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    size={"lg"}
                    className="w-full bg-red-500/80 py-4 text-lg hover:bg-red-500"
                  >
                    Delete{" "}
                  </Button>
                  <Button
                    size={"lg"}
                    className="w-full bg-umurava/80 py-4 text-lg hover:bg-umurava"
                  >
                    <Link href={`/app/dashboard/Hackathons/${challengeid}/edit`}>
                      Edit{" "}
                    </Link>
                  </Button>
                </div>
              )
                :
                <Button size={"lg"} className="py-4 w-full bg-umurava/80 hover:bg-umurava">Submit your work</Button>
              }
            </div>
          </div>
          {UserRole === "admin" && (
            <div className="flex min-h-fit flex-col gap-4 rounded-xl border-2 border-umuravadark/10 p-4">
              <div>
                <h6>
                  Participants{" "}
                  <span className="rounded-lg bg-umurava p-2 text-sm text-white">
                    250
                  </span>
                </h6> <div>
                  {partipants.map((item, i) => (
                    <div
                      className="my-8 flex flex-row items-center gap-4"
                      key={i}
                    >
                      <div className="relative">
                        {
                          item.active && (
                            <div className="absolute z-20 size-4 rounded-full bottom-0 right-0 bg-green-500" />
                          )
                        }

                        <img
                          src="https://i.pinimg.com/736x/2f/57/8d/2f578d07945132849b05fbdaf78cba38.jpg"
                          alt="avatar"
                          className="size-12 overflow-clip grayscale rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6>{item.name}</h6>
                        <p>{item.role}</p>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full bg-umurava/80 py-4 text-lg hover:bg-umurava">
                    View All Participants
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
