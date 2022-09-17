import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

export const putContent = createAsyncThunk('todos/putContent', async ({ id, content }) => {
  const response = await axios.put(`${import.meta.env.VITE_MOCK_API}/todos/${id}`, { content });
  return response.data;
});

export const putCompleted = createAsyncThunk('todos/putCompleted', async ({ id, isCompleted }) => {
  const response = await axios.put(`${import.meta.env.VITE_MOCK_API}/todos/${id}`, { isCompleted });
  return response.data;
});

export const activitySlice = createSlice({
  name: 'todos',
  initialState: {
    activities: [],
    isLoading: false,
    isPosting: false,
    error: null,
    warning: false,
  },

  reducers: {
    triggerWarning: (state, action) => {
      state.warning = action.payload;
    },

    clearCache: (state) => {
      state.activities = [];
    },
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
      state.activities.push(...action.payload.map((prevPayload) => (
        {
          ...prevPayload,
          onEdit: false,
          onComplete: false,
          onRemove: false,
          onContent: false,
        }
      )));
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

    // PUT CONTENT
    [putContent.pending]: (state, action) => {
      state.isUpdating = true;
      const index = state.activities.findIndex((activity) => activity.id === action.meta.arg.id);
      state.activities[index].onEdit = true;
    },

    [putContent.rejected]: (state, action) => {
      state.isUpdating = false;
      state.error = action.message;
    },

    [putContent.fulfilled]: (state, action) => {
      const index = state.activities.findIndex((item) => item.id === action.payload.id);
      state.activities[index].onEdit = false;
      if (state.activities.some((item) => item.content === action.payload.content)) {
        state.warning = true;
      } else {
        state.activities[index].content = action.payload.content;
        state.warning = false;
      }
      state.isUpdating = false;
    },

    // PUT COMPLETED
    [putCompleted.pending]: (state, action) => {
      state.isCompleted = true;
      const index = state.activities.findIndex((activity) => activity.id === action.meta.arg.id);
      state.activities[index].onComplete = true;
    },

    [putCompleted.rejected]: (state, action) => {
      state.error = action.message;
    },

    [putCompleted.fulfilled]: (state, action) => {
      state.isCompleted = false;
      const index = state.activities.findIndex((item) => item.id === action.payload.id);
      state.activities[index].isCompleted = !state.activities[index].isCompleted;
      state.activities[index].onComplete = false;
    },
  },

});

export default activitySlice.reducer;
export const { triggerWarning, clearCache } = activitySlice.actions;
