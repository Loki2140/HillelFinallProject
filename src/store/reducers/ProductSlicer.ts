import { IProduct } from "./../../models/IProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductCollection } from "../../models/IProductCollection";

const initialState: IProductCollection = {
  products: [],
  isLoading: false,
  error: ""
};

export const ProductSlicer = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    removeFromCart(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    addToCart(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    }
  }
});
export default ProductSlicer.reducer;
