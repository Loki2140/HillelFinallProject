import React, { useState, MouseEvent } from "react";
import {
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
  MenuItem
} from "@mui/material";
import {
  ShoppingBasket,
  SyncAltRounded,
  FavoriteBorderRounded,
  Search
} from "@mui/icons-material";
import Navigation from "./NavigationHeader";

const SearchInput = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.3)
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: "white",
  paddingLeft: "10px",
  marginRight: "10px"
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.primary
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuHandlerOpen = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const menuHandlerClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%"
            }}
          >
            <Button
              color="inherit"
              id="positioned-button"
              aria-controls={menuHandlerOpen ? "positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuHandlerOpen ? "true" : undefined}
              onClick={handleClick}
            >
              Каталог товаров
            </Button>
            <Menu
              id="pos"
              aria-labelledby="pos_button"
              anchorEl={anchorEl}
              open={menuHandlerOpen}
              onClose={menuHandlerClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
            >
              <Navigation />
            </Menu>
          </Typography>
          <SearchInput sx={{ flexGrow: 1 }}>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ width: "100%" }}
            />
          </SearchInput>
          <IconButton color="inherit">
            <SyncAltRounded></SyncAltRounded>
          </IconButton>
          <StyledDivider orientation="vertical" variant="middle" flexItem />
          <IconButton color="inherit">
            <FavoriteBorderRounded></FavoriteBorderRounded>
          </IconButton>
          <StyledDivider orientation="vertical" variant="middle" flexItem />
          <IconButton color="inherit">
            <ShoppingBasket>Корзина</ShoppingBasket>
          </IconButton>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
