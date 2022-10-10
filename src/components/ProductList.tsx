import { Container, Grid } from "@mui/material";
import React, { FC, ReactElement, ReactNode } from "react";
import {
  useFetchProductsQuery,
  useFetchProductsCategoryQuery
} from "../Api/rtq.api";
import { IProduct } from "../models/IProduct";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const { isLoading, data, isError } =
    useFetchProductsCategoryQuery("electronics");
  // const { isLoading, data, isError } = useFetchProductsQuery("");
  if (isLoading) return <div>Loading...</div>;
  return (
    <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
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
