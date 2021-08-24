import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    console.log("smkjls");

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data);
    return data;
  } catch (error) {
    //   return rejectWithValue(error);
    console.log(error);
    throw new Error("Ошибка при запросе");
  }
});

// Then, handle actions in your reducers:
const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [], loading: false, error: "" },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },
  },
});

export default postsSlice.reducer;
