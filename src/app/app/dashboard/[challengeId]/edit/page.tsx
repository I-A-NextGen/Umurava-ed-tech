"use client";

import { Button } from "@/components/ui/button";
import { DateField, DateInput } from "@/components/ui/datefield-rac";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import "@vaadin/rich-text-editor";
import Breadcrumbs from "@/app/_components/Dashboard/Breadcrumbs";
import { usePathname } from "next/navigation";
import { FilterIcon, Search } from "lucide-react";
import { Upperbar } from "../../page";

interface FormData {
  title: string;
  deadline: string;
  duration: string;
  moneyPrize: string;
  contactEmail: string;
  projectDescription: string;
  projectBrief: string;
  projectTasks: string;
  projectRequirements:String
}

interface Errors {
  title?: string;
  deadline?: string;
  duration?: string;
  moneyPrize?: string;
  contactEmail?: string;
  projectDescription?: string;
  projectBrief?: string;
  projectTasks?: string;
  projectRequirements?:String;
  projectDeliverables?:String
}

const page = () => {
  const router = usePathname()
  return (
    <>
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
      <div className="p-6"></div>
      <div className="grid w-full place-items-center py-16">
        <div className="flex w-[624px] flex-col items-center gap-4 rounded-xl p-16 pb-0 ring-2 ring-umuravadark/5">
          <h4>Create New Challenge</h4>
          <p>Fill out these details to build your broadcast</p>
          <Formdata />
        </div>
      </div>
    </>
  );
};

function Formdata() {
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    duration: "",
    moneyPrize: "",
    contactEmail: "",
    projectDescription: "",
    projectRequirements: "",
    projectBrief: "",
    projectTasks: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.title) newErrors.title = "*";
    if (!formData.deadline) newErrors.deadline = "*";
    if (!formData.duration) newErrors.duration = "*";
    if (!formData.moneyPrize) newErrors.moneyPrize = "*";
    if (!formData.contactEmail)
      newErrors.contactEmail = "*";
    if (!formData.projectDescription)
      newErrors.projectDescription = "*";
    if (!formData.projectRequirements)
      newErrors.projectRequirements = "*";
    if (!formData.projectBrief)
      newErrors.projectBrief = "*";
    if (!formData.projectTasks)
      newErrors.projectTasks = "*";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    } else {
      console.log("Form has errors", errors);
    }
  };

  return (
    <form
      className="flex min-h-screen w-[624px] flex-col gap-4 p-4"
      onSubmit={handleSubmit}
    >
      <label>
        <h6>Challenge/Hackathon Title:</h6>
        <Input
          type="text"
          placeholder="Enter Title"
          className={`mt-4 p-6 ${errors.title ? "border-red-500" : ""}`}
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label>
          <h6>Deadline</h6>
          <Input
            type="date"
            placeholder="Enter Deadline"
            className={`mt-4 p-6 ${errors.deadline ? "border-red-500" : ""}`}
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
        </label>
        <label>
          <h6>Duration</h6>
          <Input
            type="number"
            max={32}
            placeholder="Enter Duration"
            className={`mt-4 p-6 ${errors.duration ? "border-red-500" : ""}`}
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label>
          <h6>Money Prize</h6>
          <Input
            type="number"
            placeholder="Enter Money Prize"
            className={`mt-4 p-6 ${errors.moneyPrize ? "border-red-500" : ""}`}
            name="moneyPrize"
            value={formData.moneyPrize}
            onChange={handleChange}
          />
        </label>
        <label>
          <h6>Contact Email</h6>
          <Input
            type="text"
            placeholder="Enter Contact Email"
            className={`mt-4 p-6 ${errors.contactEmail ? "border-red-500" : ""}`}
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
          />
        </label>
      </div>
      <label>
        <h6>Project Description</h6>
        <Textarea
          className={`mt-4 p-6 ${errors.projectDescription ? "border-red-500" : ""}`}
          value={formData.projectDescription}
        />
        Keep this simple of 250 character
      </label>
      <label>
        <h6>Project Brief</h6>
        <Textarea
          placeholder="Enter text here..."
          className={`my-4 p-6 ${errors.projectBrief ? "border-red-500" : ""}`}
          name="projectBrief"
          rows={8}
          value={formData.projectBrief}
          onChange={handleChange}
        />
        Keep this simple of 50 character
      </label>
      <label>
        <h6>Project Description & Tasks</h6>
        <Textarea
          placeholder="Enter text here..."
          className={`my-4 p-6 ${errors.projectTasks ? "border-red-500" : ""}`}
          name="projectTasks"
          rows={8}
          value={formData.projectTasks}
          onChange={handleChange}
        />
        Keep this simple of 500 character
      </label>
      <label>
        <h6>Project Requirements</h6>
        <Textarea
          placeholder="Enter text here..."
          className={`my-4 p-6 ${errors.projectRequirements ? "border-red-500" : ""}`}
          name="projectRequirements"
          rows={8}
          value={formData.projectRequirements}
          onChange={handleChange}
        />
        Keep this simple of 500 character
      </label>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Button
          className="h-fit py-6 text-sm text-umurava hover:bg-red-50 hover:text-red-500"
          variant={"outline"}
          type="button"
        >
          Cancel
        </Button>
        <Button
          className="h-fit bg-umurava py-6 hover:bg-umurava/80"
          variant={"default"}
          type="submit"
        >
          Create Challenge
        </Button>
      </div>
    </form>
  );
}

export default page;
