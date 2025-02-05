"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { PulseLoader } from "react-spinners";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import {
  createCompetition,
  NewCompetitionData,
} from "@/lib/redux/actionCreators/competitionAction";
import { projects } from "@/lib/utils";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [isDurationValue, setIsDurationValue] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<NewCompetitionData>({});

  const dispatch = useAppDispatch();
  const {
    loading,
    error: competitionError,
    competition,
  } = useAppSelector((state) => state.mutateCompetition);

  useEffect(() => {
    if (competition) {
      toast.success(competition.message);
      // dispatch(setAuthUser(loginResponseData.data.token));
      reset();
      // router.push("/app/dashboard");
    }
    if (competitionError) {
      toast.error(competitionError as string);
    }
  }, [competitionError, competition]);

  const onSubmit: SubmitHandler<NewCompetitionData> = (
    data: NewCompetitionData,
  ) => {
    dispatch(createCompetition(data));
  };

  const durationValue = watch("durationValue");
  useEffect(() => {
    setIsDurationValue(!!durationValue);
  }, [durationValue]);

  return (
    <>
      <div className="grid w-full place-items-center py-16">
        <div className="flex w-[42rem] flex-col items-center gap-6 rounded-xl border border-gray-300 p-4">
          <h4 className="-mb-4 mt-4">Create New Challenge</h4>
          <p className="text-gray-400">
            Fill out these details to build your broadcast
          </p>
          <form
            className="flex min-h-screen w-[40rem] flex-col gap-5 p-4"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <p>Challenge/Hackathon Title:</p>
              <input
                type="text"
                placeholder="Enter Title"
                className={`${errors.title ? "border-red-600" : "border-gray-300"} h-[2.7rem] w-full rounded-md border bg-transparent px-3`}
                {...register("title", { required: true })}
              />
            </div>
            <div className="flex gap-4">
              <div className="basis-1/2">
                <p>Deadline</p>
                <input
                  type="date"
                  placeholder="Enter Deadline"
                  className={`${errors.deadline ? "border-red-600" : "border-gray-300"} h-[2.7rem] w-full rounded-md border bg-transparent px-3`}
                  {...register("deadline", { required: true })}
                />
              </div>
              <div className="basis-1/2">
                <p>Duration</p>
                <div
                  className={`${errors.durationUnit || errors.durationValue ? "border-red-600" : "border-gray-300"} flex h-[2.7rem] w-full rounded-md border bg-transparent px-3`}
                >
                  <input
                    type="number"
                    min={1}
                    placeholder="Enter Duration"
                    {...register("durationValue", {
                      required: true,
                      min: {
                        value: 1,
                        message: "Only positive numbers allowed",
                      },
                    })}
                    className="w-[50%] bg-transparent outline-none"
                  />
                  <select
                    {...register("durationUnit", { required: true })}
                    className={`${!isDurationValue ? "hidden" : "inline"} bg-transparent outline-none`}
                  >
                    <option value="h">Hour(s)</option>
                    <option value="d">Day(s)</option>
                    <option value="w">Week(s)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <p>Money Prize</p>
                <input
                  type="text"
                  placeholder="Enter Money Prize"
                  className={`${errors.prize ? "border-red-600" : "border-gray-300"} h-[2.7rem] w-full rounded-md border bg-transparent px-3`}
                  {...register("prize", { required: true })}
                />
              </div>
              <div>
                <p>Contact Email</p>
                <input
                  type="email"
                  placeholder="Enter Contact Email"
                  className={`${errors.contactEmail ? "border-red-600" : "border-gray-300"} h-[2.7rem] w-full rounded-md border bg-transparent px-3`}
                  {...register("contactEmail", {
                    required: true,
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "Use valid email address",
                    },
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p>Project Brief</p>
              <textarea
                {...register("brief", { required: true })}
                rows={5}
                className="border border-gray-300 bg-transparent"
              ></textarea>
              <span className="text-xs text-gray-500">
                Keep this simple of 250 characters
              </span>
            </div>
            <div className="flex flex-col">
              <p>Project Description</p>
              <textarea
                {...register("description", { required: true })}
                rows={5}
                className="border border-gray-300 bg-transparent"
              ></textarea>
              <span className="text-xs text-gray-500">
                Keep this simple of 50 characters
              </span>
            </div>
            <div className="flex flex-col">
              <p>Project Requirement</p>
              <textarea
                {...register("requirement", { required: true })}
                rows={5}
                className="border border-gray-300 bg-transparent"
              ></textarea>
              <span className="text-xs text-gray-500">
                Keep this simple of 500 characters
              </span>
            </div>
            <div className="flex flex-col">
              <p>Deliverables</p>
              <textarea
                {...register("deliverables", { required: true })}
                rows={5}
                className="border border-gray-300 bg-transparent"
              ></textarea>
              <span className="text-xs text-gray-500">
                Keep this simple of 500 characters
              </span>
            </div>
            <div>
              <p>Category</p>
              <Controller
                name="category"
                control={control}
                rules={{ required: "Please select a category." }}
                render={({ field }) => (
                  <Select
                    className={`${errors.category ? "!border-red-600" : "!border-gray-300"} basic-multi-select w-full`}
                    classNamePrefix="select"
                    options={projects.map((project) => ({
                      value: project.text,
                      label: project.text,
                    }))}
                    {...field}
                    onChange={(category) => field.onChange(category)}
                  />
                )}
              />
            </div>
            <div>
              <p>Skills</p>
              <Controller
                name="skills"
                control={control}
                rules={{ required: "Please select a skills needed." }}
                render={({ field }) => (
                  <CreatableSelect
                    isMulti
                    options={[
                      { value: "junior", label: "Junior" },
                      { value: "intermediate", label: "Intermediate" },
                      { value: "senior", label: "Senior" },
                    ]}
                    className={`${errors.skills ? "!border-red-600" : "!border-gray-300"} basic-multi-select w-full`}
                    classNamePrefix="select"
                    placeholder="Select skills needed..."
                    {...field}
                    onChange={(selected) => field.onChange(selected)}
                  />
                )}
              />
            </div>
            <div>
              <p>Seniority Level</p>
              <Controller
                name="seniorityLevel"
                control={control}
                rules={{ required: "Please select a seniority level." }}
                render={({ field }) => (
                  <Select
                    isMulti
                    {...field}
                    placeholder="Select level..."
                    className={`${errors.seniorityLevel ? "!border-red-600" : "!border-gray-300"} basic-multi-select w-full`}
                    classNamePrefix="select"
                    // value={field.value}
                    onChange={(selected) => field.onChange(selected)}
                    options={[
                      { value: "junior", label: "Junior" },
                      { value: "intermediate", label: "Intermediate" },
                      { value: "senior", label: "Senior" },
                    ]}
                  />
                )}
              />
            </div>

            <div className="flex gap-8">
              <Button
                className="h-fit w-[45%] border border-umurava bg-white py-4 text-sm text-umurava"
                type="button"
              >
                Cancel
              </Button>
              <Button
                className="h-fit w-[55%] bg-umurava py-4 hover:bg-umurava/80"
                variant={"default"}
                type="submit"
                disabled={loading}
              >
                {loading && <PulseLoader size={10} color="#fff" margin={3} />}
                {!loading && "Create Challenge"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <PulseLoader size={6} color="#000" />,
});

export default page;
