import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import productsReducer from "./slice/productsSlice";
import productDetailReducer from "./slice/productDetailSlice";
import cartReducer from "./slice/cartSlice";
import latestProductsReducer from "./slice/latestProductsSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    product: productDetailReducer,
    cart: cartReducer,
    latestProducts: latestProductsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
