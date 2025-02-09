import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import build from "next/dist/build";
import { loginUser } from "../actionCreators/loginAction";
import { registerUser } from "../actionCreators/registerAction";

interface IRegister {
  registerData: { message: string; data: unknown } | null;
  loading: boolean;
  error: string | null;
}

const initialState: IRegister = {
  registerData: null,
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "Create new account ",
  initialState,
  reducers: {
    resetRegisterState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<IRegister["registerData"]>) => {
          state.loading = false;
          state.registerData = action.payload;
        },
      )
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message || "Something went wrong!";
      });
  },
});

export const { resetRegisterState } = registerSlice.actions;
export default registerSlice.reducer;
