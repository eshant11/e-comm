import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "../Redux/Reducer/appReducer";
import productReducer from "../Redux/Reducer/productReducer";
import searchedProduct from "../Redux/Reducer/searchedProduct";
import cart from "../Redux/Reducer/cart";
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
  cart: cart,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// By adding serializableCheck, you're telling the middleware to ignore actions of type persist/PERSIST and persist/REHYDRATE, which are dispatched by redux-persist and contain non-serializable values. This should get rid of the warning.

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
