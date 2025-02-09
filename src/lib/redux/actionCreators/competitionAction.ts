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

const getSanitizedData = (data: NewCompetitionData) => {
  const duration = data.durationValue + data.durationUnit;
  const tempSkills = data.skills.map((skill) => skill.value);
  const tempLevels = data.seniorityLevel.map((level) => level.value);
  const tempCategory = data.category.value;

  const {
    skills,
    category,
    seniorityLevel,
    durationUnit,
    durationValue,
    ...sanitizedData
  } = data;

  return {
    ...sanitizedData,
    duration,
    skills: tempSkills,
    seniorityLevel: tempLevels,
    category: tempCategory,
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

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/competitions`,
        {
          ...getSanitizedData(competitionData),
        },
        { headers: { Authorization: `Bearer ${state.auth.token}` } },
      );
      return response.data;
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
        `${process.env.NEXT_PUBLIC_API_URL}/competitions?limit=3000`,
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
      return response.data.data.competition;
    } catch (err) {
      let errMessage = "Something went wrong, please try again.";

      return rejectWithValue({ message: errMessage });
    }
  },
);

export const updateCompetition = createAsyncThunk(
  "app/update/competition",
  async (
    competitionData: { id: string; data: NewCompetitionData },
    { rejectWithValue, getState },
  ) => {
    try {
      const state = getState() as RootState;
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/competitions/${competitionData.id}`,
        { ...getSanitizedData(competitionData.data) },
        { headers: { Authorization: `Bearer ${state.auth.token}` } },
      );
      return response.data;
    } catch (err) {
      let errMessage = "Something went wrong, please try again.";

      return rejectWithValue({ message: errMessage });
    }
  },
);

export const deleteCompetition = createAsyncThunk(
  "app/delete/competition",
  async (competitionId: string, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/competitions/${competitionId}`,
        { headers: { Authorization: `Bearer ${state.auth.token}` } },
      );
      return response.data;
    } catch (err) {
      let error = err as AxiosError;
      let errMessage;
      if (error.status && error.status >= 500)
        errMessage = "Something went wrong, please try again.";

      return rejectWithValue({
        message:
          ((err as AxiosError).response?.data as any).message || errMessage,
      });
    }
  },
);

export const fetchCompetitionsStats = createAsyncThunk(
  "app/competition/stats",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/competitions/stats`,
        { headers: { Authorization: `Bearer ${state.auth.token}` } },
      );
      return response.data.data;
    } catch (err) {
      let error = err as AxiosError;
      let errMessage;
      if (error.status && error.status >= 500)
        errMessage = "Something went wrong, please try again.";

      return rejectWithValue({
        message:
          ((err as AxiosError).response?.data as any).message || errMessage,
      });
    }
  },
);
