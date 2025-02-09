import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserProfile } from "../actionCreators/profileAction";

interface IProfile {
  profile: {
    _id: string;
    firstName: string;
    lastName: string;
    photo: string;
    title: string;
    bio: string;
    nationality: string;
    location: string;
    telephone: string;
    fullName: string;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: IProfile = {
  profile: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfileState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserProfile.fulfilled,
        (state, action: PayloadAction<IProfile["profile"]>) => {
          state.loading = false;
          state.profile = action.payload;
        },
      )
      .addCase(
        fetchUserProfile.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.message || "Something went wrong!";
        },
      );
  },
});

export const { resetProfileState } = profileSlice.actions;
export default profileSlice.reducer;
