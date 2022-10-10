import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  ListItemText,
  Grid
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Folder as FolderIcon
} from "@mui/icons-material";
import React from "react";

function ProductsCart(params: any) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const []= useFetchProductsCartMutation()
  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Avatar with text and icon
        </Typography>
        <div>
          <List dense={dense}>
            {data?.map((
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={DataTransfer.title}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            )}
          </List>
        </div>
      </Grid>
    </>
  );
}
