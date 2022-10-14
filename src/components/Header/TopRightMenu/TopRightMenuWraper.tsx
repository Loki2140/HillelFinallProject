import { Badge, Box, IconButton, Menu } from "@mui/material";
import React, { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { StyledDivider } from "../Styled";
import {
  ShoppingBasket,
  SyncAltRounded,
  FavoriteBorderRounded,
  MoreVert
} from "@mui/icons-material";
import { useAppSelector } from "../../../hooks/redux";
import TopRightMobileMenu from "./TopRightMobileMenu";

export default function TopRightMenuWraper() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const { products: compProducts } = useAppSelector(
    (state) => state.comparisonReducer
  );
  const { products: cartProducts } = useAppSelector(
    (state) => state.productCartReducer
  );
  const { products: likedProducts } = useAppSelector(
    (state) => state.productLikedReducer
  );
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const mobileMenuId = "rightMenuMobile";
  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Link to="/productsComparison">
          <IconButton sx={{ color: "white" }}>
            <Badge badgeContent={compProducts.length} color="error">
              <SyncAltRounded />
            </Badge>
          </IconButton>
        </Link>
        <StyledDivider orientation="vertical" variant="middle" flexItem />
        <Link to="/productsLiked">
          <IconButton sx={{ color: "white" }}>
            <Badge badgeContent={likedProducts.length} color="error">
              <FavoriteBorderRounded />
            </Badge>
          </IconButton>
        </Link>
        <StyledDivider orientation="vertical" variant="middle" flexItem />
        <Link to="/productsCart">
          <IconButton sx={{ color: "white" }}>
            <Badge badgeContent={cartProducts.length} color="error">
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Link>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreVert />
        </IconButton>
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <TopRightMobileMenu />
        </Menu>
      </Box>
    </>
  );
}
