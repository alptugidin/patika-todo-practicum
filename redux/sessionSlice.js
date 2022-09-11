import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'user',
  initialState: {
    userName: null,
    isLogged: false,
    isNight: false,
  },

  reducers: {
    setSession: (state, action) => {
      state.userName = action.payload.userName;
      state.isNight = action.payload.isNight;
    },

    setNightMode: (state, action) => {
      state.isNight = action.payload;
    },

    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export default sessionSlice.reducer;
export const { setSession, setNightMode, setIsLogged } = sessionSlice.actions;
