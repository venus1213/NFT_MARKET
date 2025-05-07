// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import nftReducer from './features/nft/nftSlice';
import bridgeReducer from './features/bridge/bridgeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    nft: nftReducer,
    bridge: bridgeReducer
  },
  // Optional: Add middleware here if needed
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
