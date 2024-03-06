import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
  name: "review",
  initialState: false,
  reducers: {
    showHideReview: (state, action) => {
      state = action?.payload;
      return state
    },
  },
});

export const { showHideReview } = reviewSlice.actions;

export default reviewSlice.reducer;
