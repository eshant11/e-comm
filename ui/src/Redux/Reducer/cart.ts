import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../Store/Cart";

// Define the initial state with a 'cartItems' property
const initialState: Cart = {
  cartItems: [],
  itemCount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      console.log(state.cartItems, "added to the cart");
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item, index) => index !== action.payload
      );
    },
    itemCountHandle: (state, action) => {
      state.itemCount = action.payload;
      console.log("item count is: ", state.itemCount);
    },
  },
});

export const { addToCart, removeItem, itemCountHandle } = cartSlice.actions;
export default cartSlice.reducer;
