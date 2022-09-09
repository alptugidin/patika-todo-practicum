import { createSlice } from '@reduxjs/toolkit';

export const nightModeSlice = createSlice({
  name: 'nightMode',
  initialState: {
    isNight: false,
  },
  reducers: {
    nightMode: (state) => {
      state.isNight = !state.isNight;
    },
  },
});

export default nightModeSlice.reducer;
export const { nightMode } = nightModeSlice.actions;
