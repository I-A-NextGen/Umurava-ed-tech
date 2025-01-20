import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomeHero = () => {
  return (
    <>
      <div className="grid min-h-[720px] grid-cols-1 md:grid-cols-2">
        <div className="ic flex flex-col justify-center gap-4 px-8 md:px-16">
          <h1 className="text-blue-700">
            Build Work Experience through Skills Challenges Program
          </h1>
          <p>
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
        <div className="grid grid-cols-2 gap-2 p-8 md:p-16">
          <div className="relative size-full overflow-clip rounded-xl bg-blue-500">
            <svg
              width="656"
              height="656"
              viewBox="0 0 656 656"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-32 right-32 size-96"
            >
              <g filter="url(#filter0_d_491_15344)">
                <circle
                  cx="328"
                  cy="324"
                  r="278.5"
                  stroke="white"
                  stroke-width="91"
                  shapeRendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_491_15344"
                  x="0"
                  y="0"
                  width="656"
                  height="656"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_491_15344"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_491_15344"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="relative size-full overflow-clip rounded-xl bg-blue-500">
            <svg
              width="656"
              height="656"
              viewBox="0 0 656 656"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-32 top-32 size-96"
            >
              <g filter="url(#filter0_d_491_15344)">
                <circle
                  cx="328"
                  cy="324"
                  r="278.5"
                  stroke="white"
                  strokeWidth="91"
                  shapeRendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_491_15344"
                  x="0"
                  y="0"
                  width="656"
                  height="656"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_491_15344"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_491_15344"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
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
            <span className="size-12 bg-white text-blue-700"></span>

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
            <span className="size-12 bg-white text-blue-700"></span>
            <h4>Enhance Your Employment Path</h4>
            <p>
              elop the in-demand skills and build a strong portofolio to
              increase your chances of landing your dream job or contract.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-blue-500 p-8 md:p-16">
            <span className="size-12 bg-white text-blue-700"></span>
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
      <div>
        
      </div>
    </>
  );
};

export default HomeHero;
