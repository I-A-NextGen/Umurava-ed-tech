import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createCompetition,
  deleteCompetition,
  updateCompetition,
} from "../../actionCreators/competitionAction";
import { ICompetition } from "./competitionsReducer";

interface ICompetitionState {
  competition?: { message: string; data: { competition: ICompetition } };
  loading: boolean;
  error?: unknown;
}

const initialState: ICompetitionState = {
  competition: undefined,
  loading: false,
  error: null,
};

const mutateCompetitionSlice = createSlice({
  name: "MutateCompetition",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCompetition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createCompetition.fulfilled,
        (state, action: PayloadAction<ICompetitionState["competition"]>) => {
          state.loading = false;
          state.competition = action.payload;
        },
      )
      .addCase(
        createCompetition.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.message || "Something went wrong!";
        },
      )
      .addCase(updateCompetition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateCompetition.fulfilled,
        (state, action: PayloadAction<ICompetitionState["competition"]>) => {
          state.loading = false;
          state.competition = action.payload;
        },
      )
      .addCase(
        updateCompetition.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.message || "Something went wrong!";
        },
      )
      .addCase(deleteCompetition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deleteCompetition.fulfilled,
        (state, action: PayloadAction<ICompetitionState["competition"]>) => {
          state.loading = false;
          state.competition = action.payload;
        },
      )
      .addCase(
        deleteCompetition.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.message || "Something went wrong!";
        },
      );
  },
});

export const { resetState } = mutateCompetitionSlice.actions;

export default mutateCompetitionSlice.reducer;
