import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSingleCompetition } from "../../actionCreators/competitionAction";
import { ICompetition } from "./competitionsReducer";

interface ICompetitionState {
  competition?: ICompetition;
  loading: boolean;
  error?: unknown;
}

const initialState: ICompetitionState = {
  competition: undefined,
  loading: false,
  error: null,
};

const competitionSlice = createSlice({
  name: "Competitions",
  initialState,
  reducers: { resetCompetitionState: () => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCompetition.pending, (state) => {
        state.loading = true;
        state.competition = undefined;
        state.error = null;
      })
      .addCase(
        fetchSingleCompetition.fulfilled,
        (state, action: PayloadAction<ICompetitionState["competition"]>) => {
          state.loading = false;
          state.competition = action.payload;
        },
      )
      .addCase(
        fetchSingleCompetition.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.message || "Something went wrong!";
        },
      );
  },
});
export const { resetCompetitionState } = competitionSlice.actions;
export default competitionSlice.reducer;
