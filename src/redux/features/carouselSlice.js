import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDragging: false,
  startX: 0,
  scrollLeft: 0,
  currentSlide: 0,
  currentIndex: 0,
  scrollPosition: 0
};

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    startDrag: (state, action) => {
      state.isDragging = true;
      state.startX = action.payload.startX;
      state.scrollLeft = action.payload.scrollLeft;
    },
    stopDrag: (state) => {
      state.isDragging = false;
    },
    nextSlide: (state, action) => {
      const totalSlides = action.payload;
      state.currentIndex = state.currentIndex === totalSlides - 1 ? 0 : state.currentIndex + 1;
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    scrollLeft: (state, action) => {
      state.scrollPosition -= action.payload
    },
    scrollRight: (state, action) => {
      state.scrollPosition += action.payload
    }
  },
});

export const { startDrag, stopDrag, nextSlide, setCurrentIndex, scrollLeft, scrollRight } = carouselSlice.actions;
export default carouselSlice.reducer; 