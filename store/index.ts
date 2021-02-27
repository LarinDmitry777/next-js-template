import { configureStore, combineReducers } from '@reduxjs/toolkit';
import exampleSlice from './slices/exampleSlice';

export default function makeStore() {
  return configureStore({
    reducer: combineReducers({
      example: exampleSlice,
    }),
    devTools: true,
  });
}
