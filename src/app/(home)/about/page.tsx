import { IconsSchoolCase } from "@/app/_components/icons/icons";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h- grid min-h-fit grid-cols-1 px-8 py-8 md:grid-cols-2 md:gap-16 md:px-16">
        <div className="flex flex-col justify-center gap-4">
          <h2 className="font-black">Our Story</h2>
          <p className="mt-8">
            With 3 years of experience matching African digital talents to local
            and global job markets, we still remain with a big number of jobs
            that remain unfilled due to the lack of experienced African Talents.
            <br />
            {"\n"} <br />
            {"\n"} Driven by our mission to place skilled and professional
            digital talent, we created Skills Challenges as a project-based
            learning solution for talents to gain real-world experience, solve
            problems, and build portfolios so that they become ready for global
            job markets.
          </p>
        </div>
        <div className="relative min-h-fit  p-8">
          <video src="" className="h-96 object-cover"  autoPlay loop>
            <source src="/-9844-4599-a3ad-736e0dbdf70d.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex min-h-screen flex-col justify-center p-8 md:px-16">
        <div className="flex h-fit flex-col items-center justify-center gap-8 py-8 text-center">
          <h2 className="md:w-3/5">Why we are solving this problem</h2>
        </div>
        <div className="grid min-h-[720px] w-full gap-4 text-white md:mt-16 lg:grid-cols-2 lg:grid-rows-2 lg:px-32">
          <div className="row-span-1 flex flex-col gap-4 rounded-xl bg-blue-500 p-8 lg:col-span-2 lg:p-16">
            <span className="size-12 grid place-items-center rounded-xl bg-white text-blue-700">
              <IconsSchoolCase/>
            </span>

            <h4>Bridging the Experience Gap </h4>
            <p>
              Many talents acquired theoretical knowledge and are rejected from
              jobs because they lack work experience and are not able to put in
              actions what they acquired in the schools.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-blue-500 p-8 md:p-16">
            <span className="size-12 grid place-items-center rounded-xl bg-white text-blue-700">
              <IconsSchoolCase/>
            </span>
            <h4>Bridging Education and Employment</h4>
            <p>
              Traditional education doesnt’ always prepare talents for the
              demands of the tech and digital economy and we are providing
              in-demand skills through Skills Challenges.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-blue-500 p-8 md:p-16">
            <span className="size-12 grid place-items-center rounded-xl bg-white text-blue-700">
              <IconsSchoolCase/>
            </span>
            <h4>Preparing Talents for Global Job Markets</h4>
            <p>
              We are ensuring that African talents shine globally and that’s why
              we are equipping them with global technical experience and
              shandout globally. 
            </p>
          </div>
        </div>
      </div>
      <div className="min-h- grid min-h-[720px] grid-cols-1 px-8 py-8 md:grid-cols-2 md:gap-16 md:px-16">
        <div className="flex flex-col justify-center gap-4">
          <h2 className="font-black">
            Skills Challenges Program is built on the Umurava Talent Marketplace
            Platform
          </h2>
          <p className="mt-8">
            A Project-based Learning Solution aimed at providing young and
            senior talents with an opportunity to showcase their skills to
            real-world projects and challenges from our partner companies and
            organizations.
            <br />
            {"\n"} <br />
            {"\n"} Umurava Skills Challenges enables young talents to build a
            portfolio and experience that increases their readiness to access
            job opportunities and projects.
          </p>
        </div>
        <div className="relative flex min-h-96 flex-row items-center rounded-xl p-8">
          <div className="flex-1" />

          <img
            alt=""
            src={"/Challenges & Hackathons  Page.png"}
            className="h-96 w-auto object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default page;
