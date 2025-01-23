import React from "react";
import { Upperbar } from "../../page";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";

// async function getchallenges({ params }: { params: { challengeid: string } }) {
//     const {challengeid} = await params;
//     return challengeid;
// }

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

const page = ({ params }: { params: { challengeid: string } }) => {
  const { challengeid } = params;
  if (challengeid !== "challenge") {
    return (
      <div className="grid size-full min-h-screen place-items-center text-3xl font-bold text-umurava">
        Challenge not found
      </div>
    );
  }

  return (
    <div>
      <Upperbar />
      <div className="grid grid-cols-3 gap-4 p-8">
        <div className="col-span-2 rounded-xl border-2 border-umuravadark/10 p-4">
          <div className="relative min-h-[512px] rounded-xl bg-umurava" />
          <Markdown className="prose-lg mt-8 p-2">{markdowntext}</Markdown>
        </div>
        <div>
        <div className="flex min-h-fit flex-col gap-4 rounded-xl border-2 border-umuravadark/10 p-4">
          <div>
            <h6>Key Instructions:</h6>
            <p className="opacity-70">
              You are free to schedule the clarification call with the team via
              this
            </p>
            <ChallengeDetails/>
            <Button size={"lg"} className="py-4 w-full bg-umurava/80 hover:bg-umurava">Submit your work</Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;


export function ChallengeDetails({email,category,Duration,Prize} : {email?:string,category?:string,Duration?:string,Prize?:string}) {
    return (
        <div className="flex flex-col gap-4 rounded-xl my-4 p-4 min-h-96">
            <div></div>

        </div>
    )
}