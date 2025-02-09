import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "../store";

export const fetchCompetitionParticipants = createAsyncThunk(
  "app/fetch/competition/participants",
  async (competitionId: string, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/competitions/${competitionId}/participants`,
        { headers: { Authorization: `Bearer ${state.auth.token}` } },
      );
      return response.data.data.participants;
    } catch (err) {
      const error = err as AxiosError;
      let errMessage = "Something went wrong, please try again.";

      return rejectWithValue({ message: errMessage });
    }
  },
);

export const applyCompetition = createAsyncThunk(
  "app/apply/competition",
  async (competitionId: string, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/competitions/${competitionId}/apply`,{},
        { headers: { Authorization: `Bearer ${state.auth.token}` } },
      );
      return response.data.message;
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
