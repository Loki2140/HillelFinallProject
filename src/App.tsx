import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Homepage from "./pages/Homepage";
import Container from "@mui/system/Container";
import Header from "./components/Header";
import NavigationHeader from "./components/NavigationHeader";
import { ThemeProvider } from "@mui/material/styles";
import { themeComfy } from "./themes/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProductList from "./components/ProductList";
import { Padding } from "@mui/icons-material";
import ProductsCart from "./pages/ProductsCart";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeComfy}>
        <Header></Header>
        <ProductList></ProductList>
        <ProductsCart></ProductsCart>
        {/* <ProductsItem></ProductsItem> */}
      </ThemeProvider>
    </Provider>
  );
}
