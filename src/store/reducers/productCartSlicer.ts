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

export const productCartSlicer = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    removeFromCart(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    }
  }
});
export default productCartSlicer.reducer;