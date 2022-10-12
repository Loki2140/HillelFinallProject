import { IProduct } from "../../models/IProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductCollection } from "../../models/IProductCollection";

const initialState: IProductCollection = {
  products: localStorage.getItem("likedItems")
    ? JSON.parse(localStorage.getItem("likedItems") || "[]")
    : [],
  isLoading: false,
  error: ""
};

export const productLikedSlicer = createSlice({
  name: "liked",
  initialState,
  reducers: {
    removeFromLiked(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("likedItems", JSON.stringify(state.products));
    },
    ToggleToLiked(state, action: PayloadAction<IProduct>) {
      const findProduct = state.products.some(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      } else {
        state.products.push(action.payload);
      }
      localStorage.setItem("likedItems", JSON.stringify(state.products));
    }
  }
});
export default productLikedSlicer.reducer;
