import { IProduct } from "../models/IProduct";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { apiMok } from "../configs/configs.js";
import { fakeStoreApi } from "../configs/configs.js";

export interface ICartProduct {
  productId: number;
  quantity: number;
}

export interface ICart {
  userId: number;
  date: number;
  products: ICartProduct[];
}

export const mocApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: fakeStoreApi }),
  endpoints: (build) => ({
    fetchProducts: build.query<Array<IProduct> | null, string>({
      query: () => ({
        url: `products`
      })
    }),
    fetchProductsCategory: build.query<Array<IProduct>, string>({
      query: (category) => ({
        url: `products/category/${category}`
      })
    }),
    fetchProductsCart: build.query<Array<ICart>, string | number>({
      query: (id) => ({
        url: `carts/${id}`
      })
    }),
    addProductsCart: build.mutation<ICart, ICart>({
      query: (cart) => ({
        url: `carts`,
        method: "POST",
        body: cart
      })
    })
  })
});

export const { useFetchProductsQuery, useFetchProductsCategoryQuery } = mocApi;
