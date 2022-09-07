import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const response = await axios.get(`${import.meta.env.VITE_MOCK_API}/todos`);
  return response.data;
});

export const postTodos = createAsyncThunk('todos/postTodos', async ({ content }) => {
  const todo = {
    content,
    isCompleted: false,
  };
  const response = await axios.post(`${import.meta.env.VITE_MOCK_API}/todos`, todo);
  return response.data;
});

export const activitySlice = createSlice({
  name: 'todos',
  initialState: {
    activities: [],
    isLoading: false,
    isPosting: false,
    error: null,
  },

  extraReducers: {

    // GET
    [getTodos.pending]: (state) => {
      state.isLoading = true;
    },

    [getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.message;
    },

    [getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.activities.push(...action.payload);
    },

    // POST
    [postTodos.pending]: (state) => {
      state.isPosting = true;
    },

    [postTodos.rejected]: (state, action) => {
      state.isPosting = false;
      state.error = action.message;
    },

    [postTodos.fulfilled]: (state, action) => {
      state.isPosting = false;
      console.log(action.payload);
      state.activities.push(action.payload);
    },
  },

});

export default activitySlice.reducer;
