import { IProduct } from "./../models/IProduct";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiMok } from "../configs/configs.js";

export const mocApi = createApi({
  reducerPath: "mocapi/api",
  baseQuery: fetchBaseQuery({ baseUrl: apiMok }),
  endpoints: (build) => ({
    fetchProducts: build.query<Array<IProduct> | null, number>({
      query: (url) => ({
        url: `productList${url}`
      })
    }),
    fetchProduct: build.query<IProduct | null, { number: number; id: number }>({
      query: ({ number, id }) => ({
        url: `productList${number}/${id}`
      })
    })
  })
});

export const { useFetchProductsQuery, useFetchProductQuery } = mocApi;

// interface api {
//   url: string;
//   method?: string;
//   body?: object | null;
//   id?: number;
// }

// //MEIN FETCH
// function sendRequest({ url, method = "GET", body = null }: api) {
//   return fetch(url, {
//     method: method,
//     body: body != null ? JSON.stringify(body) : null,
//     headers: { "Content-Type": "application/json" }
//   });
// }

// // GET OBJ LIST
// export function getObjList(url: string) {
//   return sendRequest(url).then((res) => res.json());
// }

// // GET OBJ
// export function getObj({ url, id }: api) {
//   return sendRequest(url + id).then((res) => res.json());
// }

// //PUT OBJ
// export function updateObj({ url, body }: api) {
//   return sendRequest(url + body.id, "PUT", body).then((res) => res.json());
// }

// //DELETE OBJ
// export function removeObj({ url, id }: api) {
//   return sendRequest(url + id, "DELETE");
// }
// //POST OBJ
// export function createObj({ url, body }: api) {
//   return sendRequest(url, "POST", body).then((res) => res.json());
// }
