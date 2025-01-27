import { Button } from "@/components/ui/button";
import { logos, Skills } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-fit px-8 md:px-16">
        <div className="mt-16" />
        <div className="min-h-fit">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h4 className="text-umurava">
                Accelerate Your Students and Traineess Employability and Career
                Growth through Project-based Learning Solution
              </h4>
              <p>
                We partner with Universities, Schools, and Trainining
                Institutions to  build the work experience of their students and
                trainees through project based learning challenges and
                hackathons
              </p>
              <Button
                className="w-fit bg-umurava px-8 hover:bg-umurava/80"
                size="lg"
              >
                Learn More
              </Button>
            </div>
            <img
              src="/Rectangle 4409.png"
              alt="For-learning-institutions"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
        <div>
          <div className="my-16 flex w-full flex-col items-center justify-center gap-4 text-center">
            <h2>Key Offerings & Benefits:</h2>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <div className="row-span-1 flex flex-col gap-4 rounded-xl bg-blue-500 p-8 text-white lg:p-16">
              <span className="size-12 bg-white text-blue-700"></span>
              <h4 className="text-xl">
                Employability and Career Development Opportunities
              </h4>
              <p className="text-sm">
                Students gain hands-on experience working on real-world
                challenges and help them build professional networks that
                increase their chances and readiness of landing job
                opportunities and this lead to career advancement and long-term
                succes..
              </p>
            </div>
            
            <div className="row-span-1 flex flex-col gap-4 rounded-xl bg-blue-500 p-8 text-white lg:p-16">
              <span className="size-12 bg-white text-blue-700"></span>
              <h4 className="text-xl">
                Practical Application of Classroom Knowledge
              </h4>
              <p className="text-sm">
                The Skills Challenges bridge the gap between theoretical
                learning and practical application, reinforcing what students
                learn in their academic courses. 
              </p>
            </div>
            <div className="row-span-1 flex flex-col gap-4 rounded-xl bg-blue-500 p-8 text-white  lg:p-16">
              <span className="size-12 bg-white text-blue-700"></span>
              <h4 className="text-xl">Students & Trainees Engagement</h4>
              <p className="text-sm">
                Embed and incorporate Skills Challenges into your courses to
                give students and trainees hands-on projects and practices  that
                enhance their learning experience and skills mastery.
                Competitive and project-based challenges keep students motivated
                and actively engaged in their learning journey.
              </p>
            </div>
            <div className="row-span-1 flex flex-col gap-4 rounded-xl bg-blue-500 p-8 md:col-span-2 text-white lg:p-16">
              <span className="size-12 bg-white text-blue-700"></span>
              <h4 className="text-xl">
              Access to the Industry Experts & Mentors
              </h4>
              <p className="text-sm">
              Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field. 
              </p>
            </div>
            <div className="row-span-1 flex flex-col gap-4 rounded-xl bg-blue-500 p-8 text-white lg:p-16">
              <span className="size-12 bg-white text-blue-700"></span>
              <h4 className="text-xl">
              Skills Assessments
              </h4>
              <p className="text-sm">
              Embed our projects based tests and skills assessments directly into your curriculum.
              </p>
            </div>
          </div>
        </div>
        <div className="my-16">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h4 className="md:w-2/3">Join a few Educational Institutions using Skills Challenges by Umurava</h4>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 py-16 md:gap-4">
                {
                    logos.map((logo,index) => (
                        <img key={index} src={logo} alt="logo" className="w-32 object-contain h-32" />
                    ))
                }
            </div>
        </div>
        <div className="my-16">
            <div className="w-full flex flex-col items-center justify-center gap-4 text-center">
                <h4 className="md:w-2/3">How Skills Challenges Program can Be Integrated into your Learning Institution</h4>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-2 md:gap-4">
                <div className="flex flex-col gap-4 md:p-16">
                    {
                        Skills.map((item,i) => (
                            <div key={i} className="flex flex-row gap-4">
                                <span className="p-4 grid place-items-center bg-umurava text-white rounded-full">{i+1}</span>
                                <p>{item}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="relative">
                    <Image src="/skill section banner 1.png" alt="Skills Challenges" className="w-full rounded-2xl" fill/>
                </div>
            </div>
        </div>
        <div className="my-16 bg-umurava min-h-96 p-8 text-white flex items-center justify-center flex-col gap-4 rounded-xl">
            <div className="flex items-center justify-center text-center">
            <h3 className="text-center md:w-1/2">Ready to transform your learning institution?</h3>
            </div>
            <Button size={"lg"} className="w-fit bg-white text-umurava hover:bg-umurava/80">
                Let&apos;s Partner
            </Button>
        </div>
      </div>
    </>
  );
};

export default page;
