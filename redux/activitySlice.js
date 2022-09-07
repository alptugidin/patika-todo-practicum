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

export const deleteTodos = createAsyncThunk('todos/deleteTodos', async ({ id }) => {
  const response = await axios.delete(`${import.meta.env.VITE_MOCK_API}/todos/${id}`);
  return response.data;
});

export const putTodos = createAsyncThunk('todos/putTodos', async ({ id, content }) => {
  const response = await axios.put(`${import.meta.env.VITE_MOCK_API}/todos/${id}`, { content });
  return response.data;
});

export const activitySlice = createSlice({
  name: 'todos',
  initialState: {
    activities: [],
    isLoading: false,
    isPosting: false,
    isRemoving: false,
    isUpdating: false,
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
      state.activities.push(action.payload);
    },
    // DELETE
    [deleteTodos.pending]: (state) => {
      state.isRemoving = true;
    },

    [deleteTodos.rejected]: (state, action) => {
      state.isRemoving = false;
      state.error = action.message;
    },

    [deleteTodos.fulfilled]: (state, action) => {
      state.isRemoving = false;
      state.activities = state.activities.filter((item) => item.id !== action.payload.id);
    },
    // PUT
  },

});

export default activitySlice.reducer;
