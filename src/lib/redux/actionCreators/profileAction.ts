import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "../store";

export const fetchUserProfile = createAsyncThunk(
  "auth/profile",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
        { headers: { Authorization: `Bearer ${state.auth.token}` } },
      );

      return response.data.data;
    } catch (err) {
      const error = err as AxiosError;
      let errMessage = (error.response?.data as any).message;

      if (error.status && error.status >= 500) {
        errMessage = "Something went wrong, please try again.";
      }
      return rejectWithValue({ message: errMessage });
    }
  },
);
