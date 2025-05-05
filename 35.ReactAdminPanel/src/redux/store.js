// redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from './productSlice';
import basketReducer from './basketSlice';
import adminReducer from './adminSlice';

const rootReducer = combineReducers({
  product: productReducer,
  basket: basketReducer,
  admin: adminReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
