import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'user',
  initialState: {
    userName: null,
    isNight: false,
  },

  reducers: {
    setUsername: (state, action) => {
      state.userName = action.payload;
    },

    setNightMode: (state, action) => {
      state.isNight = action.payload;
    },
  },
});

export default sessionSlice.reducer;
export const { setUsername, setNightMode } = sessionSlice.actions;
