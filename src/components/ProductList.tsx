import { Container, Grid } from "@mui/material";
import React, { FC, ReactElement, ReactNode, useEffect } from "react";
import { useFetchProductsCategoryQuery } from "../api/rtq.api";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IProduct } from "../models/IProduct";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const { menuPage = "electronics" } = useAppSelector(
    (state) => state.productReducer
  );
  const { isLoading, data, isError, error } =
    useFetchProductsCategoryQuery(menuPage);

  return (
    <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
      {isError && <div>Ошибка! В листе!</div>}
      {isLoading && <div>Loading...</div>}
      <Grid container spacing={5}>
        {data?.map((product: IProduct) => (
          <ProductItem
            key={product.id}
            id={product.id}
            description={product.description}
            title={product.title}
            price={product.price}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </Grid>
    </Container>
  );
}
