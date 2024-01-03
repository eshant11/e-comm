import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cart } from "../Store/Cart";
import axios from "axios";
import { UsercartDetails } from "../../components/interface";
import { fetchCartDataFromApi } from "../../service/fetchCartData";

// Define the initial state with a 'cartItems' property
const initialState: Cart = {
  cartItems: [],
  itemCount: 1,
  cartDetails: {
    email: undefined,
    product: [],
  },
  status: "idle" as "idle" | "loading" | "succeeded" | "failed", // Explicitly define status types
  error: null,
};

// Define the async thunk to fetch cart data
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (email: string | undefined, { rejectWithValue }) => {
    try {
      const data = await fetchCartDataFromApi(email);
      console.log(data, ":data");

      return { email, data };
      // Return an object with email and product properties
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

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
        (item, index) => item._id !== action.payload
      );
    },
    itemCountHandle: (state, action) => {
      state.itemCount = action.payload;
      console.log("item count is: ", state.itemCount);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCartData.fulfilled,
        (
          state,
          action: PayloadAction<{
            email: string | undefined;
            data: any;
          }>
        ) => {
          console.log("Fulfilled payload:", action.payload);
          state.status = "succeeded";
          const { email, data } = action.payload;
          console.log(data, ":dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

          // Assuming UsercartDetails[] is the correct type for your items
          const cartItems = data.map((item: any) => ({
            productId: item.productId,
            quantity: item.productQuantity,
            // Assuming 'quantity' is the correct property in UsercartDetails
          }));

          // If you want to update the entire cartDetails object
          state.cartDetails = {
            email: email, // Preserve the existing email if provided, otherwise use the existing one
            product: cartItems,
          };
          console.log(state.cartDetails.product, "state cart details");
        }
      )
      .addCase(fetchCartData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeItem, itemCountHandle } = cartSlice.actions;
export default cartSlice.reducer;
