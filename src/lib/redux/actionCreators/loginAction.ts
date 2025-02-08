import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export type LoginData = {
  email: string;
  password: string;
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData: LoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
        userData,
      );

      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      let errMessage = "Login failed, check your credentials.";

      if (error.status && error.status === 404) {
        errMessage = "Oops! Account not registered!";
      } else if (error.status && error.status >= 500) {
        errMessage = "Something went wrong, please try again.";
      }
      return rejectWithValue({ message: errMessage });
    }
  },
);
