import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action: PayloadAction<never>) => {
      state.items.push(action.payload);
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  clear,
} = exampleSlice.actions;

export default exampleSlice.reducer;
