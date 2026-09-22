import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./ProductSlice";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;