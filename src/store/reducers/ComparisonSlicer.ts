import { IProduct } from "../../models/IProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface productState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: productState = {
  products: [],
  isLoading: false,
  error: ""
};

export const comparisonSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeFromComparison(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    addToComparison(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    }
  }
});
export default comparisonSlicer.reducer;
