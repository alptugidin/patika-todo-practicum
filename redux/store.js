import { configureStore } from '@reduxjs/toolkit';
import activityReducer from './activitySlice';
import sessionReducer from './sessionSlice';

export const store = configureStore({
  reducer: {
    todos: activityReducer,
    session: sessionReducer,
  },
});
