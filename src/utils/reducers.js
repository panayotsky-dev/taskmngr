import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
   
  ],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;

export default itemsSlice.reducer;
