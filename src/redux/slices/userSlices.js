import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from '../actions/userActionType'
const initialState = []

export const userSlices = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            return action.payload;
        });
    }

})

export default userSlices.reducer