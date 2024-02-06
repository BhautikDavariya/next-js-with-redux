import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUsers } from "./userActionType";

export const getPosts = createAsyncThunk('posts/getPost', async (_, { dispatch }) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(getUsers());
        return data;
    } catch (error) {
        throw error;
    }
});