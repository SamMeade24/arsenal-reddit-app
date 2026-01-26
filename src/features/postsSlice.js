import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch posts
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts', 
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data.slice(0, 10); // taking the first 10 posts
    }
);

const postsSlice = createSlice({
    name: 'posts', 
    initialState: {
        items: [], 
        status: 'idle', 
        error: null
    }, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) =>{
                state.status = 'rejected';
                state.error = action.error.message;
            });
    }
});

export default postsSlice.reducer;