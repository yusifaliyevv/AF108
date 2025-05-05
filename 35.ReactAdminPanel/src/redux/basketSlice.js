import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basketItems: [],
  total: 0
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const item = state.basketItems.find(p => p.id === action.payload.id);
      if (item) {
        item.count += action.payload.count || 1;
      } else {
        state.basketItems.push({ ...action.payload, count: action.payload.count || 1 });
      }
      basketSlice.caseReducers.calculateTotal(state);
    },
    increment: (state, action) => {
      const item = state.basketItems.find(p => p.id === action.payload);
      if (item) item.count++;
      basketSlice.caseReducers.calculateTotal(state);
    },
    decrement: (state, action) => {
      const item = state.basketItems.find(p => p.id === action.payload);
      if (item && item.count > 1) item.count--;
      basketSlice.caseReducers.calculateTotal(state);
    },
    removeFromBasket: (state, action) => {
      state.basketItems = state.basketItems.filter(p => p.id !== action.payload);
      basketSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      state.total = state.basketItems.reduce((acc, item) => acc + item.price * item.count, 0);
    }
  }
});

export const { addToBasket, increment, decrement, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
