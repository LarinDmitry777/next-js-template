import { configureStore, combineReducers } from '@reduxjs/toolkit';
import exampleSlice from './slices/exampleSlice';
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
  example: exampleSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: combineReducers({
    example: exampleSlice,
  }),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
