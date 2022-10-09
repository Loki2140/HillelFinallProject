import React, { FC } from "react";
import {
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
  prodDesc,
  prodName,
  prodPrice,
  prodImg
}: IProduct) {
  return (
    <Grid item xs={12} sm={6} md={6} xl={4}>
      <Card data-id={id}>
        <CardMedia component="img" height="200" image={prodImg} alt="img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prodName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prodDesc}
          </Typography>
          <Typography marginTop="5px" variant="h4" color="text.secondary">
            {prodPrice} ${" "}
          </Typography>
          <Button size="small">Подробнее...</Button>
        </CardContent>
        <CardActions>
          <IconButton color="primary" aria-label="add to favorite">
            <FavoriteBorderRounded />
          </IconButton>
          <Button variant="outlined" size="large">
            Добавить в корзину
          </Button>
          <Button size="small">Добавить в сравнение</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
