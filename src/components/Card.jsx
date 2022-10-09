import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Typography
} from "@mui/material";
import React from "react";

// interface SignIn {
//   width: string;
//   height?: string;
//   submit: () => void;
// }

export const ProductCard = (props) => {
  const { poster, imgName, imgTitle, productName, productPrice } = props;


  
  return (
    <Grid item xs="12" md="4">
      <Card>
        <CardMedia
          component="img"
          image={poster}
          alt={imgName}
          title={imgTitle}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {productName}
          </Typography>
          <Typography variant="body1">{productPrice}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={}>Купить </Button>
          <Button onClick={}>Добавить в Сравнение</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
