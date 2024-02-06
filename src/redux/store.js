// store.js
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import userSlices from './slices/userSlices'
import postSlice from './slices/postSlices'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
// Correct import statements for redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducer';

// without persist
// export const store = configureStore({
//   reducer: {
//     users: userSlices,
//     posts: postSlice, // Use the correct import
//   },
// });

// with persist
const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persister = persistStore(store);










