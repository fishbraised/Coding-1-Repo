import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "LOADING",
};

const productSlice = createSlice({
  name: "products",
  initialState: { data: [], status: apiStatusConstants.initial },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = apiStatusConstants.inProgress;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = apiStatusConstants.success;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = apiStatusConstants.failure;
    });
  },
});

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  const data = res.data;

  return data;
});

export default productSlice.reducer;
