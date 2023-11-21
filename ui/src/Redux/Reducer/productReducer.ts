// productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductInfo } from "../../components/interface";

// Define an interface for your product state
interface ProductState {
  productList: ProductInfo[];
  loading: boolean;
  error: string | undefined;
}

// Define an initial state
const initialState: ProductState = {
  productList: [],
  loading: false,
  error: undefined,
};

// Create an async thunk action to fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/${category}`
      );
      console.log(category);

      return response.data; // Assuming the response contains an array of products
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
