"use client";
import { configureStore } from '@reduxjs/toolkit';
import reviewSlice from '../redux/reviewSlice/reviewSlice';

export default configureStore({
  reducer: {
    reviewVisibilty: reviewSlice,
  },
});