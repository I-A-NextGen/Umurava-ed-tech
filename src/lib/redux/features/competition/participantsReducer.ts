import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCompetitionParticipants } from "../../actionCreators/participantsAction";

export interface IParticipant {
  _id: string;
  email: string
  profile: {
    firstName: string;
    lastName: string;
    fullName: string;
    title: string;
    photo: string;
  };
}


interface IParticipantState {
  participants?: Array<IParticipant>;
  loading: boolean;
  error?: unknown;
}

const initialState: IParticipantState = {
  participants: [],
  loading: false,
  error: null,
};

const participantsSlice = createSlice({
  name: "Participants",
  initialState,
  reducers: {
    resetParticipantsState: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompetitionParticipants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCompetitionParticipants.fulfilled,
        (state, action: PayloadAction<Array<IParticipant>>) => {
          state.loading = false;
          state.participants = action.payload;
        },
      )
      .addCase(
        fetchCompetitionParticipants.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.message || "Something went wrong!";
        },
      );
  },
});

export const {resetParticipantsState} = participantsSlice.actions
export default participantsSlice.reducer;
