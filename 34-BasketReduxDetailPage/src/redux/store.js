import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './basketSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'basket',
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketReducer);

export const store = configureStore({
  reducer: {
    basket: persistedReducer,
  }
});

export const persistor = persistStore(store);
