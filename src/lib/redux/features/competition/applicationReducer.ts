import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  applyCompetition,
  fetchCompetitionParticipants,
} from "../../actionCreators/participantsAction";

interface IApplicationState {
  message?: string;
  loading: boolean;
  error?: unknown;
}

const initialState: IApplicationState = {
  message: undefined,
  loading: false,
  error: null,
};

const applicationSlice = createSlice({
  name: "Application",
  initialState,
  reducers: {
    resetApplicationState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(applyCompetition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        applyCompetition.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.message = action.payload;
        },
      )
      .addCase(
        applyCompetition.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.message || "Something went wrong!";
        },
      );
  },
});

export const { resetApplicationState } = applicationSlice.actions;
export default applicationSlice.reducer;
