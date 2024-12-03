import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "Products",
  initialState,
    reducers: {
      
        getProducts: (state, action) => {
            state.products = action.payload;
            

        }

  },
});

export const {getProducts} = productSlice.actions;
export default productSlice.reducer;
