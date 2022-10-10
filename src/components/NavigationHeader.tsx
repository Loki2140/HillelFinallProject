import React, { FC, MouseEvent } from "react";
import { MenuItem, Paper, MenuList, Box } from "@mui/material";

export default function NavigationHeader() {
  const handelerOnClick = (e: MouseEvent<HTMLUListElement>) => {
    const { category } = (e.target as HTMLUListElement).dataset;
  
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
