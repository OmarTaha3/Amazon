import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import products from "./productSlice.js";
import auth from './authSlice.js'

const productsPersistConfig = {
  key: "products",
  version: 1,
  storage,
};

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
};


const persistedProduct = persistReducer(productsPersistConfig, products);
const persistedAuth = persistReducer(authPersistConfig, auth);


const store = configureStore({
  reducer: { products: persistedProduct, auth: persistedAuth },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export default store;
