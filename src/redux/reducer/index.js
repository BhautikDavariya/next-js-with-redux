import { combineSlices, configureStore } from '@reduxjs/toolkit'
import userSlices from '../slices/userSlices';
import postSlices from '../slices/postSlices';


export const rootReducer = combineSlices({
    users: userSlices,
    posts: postSlices, // Use the correct import
  });
  

