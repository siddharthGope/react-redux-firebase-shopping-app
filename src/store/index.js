import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { productsReducer } from "./allProducts.jsx";
import authReducer from "./auth/authSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer,
  },
});
export default store;
