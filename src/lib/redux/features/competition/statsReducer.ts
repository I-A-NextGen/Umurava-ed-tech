import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCompetitionsStats,
  fetchSingleCompetition,
} from "../../actionCreators/competitionAction";
import { ICompetition } from "./competitionsReducer";

type StatsFields = {
  competitions: number;
  participants: number;
  completed: number;
  open: number;
  ongoing: number;
};

export interface IStatsState {
  stats: {
    all: StatsFields;
    week: StatsFields;
    month: StatsFields;
    year: StatsFields;
  };
  loading: boolean;
  error?: unknown;
}

const initialFieldValue = {
  competitions: 0,
  participants: 0,
  completed: 0,
  open: 0,
  ongoing: 0,
};
const initialState: IStatsState = {
  stats: {
    all: initialFieldValue,
    week: initialFieldValue,
    month: initialFieldValue,
    year: initialFieldValue,
  },
  loading: false,
  error: null,
};

const statsSlice = createSlice({
  name: "Competition Stats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompetitionsStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCompetitionsStats.fulfilled,
        (state, action: PayloadAction<IStatsState["stats"]>) => {
          state.loading = false;
          state.stats = action.payload;
        },
      )
      .addCase(
        fetchCompetitionsStats.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.stats = initialState.stats;
          state.error = action.payload.message || "Something went wrong!";
        },
      );
  },
});

export default statsSlice.reducer;
