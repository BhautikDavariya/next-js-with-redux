import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getUsers = createAsyncThunk('users/getUsers', async (_, { dispatch }) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        throw error;
    }
});