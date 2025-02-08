import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "../store";

export type NewCompetitionData = {
  title: string;
  contactEmail: string;
  description: string;
  deliverables: string;
  skills: Array<{
    value: string;
    label: string;
  }>;
  seniorityLevel: Array<{
    value: string;
    label: string;
  }>;
  // status: string;
  creator: string;
  deadline: Date;
  durationUnit: string;
  durationValue: number;
  prize: string;
  brief: string;
  requirement: string;
  category: {
    value: string;
    label: string;
  };
};

export const createCompetition = createAsyncThunk(
  "app/create/competition",
  async (
    competitionData: NewCompetitionData,
    { rejectWithValue, getState },
  ) => {
    try {
      const state = getState() as RootState;
      const duration =
        competitionData.durationValue + competitionData.durationUnit;
      const tempSkills = competitionData.skills.map((skill) => skill.value);
      const tempLevels = competitionData.seniorityLevel.map(
        (level) => level.value,
      );
      const tempCategory = competitionData.category.value;

      const {
        skills,
        category,
        seniorityLevel,
        durationUnit,
        durationValue,
        ...sanitizedData
      } = competitionData;
      console.log(sanitizedData, state);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/competitions`,
        {
          ...sanitizedData,
          duration,
          skills: tempSkills,
          seniorityLevel: tempLevels,
          category: tempCategory,
        },
        { headers: { Authorization: `Bearer ${state.auth.token}` } },
      );
      return response.data.data;
    } catch (err) {
      const error = err as AxiosError;
      let errMessage = "Something went wrong, please try again.";
      if (error.status == 400) {
        errMessage = "Please ensure your input is correct.";
      }
      return rejectWithValue({ message: errMessage });
    }
  },
);

export const fetchCompetitions = createAsyncThunk(
  "app/fetch/competitions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/competitions`,
      );
      return response.data.data;
    } catch (err) {
      let errMessage = "Something went wrong, please try again.";

      return rejectWithValue({ message: errMessage });
    }
  },
);

export const fetchSingleCompetition = createAsyncThunk(
  "app/fetch/competition",
  async (competitionId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/competitions/${competitionId}`,
      );
      return response.data.data.competition
    } catch (err) {
      let errMessage = "Something went wrong, please try again.";

      return rejectWithValue({ message: errMessage });
    }
  },
);
