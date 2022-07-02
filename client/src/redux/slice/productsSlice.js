import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("/api/products", async () => {
  const data = await axios.get("/api/products");
  return data.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: null,
  },

  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.status = "success";
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default productsSlice.reducer;
