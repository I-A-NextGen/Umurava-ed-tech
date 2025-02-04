"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FilterIcon, Search } from "lucide-react";
import Breadcrumbs from "@/app/_components/Dashboard/Breadcrumbs";
import { Upperbar } from "@/app/_components/Dashboard/Upperbar";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

interface FormData {
  title: string;
  deadline: string;
  duration: string;
  moneyPrize: string;
  contactEmail: string;
  projectDescription: string;
  projectBrief: string;
  projectTasks: string;
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
}

const page = () => {
  const router = usePathname();

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
  const [formData, setFormData] = useState<FormData>({
    title: "",
    deadline: "",
    duration: "",
    moneyPrize: "",
    contactEmail: "",
    projectDescription: "",
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

  const handleEditorChange = (value: string, field: keyof FormData) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.deadline) newErrors.deadline = "Deadline is required";
    if (!formData.duration) newErrors.duration = "Duration is required";
    if (!formData.moneyPrize) newErrors.moneyPrize = "Money Prize is required";
    if (!formData.contactEmail)
      newErrors.contactEmail = "Contact Email is required";
    if (!formData.projectDescription)
      newErrors.projectDescription = "Project Description is required";
    if (!formData.projectBrief)
      newErrors.projectBrief = "Project Brief is required";
    if (!formData.projectTasks)
      newErrors.projectTasks = "Project Tasks is required";

    // Validate character limits
    if (formData.projectDescription.length > 250)
      newErrors.projectDescription = "Project Description must be 250 characters or less";
    if (formData.projectBrief.length > 50)
      newErrors.projectBrief = "Project Brief must be 50 characters or less";
    if (formData.projectTasks.length > 500)
      newErrors.projectTasks = "Project Tasks must be 500 characters or less";

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
        <EditorChallenge
          className={`mt-8 ${errors.projectDescription ? "border-red-500" : ""}`}
          value={formData.projectDescription}
          onChange={(value:string) => handleEditorChange(value, "projectDescription")}
          maxLength={250}
        />
        <div className="text-sm text-gray-500">
          {formData.projectDescription.length}/250 characters
        </div>
        {errors.projectDescription && (
          <div className="text-red-500 text-sm">{errors.projectDescription}</div>
        )}
        <p>Keep this simple of 250 characters</p>
      </label>
      <label>
        <h6>Project Brief</h6>
        <EditorChallenge
          placeholder="Enter text here..."
          className={`my-8 ${errors.projectBrief ? "border-red-500" : ""}`}
          name="projectBrief"
          rows={8}
          value={formData.projectBrief}
          onChange={(value:string) => handleEditorChange(value, "projectBrief")}
          maxLength={50}
        />
        <div className="text-sm text-gray-500">
          {formData.projectBrief.length}/50 characters
        </div>
        {errors.projectBrief && (
          <div className="text-red-500 text-sm">{errors.projectBrief}</div>
        )}
        <p>Keep this simple of 50 characters</p>
      </label>
      <label>
        <h6>Project Description & Tasks</h6>
        <EditorChallenge
          placeholder="Enter text here..."
          className={`my-8 ${errors.projectTasks ? "border-red-500" : ""}`}
          name="projectTasks"
          rows={8}
          value={formData.projectTasks}
          onChange={(value:string) => handleEditorChange(value, "projectTasks")}
          maxLength={500}
        />
        <div className="text-sm text-gray-500">
          {formData.projectTasks.length}/500 characters
        </div>
        {errors.projectTasks && (
          <div className="text-red-500 text-sm">{errors.projectTasks}</div>
        )}
        <p>Keep this simple of 500 characters</p>
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


const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>
});

const EditorChallenge = ({ value, onChange, className, maxLength }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modules = {
    toolbar: [
      ['bold', 'italic'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }]
    ]
  };

  const formats = ['bold', 'italic', 'list'];

  const handleChange = (content: string) => {
    if (content.length <= maxLength) {
      onChange(content);
    }
  };

  if (!mounted) {
    return <div className={className}>Loading editor...</div>;
  }

  return (
    <div className={className}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Enter your project description here..."
      />
    </div>
  );
};

export default page;