import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetail = createAsyncThunk(`/api`, async (id) => {
  try {
    const data = await axios.get(`/api/products/${id}`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

const productDetailSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: {},
    status: null,
  },

  extraReducers: {
    [getProductDetail.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProductDetail.fulfilled]: (state, { payload }) => {
      state.product = payload;
      state.status = "success";
    },
    [getProductDetail.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default productDetailSlice.reducer;
