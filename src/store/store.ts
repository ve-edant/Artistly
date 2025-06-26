import { configureStore } from '@reduxjs/toolkit'
import artistReducer from "@/store/artistSlice"
import categoryReducer from "@/store/categorySlice"

export const store = configureStore({
  reducer: {
    artist: artistReducer,
    categories: categoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
