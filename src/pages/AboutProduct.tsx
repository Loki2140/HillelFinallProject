import React from "react";

import {
  Unstable_Grid2 as Grid,
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  styled,
  alpha,
  InputBase,
  Divider,
  Button,
  Menu,
  Badge,
  Paper
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function AboutProduct() {
  return (
    <Container>
      <Paper>
        <Grid container>
          <Item></Item>
        </Grid>
      </Paper>{" "}
    </Container>
  );
}
