import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Artist = {
  id: string;
  name: string;
  genre: string;
  image: string;
  bio: string;
  location?: string;
  priceRange?: string;
  rating?: number;
};

interface ArtistState {
  artists: Artist[];
  selectedArtist: Artist | null;
}

const initialState: ArtistState = {
  artists: [],
  selectedArtist: null,
};

export const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setArtists: (state, action: PayloadAction<Artist[]>) => {
      state.artists = action.payload;
    },
    addArtist: (state, action: PayloadAction<Artist>) => {
      state.artists.push(action.payload);
    },
    setSelectedArtist: (state, action: PayloadAction<Artist | null>) => {
      state.selectedArtist = action.payload;
    },
    clearArtists: (state) => {
      state.artists = [];
      state.selectedArtist = null;
    },
  },
});

export const { setArtists, addArtist, setSelectedArtist, clearArtists } = artistSlice.actions;

export default artistSlice.reducer;
