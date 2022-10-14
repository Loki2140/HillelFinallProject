import React from "react";
import { Link } from "react-router-dom";
import { Badge, IconButton, MenuItem } from "@mui/material";
import {
  ShoppingBasket,
  SyncAltRounded,
  FavoriteBorderRounded
} from "@mui/icons-material";
import { useAppSelector } from "../../../hooks/redux";

export default function LeftMobileMenu() {
  const { products: compProducts } = useAppSelector(
    (state) => state.comparisonReducer
  );
  const { products: cartProducts } = useAppSelector(
    (state) => state.productCartReducer
  );
  const { products: likedProducts } = useAppSelector(
    (state) => state.productLikedReducer
  );
  return (
    <>
      <MenuItem >
        <Link to="/productsComparison">
          <IconButton size="large" color="inherit">
            <Badge badgeContent={compProducts.length} color="error">
              <SyncAltRounded />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/productsLiked">
          <IconButton size="large" color="inherit">
            <Badge badgeContent={likedProducts.length} color="error">
              <FavoriteBorderRounded />
            </Badge>
          </IconButton>
          <p>Избранное</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/productsCart">
          <IconButton size="large" color="inherit">
            <Badge badgeContent={cartProducts.length} color="error">
              <ShoppingBasket />
            </Badge>
          </IconButton>
          <p>Корзина</p>
        </Link>
      </MenuItem>
    </>
  );
}
