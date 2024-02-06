import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../actions/postActionType';
const initialState = []

export const PostSlices = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
             // Update the state by returning the new state
             return action.payload;
        });
    }
})


export default PostSlices.reducer