"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChallengeDetails } from "@/app/_components/ChallengeDetails";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Breadcrumbs from "@/app/_components/Dashboard/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { FilterIcon, Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { fetchSingleCompetition } from "@/lib/redux/actionCreators/competitionAction";
import { UserRoles } from "@/lib/redux/features/authReducer";
import { fetchCompetitionParticipants } from "@/lib/redux/actionCreators/participantsAction";
import { resetParticipantsState } from "@/lib/redux/features/competition/participantsReducer";
import { resetCompetitionState } from "@/lib/redux/features/competition/competitionReducer";

const formatDuration = (duration: string) => {
  const unit = duration.slice(-1);
  let value = parseInt(duration.slice(0, -1), 10);

  let formattedDuration = "";

  switch (unit) {
    case "d":
      formattedDuration = value + (value > 1 ? " Days" : " Day");
      break;
    case "w":
      formattedDuration = value + (value > 1 ? " Weeks" : " Week");
      break;
    case "h":
      formattedDuration = value + (value > 1 ? " Months" : " Month");
      break;
  }
  return formattedDuration;
};

const page = () => {
  const { competitionid } = useParams();

  const dispatch = useAppDispatch();
  const { loading, competition } = useAppSelector((state) => state.competition);
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { loading: participantsLoading, participants } = useAppSelector(
    (state) => state.participants,
  );

  useEffect(() => {
    dispatch(resetCompetitionState());
    dispatch(resetParticipantsState());
  }, []);

  useEffect(() => {
    if (competitionid) {
      dispatch(fetchSingleCompetition(competitionid as string));
    }
  }, []);

  useEffect(() => {
    if (!competition && competitionid) {
      dispatch(fetchSingleCompetition(competitionid as string));
    }
  }, []);

  useEffect(() => {
    if (competition?.creator === user?.sub || user?.role == UserRoles.ADMIN) {
      dispatch(fetchCompetitionParticipants(competitionid as string));
    }
  }, [competition]);

  if (!competition) {
    return (
      <div className="grid size-full min-h-screen place-items-center text-3xl font-bold text-umurava">
        competition not found
      </div>
    );
  }

  const router = usePathname();
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <Breadcrumbs pathname={router.toString()} />
        <div className="flex w-fit flex-row items-center">
          <div className="flex flex-row gap-4">
            <label className="relative w-32">
              <Input type="text" placeholder="search" className="p-4" />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-umurava" />
            </label>
            <Button variant={"ghost"} size={"icon"} className="p-4">
              <FilterIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 flex flex-col gap-6 rounded-xl border border-umuravadark/10 bg-white p-5 py-7">
          <div className="relative h-[25rem] rounded-xl bg-umurava" />
          <div>
            <h5 className="mb-2">Project Brief: {competition.title}</h5>
            <p className="text-gray-600">{competition.brief}</p>
          </div>
          <h5 className="">Tasks:</h5>
          <div>
            <h5 className="-mt-2 mb-2">Project Description</h5>
            <p className="pl-2 text-gray-600">{competition.description}</p>
          </div>
          <div>
            <h5 className="mb-2">Product Requirements</h5>
            <p className="pl-2 text-gray-600">{competition.description}</p>
          </div>
          <div>
            <h5 className="mb-2">Deliverables</h5>
            <p className="pl-2 text-gray-600">{competition.deliverables}</p>
          </div>
          {/* <div>
            <h4>Notes</h4>
            <p className="prose-lg p-2">{Notes}</p>
          </div> */}
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex min-h-fit flex-col gap-5 rounded-xl border border-umuravadark/10 bg-white p-5">
            <div>
              <h6 className="font-semibold">Key Instructions:</h6>
              <p className="mt-2 leading-5 tracking-tight text-gray-500">
                You are free to schedule the clarification call with the team
                via this
              </p>
            </div>
            <ChallengeDetails
              email={competition.contactEmail}
              category={competition.category}
              Duration={formatDuration(competition.duration)}
              Prize={competition.prize}
            />
            {user?.role == UserRoles.CLIENT &&
              competition.creator === user?.sub && (
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    size={"lg"}
                    className="w-full bg-red-500/80 py-6 text-base hover:bg-red-500"
                  >
                    Delete
                  </Button>
                  <Button
                    size={"lg"}
                    className="w-full bg-umurava/80 py-6 hover:bg-umurava"
                  >
                    <Link
                      className="text-base"
                      href={`/app/dashboard/Hackathons/${competitionid}/edit`}
                    >
                      Edit
                    </Link>
                  </Button>
                </div>
              )}
            {user?.role == UserRoles.TALENT && (
              <Button
                size={"lg"}
                className="w-full bg-umurava/80 py-6 text-base hover:bg-umurava"
              >
                Submit your work
              </Button>
            )}
          </div>
          {((user?.role == UserRoles.CLIENT &&
            competition.creator === user?.sub) ||
            user?.role == UserRoles.ADMIN) && (
            <div className="flex min-h-[18rem] flex-col gap-4 rounded-xl border border-umuravadark/10 bg-white py-2">
                <div className="flex items-center gap-2 px-5 py-3">
                  <span className="text-lg font-semibold">Participants</span>
                  <span className="h-5 rounded-xl bg-umurava px-2 py-[2px] text-xs text-white">
                    {participants?.length || 0}
                  </span>
                </div>
                <div className="[&:nth-child(2)]:border-t">
                  {participants &&
                    participants.slice(0, 3).map((participant) => (
                      <div
                        className="flex h-20 flex-row items-center gap-3 border-b border-gray-200 px-5"
                        key={participant._id}
                      >
                        <div className="relative size-10">
                          {true && (
                            <div className="absolute bottom-0 right-0 z-20 size-3 rounded-full bg-green-500" />
                          )}

                          <img
                            src="https://i.pinimg.com/736x/2f/57/8d/2f578d07945132849b05fbdaf78cba38.jpg"
                            alt="avatar"
                            className="size-10 rounded-full bg-slate-300 object-contain"
                          />
                        </div>
                        <div className="flex flex-col justify-center capitalize">
                          <span className="text-[.99rem] font-medium leading-5">
                            {participant.profile.fullName}
                          </span>
                          <span className="text-[.86rem] text-gray-400">
                            {participant.profile.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  <div className="mx-5 my-3">
                    <Button className="w-full bg-umurava/80 py-6 text-base hover:bg-umurava">
                      View All
                    </Button>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
