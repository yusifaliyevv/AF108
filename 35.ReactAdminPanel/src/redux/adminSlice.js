import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    editProduct: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    }
  }
});

export const { setProducts, addProduct, deleteProduct, editProduct } = adminSlice.actions;
export default adminSlice.reducer;
