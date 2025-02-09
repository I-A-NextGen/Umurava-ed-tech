"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChallengeDetails } from "@/app/_components/ChallengeDetails";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import {
  deleteCompetition,
  fetchSingleCompetition,
} from "@/lib/redux/actionCreators/competitionAction";
import { UserRoles } from "@/lib/redux/features/authReducer";
import {
  applyCompetition,
  fetchCompetitionParticipants,
} from "@/lib/redux/actionCreators/participantsAction";
import { resetParticipantsState } from "@/lib/redux/features/competition/participantsReducer";
import { resetCompetitionState } from "@/lib/redux/features/competition/competitionReducer";
import { formatDuration } from "@/lib/utils/formatDuration";
import { toast } from "react-toastify";
import TopNavbar from "@/app/_components/Dashboard/TopNavbar";
import { isValid } from "date-fns";

const page = () => {
  const { competitionid } = useParams();
  const router = useRouter();

  const dispatch = useAppDispatch();
  const [applyButton, setApplyButton] = useState({
    isValid: false,
    value: "",
  });

  const { loading, competition } = useAppSelector((state) => state.competition);
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { loading: participantsLoading, participants } = useAppSelector(
    (state) => state.participants,
  );
  const {
    loading: mutateCompetitionLoading,
    error: mutateCompetitionError,
    competition: mutateCompetition,
  } = useAppSelector((state) => state.mutateCompetition);

  const {
    loading: applicationLoading,
    error: applicationError,
    message: applicationMessage,
  } = useAppSelector((state) => state.application);

  useEffect(() => {
    dispatch(resetCompetitionState());
    dispatch(resetParticipantsState());

    if (!competition) {
      dispatch(fetchSingleCompetition(competitionid as string));
    }
  }, []);

  useEffect(() => {
    if (applicationMessage) {
      toast.success(applicationMessage);
    }
    if (applicationError) {
      toast.error(applicationError as string);
    }
  }, [applicationError, applicationMessage]);

  useEffect(() => {
    if (mutateCompetition) {
      toast.success(mutateCompetition.message);
      router.replace(`/app/dashboard/Challenges&Hackathons`);
    }
    if (mutateCompetitionError) {
      toast.error(mutateCompetitionError as string);
    }
  }, [mutateCompetitionError, mutateCompetition]);

  useEffect(() => {
    if (competition?.creator === user?.sub || user?.role == UserRoles.ADMIN) {
      dispatch(fetchCompetitionParticipants(competitionid as string));
    }
    if (user?.role === UserRoles.TALENT && competition) {
      switch (competition.status) {
        case "open":
          setApplyButton({ isValid: true, value: "Apply" });
          break;
        case "ongoing":
          setApplyButton({ isValid: true, value: "Ongoing" });
          break;
        case "completed":
          setApplyButton({ isValid: false, value: "Completed" });
          break;
        default:
          setApplyButton({ isValid: false, value: "" });
          break;
      }
    }
  }, [competition]);

  if (!competition) {
    return (
      <div className="grid size-full min-h-screen place-items-center text-3xl font-bold text-umurava">
        competition not found
      </div>
    );
  }

  const path = usePathname();
  return (
    <>
      <TopNavbar
        routes={[
          {
            label: "Challenges & Hackathons",
            link: "/app/dashboard/Challenges&Hackathons",
          },
          {
            label: competition.title,
            link: "",
          },
        ]}
      />
      <div className="mt-14 grid grid-cols-3 gap-5">
        <div className="col-span-2 flex flex-col gap-6 rounded-xl border border-umuravadark/10 bg-white p-5 py-7">
          <div className="flex items-center justify-center relative h-[25rem] rounded-xl bg-umurava">
            <img src={"/thumbnail.png"} alt="logo" />
          </div>
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
                    onClick={() => dispatch(deleteCompetition(competition.id))}
                    className="w-full bg-red-500/80 py-6 text-base hover:bg-red-500"
                  >
                    Delete
                  </Button>
                  <Link className="text-base" href={`${competitionid}/edit`}>
                    <Button
                      size={"lg"}
                      className="w-full bg-umurava/80 py-6 hover:bg-umurava"
                    >
                      Edit
                    </Button>
                  </Link>
                </div>
              )}
            {applyButton.isValid && (
              <Button
                size={"lg"}
                disabled={!applyButton.isValid}
                onClick={() => {
                  dispatch(applyCompetition(competitionid as string));
                }}
                className="w-full bg-umurava/80 py-6 text-base hover:bg-umurava"
              >
                {applyButton.value}
              </Button>
            )}
          </div>
          {((user?.role == UserRoles.CLIENT &&
            competition.creator === user?.sub) ||
            user?.role == UserRoles.ADMIN) && (
            <div className="flex min-h-[18rem] flex-col rounded-xl border border-umuravadark/10 bg-white py-2">
              <div className="flex items-center gap-2 px-5 py-3">
                <span className="text-lg font-semibold">Participants</span>
                <span className="h-5 rounded-xl bg-umurava px-2 py-[2px] text-xs text-white">
                  {participants?.length || 0}
                </span>
              </div>
              <div className="flex h-full flex-col justify-between [&:nth-child(2)]:border-t">
                {participants &&
                  participants.slice(0, 5).map((participant) => (
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
                {participants && participants?.length > 5 && (
                  <div className="mx-5 my-3">
                    <Button className="w-full bg-umurava/80 py-6 text-base hover:bg-umurava">
                      View All
                    </Button>
                  </div>
                )}
                {participants && !participants?.length && (
                  <p className="mx-5 flex h-full items-center justify-center text-[.9rem] text-gray-500">
                    No participants currently available.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
