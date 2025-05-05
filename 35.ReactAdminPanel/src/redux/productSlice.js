import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    editProduct: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteApiProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
  },
});

export const { setProducts, editProduct, deleteApiProduct } = productSlice.actions;
export default productSlice.reducer;
export const { editProduct: editApiProduct, deleteProduct } = productSlice.actions;

