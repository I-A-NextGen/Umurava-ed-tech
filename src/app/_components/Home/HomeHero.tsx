"use client"

import { Button } from "@/components/ui/button";
import { Challenge, projects } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { IconsSchoolCase } from "../icons/icons";
import Avatars from "../Avatars";
import { ArrowRight } from "lucide-react";
import Slider from "./Slider";
import VideoSlider from "./SliderVideo";

interface Item {
  logo: string
  title: string
  image: string
}

const HomeHero = () => {
  const item: Item = {
    logo: "/Frame 1618868163.png",
    title:
      "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
    image: "/payrolldashboard 1.png",
  }
  const items: Item[] = [item, item, item]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <>
      <div className="grid min-h-[720px] grid-cols-1 lg:grid-cols-2">
        <div className="absolute flex p-2 px-4 z-20 rounded-full bg-white items-center left-1/2 bottom-16 -translate-x-1/2 -translate-y-1/2">
          <Avatars />
          <span className="text-sm font-semibold ml-4">20K+ <br />Talents</span>
        </div>
        <div className="ic flex flex-col justify-center gap-4 px-8 md:px-16">
          <h1 className="text-blue-700 text-5xl">
            Build Work Experience through Skills Challenges Program
          </h1>
          <p className="my-8">
            Enhance your Employability and Accelerate your Career Growth by
            working on Hands-on projects & hackathons from various businesses &
            organizations.
          </p>
          <Button asChild className="w-fit bg-blue-700 px-16" size={"lg"}>
            <Link href={"/"} className="text-xl">
              Get started
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2  gap-2 p-8 md:p-16">
          <div className="relative size-full max-lg:h-96 overflow-clip rounded-xl bg-blue-500">
            <img alt="" src="/joyful-group-classmates 1.png" className="absolute h-full w-full object-cover" />
          </div>
          <div className="relative size-full max-lg:h-96 overflow-clip rounded-xl bg-blue-500">
            <img alt="" src="/Group 18311.png" className="absolute h-full w-full object-cover" />

          </div>
        </div>
      </div>
      <div className="flex min-h-screen flex-col justify-center p-8 md:px-16">
        <div className="flex h-fit flex-col items-center justify-center gap-8 py-8 text-center">
          <h2 className="md:w-3/5">
            Experience a New Way of Building Work Experience
          </h2>
          <p className="md:w-2/5">
            Join Skills Challenges Program to accelerate your career growth and
            become part of Africars largest workforce of digital professionals.
          </p>
        </div>
        <div className="grid min-h-[720px] w-full gap-4 text-white md:mt-16 lg:grid-cols-2 lg:grid-rows-2 lg:px-32">
          <div className="row-span-1 flex flex-col gap-4 rounded-xl bg-blue-500 p-8 lg:col-span-2 lg:p-16">
            <span className="size-12 bg-white grid place-items-center text-blue-700">
              <IconsSchoolCase />
            </span>

            <h4>Build a Strong Portfolio and Hand-On Experience</h4>
            <p>
              Tackle real-world projects through challenges and hackathons that
              mirror real world challenges faced by businesses and
              organizations. Therefore, showcase your skills and accomplishments
              to potential employers and clients through a portofolio of
              completed projects.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-blue-500 p-8 md:p-16">
            <span className="size-12 bg-white grid place-items-center text-blue-700">
              <IconsSchoolCase />
            </span>
            <h4>Enhance Your Employment Path</h4>
            <p>
              elop the in-demand skills and build a strong portofolio to
              increase your chances of landing your dream job or contract.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-blue-500 p-8 md:p-16">
            <span className="size-12 bg-white grid place-items-center text-blue-700">
              <IconsSchoolCase />
            </span>
            <h4>Earn Recognition and Prizes</h4>
            <p>
              Earn both Money and Knowledge Prizes by participating in various
              contests and competitions by working on real world projects and
              hackathons from our partner companies & organizations
            </p>
          </div>
        </div>
      </div>
      <div className="p-8 md:px-16 lg:px-32">
        <div className="grid w-full grid-cols-1 rounded-xl bg-blue-500 p-8 text-white md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2 p-8">
            <h3>1</h3>
            <p>Year</p>
          </div>
          <div className="flex flex-col gap-2 p-8">
            <h3>500 +</h3>
            <p>Challenges Completed</p>
          </div>
          <div className="flex flex-col gap-2 p-8">
            <h3>10K+</h3>
            <p>users</p>
          </div>
          <div className="flex flex-col gap-2 p-8">
            <h3>6+</h3>
            <p>Countries</p>
          </div>
        </div>
      </div>
      {/* about */}
      <div className="flex min-h-fit w-full flex-col items-center gap-4 px-8 py-16">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <h2 className="w-full md:w-2/3">
            Skills Challenges Cover various in-demand skills and Careers for the
            digital economy
          </h2>
          <p>Explore the projects that various talents are working on.</p>
        </div>
        <div className="mt-8 flex flex-row flex-wrap justify-center gap-4 px-8 md:w-2/3 md:px-16 lg:px-32">
          {projects.map((item, i) => (
            <div
              key={i}
              className="hover:bg-umurava w-fit cursor-pointer rounded-xl p-4 duration-300 hover:text-white"
            >
              {item.text}
            </div>
          ))}
        </div>
        <div className="md:p-32 w-full">

        <Slider/>
        </div>

      </div>
      {/* Explore Challenges & Hackathons */}
      <div className="flex w-full flex-col items-center justify-center p-8 md:px-16 lg:px-32">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center md:w-2/3">
          <h2>Explore Challenges & Hackathons</h2>
          <p className="my-8">
            Join Skills Challenges Program to accelerate your career growth and
            become part of Africa&apos; s largest workforce of digital
            professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          {[1, 2, 4].map((item, i) => (
            <TaskCard i={i} key={item} />
          ))}
        </div>
        <Button
          asChild
          variant={"ghost"}
          className="border-umurava text-umurava mt-16 size-fit border px-8 py-4 hover:border-white"
        >
          <Link href={""}>View more</Link>
        </Button>
      </div>
      <div className="flex min-h-screen w-full flex-col items-center justify-center p-8 md:px-16 lg:px-32">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center md:w-2/3">
          <h2>
            What else can I gain from participating in Skills Challenges ?
          </h2>
          <p>
            Join Skills Challenges Program to accelerate your career growth and
            become part of Africa&apos;s largest workforce of digital
            professionals.
          </p>
        </div>
        <div className="mt-12 grid size-full grid-cols-1 lg:grid-cols-2">
          <div className="grid grid-cols-2 grid-rows-2">
            {[1, 2, 3, 4].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 p-4">
                <div className="bg-umurava size-16 rounded-xl" />
                <h6>Enhance Your Employment Path</h6>
                <p className="opacity-60">
                  Network with other talented individuals and learn from their
                  experiences
                </p>
              </div>
            ))}
          </div>
          <div className="p-8 relative">
            <Image src={"/skill section banner 1.png"} alt="" className="object-cover p-16" fill />
          </div>
        </div>
      </div>
      <div className="flex min-h-fit w-full flex-col items-start justify-center p-8 md:px-16 lg:px-32">
        <div className="flex w-full flex-col my-8 items-start justify-start gap-4 text-start md:w-1/3">
          <h2>Users are in Love with Skills Challenges Program</h2>
          <p>
            See what our clients say about working with us. Their success speaks
            for our dedication and expertise.
          </p>
        </div>
        <VideoSlider />
      </div>
      <div className="flex min-h-fit w-full flex-col items-center justify-center p-8 md:px-16 lg:px-32">
        <h2>How to Get Started</h2>
        <div className="mt-8 flex w-full flex-col gap-2 md:flex-row">
          <div className="grid min-h-screen w-full grid-rows-2 gap-2">
            <div className="flex flex-col gap-2 p-4">
              <span className="bg-umurava w-fit rounded-xl p-2 px-4 text-white">
                Step 1
              </span>
              <h4>Sign up on Umurava Platform</h4>
              <p>Submit your completed project for evaluation</p>
              <div className="min-h-56 my-8 relative flex flex-row" >
                <div className="flex-1" />
                <img src={"/Frame 1618868159 1.png"} alt="img" className="object-cover w-auto h-56 rounded-xl" />
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <span className="bg-umurava w-fit rounded-xl p-2 px-4 text-white">
                Step 2
              </span>
              <h4>Browse Open Challenges</h4>
              <p>
                Explore the range of challenges and hackathons and choose one
                that aligns with your interests and career goals
              </p>
              <div className="min-h-56 my-8 relative flex flex-row" >
                <div className="flex-1" />
                <img src={"/Challenges & Hackathons  Page 1.png"} alt="img" className="object-cover w-auto h-56 rounded-xl" />
              </div>
            </div>
          </div>
          <div className="flex min-h-screen w-full flex-col gap-2">
            <div className="flex h-1/3 flex-col gap-4 p-4">
              <span className="bg-umurava w-fit rounded-xl p-2 px-4 text-white">
                Step 3
              </span>
              <h4>Register and participate</h4>
              <p>Sign up for the challenge and start working on the project,</p>
              <div className="bg-umurava h-54 w-full" />
            </div>
            <div className="flex h-1/3 flex-col gap-4 p-4">
              <span className="bg-umurava w-fit rounded-xl p-2 px-4 text-white">
                Step 4
              </span>
              <h4>Submit your work</h4>
              <p>Submit your completed project for evaluation</p>
              <div className="bg-umurava h-54 w-full" />
            </div>
            <div className="flex h-1/3 flex-col gap-4 p-4">
              <span className="bg-umurava w-fit rounded-xl p-2 px-4 text-white">
                Step 5
              </span>
              <h4>Receive Feedback and Recognition</h4>
              <p>Get feedback on your work and celebrate your achievements</p>
              <div className="bg-umurava h-54 w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 md:p-16">
        <div className="bg-umurava grid rounded-xl grid-cols-1 gap-8 p-8 md:p-16 lg:grid-cols-2">
          <div className="relative min-h-96">
            <Image src={"/Rectangle 4386 1.png"} alt="" className=" bg-white object-cover rounded-xl" fill />

          </div>
          <div className="text-white md:p-16 flex justify-center flex-col gap-8">
            <h2>Ready to Unlock Your Career Potential Today!</h2>
            <p>
              Join a challenge or a hackathon to gain valuable work experience,
              build an impressive portofolio and increase your chances to land
              job opportunities and accelerate your career growth
            </p>
            <Button asChild className="bg-white text-umurava p-4 hover:bg-white/70 size-fit">
              <Link href={""}>View Challenge</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
