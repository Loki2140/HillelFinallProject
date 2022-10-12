import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";
import { themeComfy } from "./themes/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProductList from "./components/ProductList";
import ProductsCart from "./pages/ProductsCart";
import ProductsLiked from "./pages/ProductsLiked";
import AboutProduct from "./pages/AboutProduct";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeComfy}>
        <Header></Header>
        <ProductList></ProductList>
        <ProductsCart></ProductsCart>
        <ProductsLiked></ProductsLiked>
        <AboutProduct></AboutProduct>
      </ThemeProvider>
    </Provider>
  );
}
