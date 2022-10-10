import React, { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import { FavoriteBorderRounded } from "@mui/icons-material";
import { IProduct } from "../models/IProduct";

export default function ProductItem({
  id,
  category,
  description,
  rating,
  image,
  price,
  title
}: IProduct) {
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
          </Typography>
          <Button size="small">Подробнее...</Button>
        </CardContent>
        <CardActions>
          <IconButton color="primary" aria-label="add to favorite">
            <FavoriteBorderRounded />
          </IconButton>
          <Button color="primary" variant="outlined" size="large">
            Добавить в корзину
          </Button>
          <Button size="small">Добавить в сравнение</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
