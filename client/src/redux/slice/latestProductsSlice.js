import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLatestProducts = createAsyncThunk(
  `/api/products/latest`,
  async () => {
    try {
      const data = await axios.get(`/api/products/latest`);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const latestProductSlice = createSlice({
  name: "latestProducts",
  initialState: {
    product: [{}],
    status: null,
  },
  extraReducers: {
    [getLatestProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getLatestProducts.fulfilled]: (state, { payload }) => {
      state.product = payload;
      state.status = "success";
    },
    [getLatestProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default latestProductSlice.reducer;
