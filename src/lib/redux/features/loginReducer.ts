import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import build from "next/dist/build";
import { loginUser } from "../actionCreators/loginAction";

interface ILogin {
  login: { message: string; data: { token: string } } | null;
  loading: boolean;
  error: string | null;
}

const initialState: ILogin = {
  login: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetLoginState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<ILogin["login"]>) => {
          state.loading = false;
          state.login = action.payload;
        },
      )
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message || "Something went wrong!";
      });
  },
});

export const { resetLoginState } = loginSlice.actions;
export default loginSlice.reducer;
