import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import categories from "@/app/lib/data/catetgories.json";
import { ArtistCategory } from "./types/category";


const typedCategories: ArtistCategory[] = categories;

interface FilterState {
  categories: ArtistCategory[];
  selectedCategory: string | null;
  selectedSubCategory: string | null;
}

const initialState: FilterState = {
  categories: typedCategories,
  selectedCategory: null,
  selectedSubCategory: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      state.selectedSubCategory = null; // Reset subcategory on category change
    },
    setSubCategory: (state, action: PayloadAction<string>) => {
      state.selectedSubCategory = action.payload;
    },
    resetFilters: (state) => {
      state.selectedCategory = null;
      state.selectedSubCategory = null;
    },
  },
});

export const { setCategory, setSubCategory, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;

