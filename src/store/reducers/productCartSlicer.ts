import { IProduct } from "./../../models/IProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductCollection } from "../../models/IProductCollection";

const initialState: IProductCollection = {
  products: [],
  isLoading: false,
  error: "",
  tottalSum: 0
};

export const productCartSlicer = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    removeFromCart(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.tottalSum = sum(state.products);
    },
    addToCart(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
      state.tottalSum = sum(state.products);
    }
  }
});
export default productCartSlicer.reducer;

const sum = (data: Array<IProduct>) => {
  let arr = data.map((el) => el.price);
  return Number(
    arr.reduce((pval: number, cval: number) => pval + cval).toFixed(2)
  );
};
