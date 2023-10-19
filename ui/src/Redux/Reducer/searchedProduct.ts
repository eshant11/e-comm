// searchSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductInfo } from "../../components/interface";

// Define an interface for your search state
interface SearchState {
  searchResults: ProductInfo[];
  loading: boolean;
  error: string | undefined;
}
// Define an initial state
const initialState: SearchState = {
  searchResults: [],
  loading: false,
  error: undefined,
};

// Create an async thunk action to fetch products by search
export const fetchProductsBySearch = createAsyncThunk(
  "search/fetchProductsBySearch",
  async (query: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/search?q=${query}`
      );
      return response.data; // Assuming the response contains an array of products
    } catch (error) {
      throw error;
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = [];
      state.loading = false;
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsBySearch.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchProductsBySearch.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchProductsBySearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
