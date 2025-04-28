import { configureStore } from '@reduxjs/toolkit';
import carouselReducer from './features/carouselSlice';

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    // ... other reducers ...
  },
});
