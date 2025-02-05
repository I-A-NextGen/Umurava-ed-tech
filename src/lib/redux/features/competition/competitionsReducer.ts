import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCompetitions } from "../../actionCreators/competitionAction";

export interface ICompetition {
  id: string;
  title: string;
  contactEmail: string;
  description: string;
  deliverables: string;
  skills: Array<string>;
  seniorityLevel: Array<string>;
  status: string;
  creator: string;
  deadline: Date;
  duration: string;
  prize: string;
  brief: string;
  requirement: string;
  category: string;
}

interface ICompetitionState {
  competitions: {
    totalCompetitions: number;
    competitions: Array<ICompetition>;
  };
  loading: boolean;
  error?: unknown;
}

const initialState: ICompetitionState = {
  competitions: {
    totalCompetitions: 0,
    competitions: [],
  },
  loading: false,
  error: null,
};

const competitionsSlice = createSlice({
  name: "Competitions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompetitions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCompetitions.fulfilled,
        (state, action: PayloadAction<ICompetitionState["competitions"]>) => {
          state.loading = false;
          state.competitions = action.payload;
        },
      )
      .addCase(
        fetchCompetitions.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.message || "Something went wrong!";
        },
      );
  },
});


export default competitionsSlice.reducer;
