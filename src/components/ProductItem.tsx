import React, { FC } from "react";
import {
  alpha,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  styled,
  Typography
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  FavoriteBorderRounded as FavoriteBorderRoundedIcon,
  FavoriteOutlined as FavoriteOutlinedIcon
} from "@mui/icons-material";
import { IProduct } from "../models/IProduct";
import { productCartSlicer } from "../store/reducers/productCartSlicer";
import { productLikedSlicer } from "../store/reducers/productLikedSlicer";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.light,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.light, 0.3)
  }
}));
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.light,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.light, 0.3)
  }
}));

export default function ProductItem({
  id,
  category,
  description,
  rating,
  image,
  price,
  title
}: IProduct) {
  const { products } = useAppSelector((state) => state.productLikedReducer);
  const { addToCart } = productCartSlicer.actions;
  const { ToggleToLiked } = productLikedSlicer.actions;
  const dispatch = useAppDispatch();

  const handelerOnAddLikedClick = () => {
    const product = {
      id,
      category,
      description,
      rating,
      image,
      price,
      title
    };
    dispatch(ToggleToLiked(product));
  };
  const handelerOnAddCartClick = () => {
    const product = {
      id,
      category,
      description,
      rating,
      image,
      price,
      title
    };
    dispatch(addToCart(product));
  };

  return (
    <Grid item xs={12} sm={6} md={6} xl={4}>
      <Card data-id={id} sx={{ minHeight: "500px" }}>
        <CardMedia component="img" height={500} image={image} alt="img" />
        <CardContent>
          <Typography gutterBottom noWrap variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" noWrap color="text.secondary">
            {description}
          </Typography>
          <Typography marginTop="5px" variant="h4" color="text.secondary">
            {price}$
            <Rating
              sx={{ padding: "0 40px" }}
              size="small"
              name="half-rating"
              readOnly
              defaultValue={rating.rate}
              precision={0.5}
            />
          </Typography>

          <StyledButton size="small">Подробнее...</StyledButton>
        </CardContent>
        <CardActions>
          <StyledIconButton
            onClick={() => handelerOnAddLikedClick()}
            aria-label="add to favorite"
          >
            {products.some((likedProducts) => likedProducts.id === id) ? (
              <FavoriteOutlinedIcon />
            ) : (
              <FavoriteBorderRoundedIcon />
            )}
          </StyledIconButton>
          <StyledButton
            sx={{ border: `1px solid #69B12A` }}
            variant="outlined"
            size="large"
            onClick={() => handelerOnAddCartClick()}
          >
            Добавить в корзину
          </StyledButton>
          <StyledButton size="small">Добавить в сравнение</StyledButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

// state.products.some(
//   (product) => product.id === action.payload.id
