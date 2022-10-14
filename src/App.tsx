import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { themeComfy } from "./themes/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import ProductsCart from "./pages/ProductsCart";
import ProductsLiked from "./pages/ProductsLiked";
import AboutProduct from "./pages/AboutProduct";
import ProductsComparison from "./pages/ProductsComparison";
import PageNotFound404 from "./pages/PageNotFound404";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<ProductList />}></Route>
        <Route path="/productsCart" element={<ProductsCart />}></Route>
        <Route path="/productsLiked" element={<ProductsLiked />}></Route>
        <Route path="/aboutProduct/:id" element={<AboutProduct />}></Route>
        <Route
          path="/productsComparison"
          element={<ProductsComparison />}
        ></Route>
        <Route path="*" element={<PageNotFound404 />}></Route>
      </Route>
    </Routes>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeComfy}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
