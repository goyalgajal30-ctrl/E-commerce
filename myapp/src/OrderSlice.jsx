import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",

  initialState: {
    showPopup: false,
  },

  reducers: {
    placeOrder: (state) => {
      state.showPopup = true;
    },

    closePopup: (state) => {
      state.showPopup = false;
    },
  },
});

export const {
  placeOrder,
  closePopup,
} = orderSlice.actions;

export default orderSlice.reducer;