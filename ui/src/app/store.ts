import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../Redux/Reducer/appReducer";
import productReducer from "../Redux/Reducer/productReducer";
import searchedProduct from "../Redux/Reducer/searchedProduct";
// ...

export const store = configureStore({
  reducer: {
    app: appReducer,
    products: productReducer,
    search: searchedProduct,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
