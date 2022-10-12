import { IProduct } from "./../../models/IProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductCollectionCart } from "../../models/IProductCollectionCart";
import { ICartProduct } from "../../models/IProductCollectionCart";

const initialState: IProductCollectionCart = {
  products: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") || "[]")
    : [],
  isLoading: false,
  error: "",
  tottalSum: localStorage.getItem("cartTottalSum")
    ? JSON.parse(localStorage.getItem("cartTottalSum") || "0")
    : 0
};

export const productCartSlicer = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    removeFromCart(state, action: PayloadAction<number>) {
      const findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      if (findProduct) {
        findProduct.inCart--;
      }
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.tottalSum = calcTotalPrice(state.products);
      localStorage.setItem("cartItems", JSON.stringify(state.products));
      localStorage.setItem("cartTottalSum", JSON.stringify(state.tottalSum));
    },
    addToCart(state, action: PayloadAction<IProduct>) {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.inCart++;
      } else {
        state.products.push({
          ...action.payload,
          inCart: 1
        });
      }
      state.tottalSum = calcTotalPrice(state.products);
      localStorage.setItem("cartItems", JSON.stringify(state.products));
      localStorage.setItem("cartTottalSum", JSON.stringify(state.tottalSum));
    },
    clearCart(state, action: PayloadAction) {
      state.products = [];
      state.tottalSum = calcTotalPrice(state.products);
      localStorage.setItem("cartItems", JSON.stringify(state.products));
      localStorage.setItem("cartTottalSum", JSON.stringify(state.tottalSum));
    }
  }
});
export default productCartSlicer.reducer;

const calcTotalPrice = (data: Array<ICartProduct>) => {
  return Number(
    data
      .reduce(
        (sum: number, obj: ICartProduct) => obj.price * obj.inCart + sum,
        0
      )
      .toFixed(2)
  );
};

const increment = (number: number) => {
  return number + 1;
};
const decriment = (number: number) => {
  return number - 1;
};
// state.products. = {
//   ...state.cartItems[existingIndex],
//   cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
// };
