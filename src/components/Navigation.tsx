import React from "react";
import {
  Container,
  MenuItem,
  Paper,
  MenuList,
  Box
} from "@mui/material";

export default function NavigationHeader() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex" }}>
        <Paper>
          <MenuList>
            <MenuItem data-id="1">Компьютеры</MenuItem>
            <MenuItem data-id="2">Телефоны</MenuItem>
            <MenuItem data-id="3">Микроволновки</MenuItem>
          </MenuList>
        </Paper>
      </Box>
    </Container>
  );
}
