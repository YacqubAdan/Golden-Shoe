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
    productSearch: localStorage.getItem("productSearch")
      ? JSON.parse(localStorage.getItem("productSearch"))
      : "",
    status: null,
  },
  reducers: {
    searchProduct(state, action) {
      state.productSearch = action.payload;
      localStorage.setItem(
        "productSearch",
        JSON.stringify(state.productSearch)
      );
    },
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

export const { searchProduct } = productDetailSlice.actions;
export default productDetailSlice.reducer;
