import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SliceStateInterface {
  items: Array<{ name: string }>
}

const initialState: SliceStateInterface = {
  items: [],
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ name: string }>) => {
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
