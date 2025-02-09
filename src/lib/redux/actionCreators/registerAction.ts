import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export type RegisterData = {
  role: "TALENT" | "CLIENT";
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userRegisterData: RegisterData, { rejectWithValue }) => {
    try {
      const { confirmPassword, ...sanitizedData} = userRegisterData
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
        sanitizedData,
      );

      return response.data;
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
