import { IProduct } from "../../models/IProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductCollection } from "../../models/IProductCollection";

const initialState: IProductCollection = {
  products: [],
  isLoading: false,
  error: "",
  menuPage: "electronics",
  searchState: ""
};

export const productSlicer = createSlice({
  name: "product",
  initialState,
  reducers: {
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    changeMenuPage(state, action: PayloadAction<string>) {
      state.menuPage = action.payload;
    },
    changeSearchState(state, action: PayloadAction<string>) {
      state.searchState = action.payload;
    }
  }
});
export default productSlicer.reducer;
