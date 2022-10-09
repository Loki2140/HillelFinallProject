import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlicer } from "./store/reducers/UserSlicer";
import Homepage from "./pages/Homepage";
import Container from "@mui/system/Container";
import Header from "./components/Header";
import NavigationHeader from "./components/NavigationHeader";
import { ThemeProvider } from "@mui/material/styles";
import { themeComfy } from "./components/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProductList from "./components/ProductList";
import { Padding } from "@mui/icons-material";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeComfy}>
        <Header></Header>
        <Container sx={{ Padding: "20px" }} maxWidth="xl">
          <NavigationHeader></NavigationHeader>
        </Container>
        <ProductList></ProductList>
      </ThemeProvider>
    </Provider>
  );
}
