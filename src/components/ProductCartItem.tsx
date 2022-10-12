import React from "react";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { productCartSlicer } from "../store/reducers/productCartSlicer";
import { ICartProduct } from "../models/IProductCollectionCart";

interface CatrItem {
  product: ICartProduct;
}

export default function ProductCartItem({ product }: CatrItem) {
  const { removeFromCart } = productCartSlicer.actions;
  const dispatch = useAppDispatch();
  const handelerOnClick = (id: number) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            onClick={() => handelerOnClick(product.id)}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar alt="product img" src={product.image}></Avatar>
        </ListItemAvatar>
        <ListItemText primary={product.title} />
      </ListItem>
      <Divider variant="inset" />
    </>
  );
}
