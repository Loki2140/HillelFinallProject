import { IProduct } from "../../models/IProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface productState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: productState = {
  products: [],
  isLoading: false,
  error: "",
  count: 0
};

export const productSlicer = createSlice({
  name: "product",
  initialState,
  reducers: {}
});
export default productSlicer.reducer;
