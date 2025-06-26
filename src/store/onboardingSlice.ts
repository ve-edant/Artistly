import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Artist } from "./types/artist";

interface OnboardedArtistState {
  onboardedArtists: Artist[];
}

const initialState: OnboardedArtistState = {
  onboardedArtists: [],
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    addOnboardedArtist: (state, action: PayloadAction<Artist>) => {
      state.onboardedArtists.push(action.payload);
    },
    removeOnboardedArtist: (state, action: PayloadAction<string>) => {
      state.onboardedArtists = state.onboardedArtists.filter(
        (artist) => artist.id !== action.payload
      );
    },
    clearOnboardedArtists: (state) => {
      state.onboardedArtists = [];
    },
  },
});

export const {
  addOnboardedArtist,
  removeOnboardedArtist,
  clearOnboardedArtists,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;
