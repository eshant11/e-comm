import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "../Redux/Reducer/appReducer";
import productReducer from "../Redux/Reducer/productReducer";
import searchedProduct from "../Redux/Reducer/searchedProduct";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

// Combine reducer bcz reuc createStore expects only one reducer
const rootReducer = combineReducers({
  app: appReducer,
  products: productReducer,
  search: searchedProduct,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
