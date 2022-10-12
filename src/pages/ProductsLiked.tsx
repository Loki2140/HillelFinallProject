import React from "react";
import { Container, IconButton, List, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { productLikedSlicer } from "../store/reducers/productLikedSlicer";
import ProductLikedItem from "../components/ProductLikedItem";

export default function ProductsLiked() {
  const { products, isLoading, error } = useAppSelector(
    (state) => state.productLikedReducer
  );
  const { removeFromLiked } = productLikedSlicer.actions;
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Typography variant="h4" component="div">
        Избранное
      </Typography>
      <List>
        {error && <div>Ошибка! В Избранном!!!</div>}
        {isLoading && <div>Loading...</div>}
        {products &&
          products.map((product) => (
            <ProductLikedItem key={`Liked${product.id}`} product={product} />
          ))}
      </List>
    </Container>
  );
}
