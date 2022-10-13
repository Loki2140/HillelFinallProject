import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { themeComfy } from "./themes/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductsCart from "./pages/ProductsCart";
import ProductsLiked from "./pages/ProductsLiked";
import AboutProduct from "./pages/AboutProduct";
import ProductsComparison from "./pages/ProductsComparison";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<ProductList />}></Route>
      <Route path="/productsCart" element={<ProductsCart />}></Route>
      <Route path="/productsLiked" element={<ProductsLiked />}></Route>
      <Route path="/productsCart" element={<ProductsCart />}></Route>
      <Route path="/aboutProduct:id" element={<AboutProduct />}></Route>
      <Route
        path="/ProductsComparison"
        element={<ProductsComparison />}
      ></Route>
    </Routes>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeComfy}>
        <Header></Header>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
