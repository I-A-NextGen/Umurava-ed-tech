import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createCompetition } from "../../actionCreators/competitionAction";
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

const createCompetitionSlice = createSlice({
  name: "MutateCompetition",
  initialState,
  reducers: {},
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
      );
  },
});

export default createCompetitionSlice.reducer;
