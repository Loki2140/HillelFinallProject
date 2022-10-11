import React, { FC, MouseEvent } from "react";
import { MenuItem, Paper, MenuList, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { productSlicer } from "../store/reducers/productSlicer";

export default function NavigationHeader() {
  const { changeMenuPage } = productSlicer.actions;
  const dispatch = useAppDispatch();

  const handelerOnClick = (e: MouseEvent<HTMLUListElement>) => {
    const { category = "electronics" } = (e.target as HTMLUListElement).dataset;
    dispatch(changeMenuPage(category));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Paper>
        <MenuList onClick={(e) => handelerOnClick(e)}>
          <MenuItem data-category="electronics">Электроника</MenuItem>
          <MenuItem data-category="jewelery">Укращения</MenuItem>
          <MenuItem data-category="men's clothing">Для Него</MenuItem>
          <MenuItem data-category="women's clothing">Для Нее</MenuItem>
        </MenuList>
      </Paper>
    </Box>
  );
}
