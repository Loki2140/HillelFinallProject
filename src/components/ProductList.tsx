import { Container, Grid } from "@mui/material";
import React, { FC } from "react";
import { useFetchProductsQuery, useFetchProductQuery } from "../Api/mocapi.api";
import { IProduct } from "../models/IProduct";
import ProductItem from "./ProductItem";

interface IProductListMap {
  data: [];
}

export default function ProductList() {
  const { isLoading, data, isError } = useFetchProductsQuery(1);
  if (isLoading) return <div>Loading...</div>;
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        {data?.map((product: IProduct) => (
          <ProductItem
            key={product.id}
            id={product.id}
            prodDesc={product.prodDesc}
            prodName={product.prodName}
            prodPrice={product.prodPrice}
            prodColor={product.prodColor}
            prodImg={product.prodImg}
          />
        ))}
      </Grid>
    </Container>
  );
}
