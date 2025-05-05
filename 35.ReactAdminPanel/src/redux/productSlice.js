import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    editApiProduct: (state, action) => {
      const { id, title, price, image } = action.payload;
      const index = state.products.findIndex(p => p.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], title, price, image };
      }
    },
    deleteApiProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    }
  }
});

export const { setProducts, editApiProduct, deleteApiProduct } = productSlice.actions;
export default productSlice.reducer;
