import { configureStore } from '@reduxjs/toolkit';
import activityReducer from './activitySlice';
import nightModeREducer from './nightModeSlice';

export const store = configureStore({
  reducer: {
    todos: activityReducer,
    nightMode: nightModeREducer,
  },
});
