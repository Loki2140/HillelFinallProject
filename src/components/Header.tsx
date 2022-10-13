import React, {
  useState,
  MouseEvent,
  ChangeEventHandler,
  useEffect
} from "react";
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
  Badge
} from "@mui/material";
import {
  ShoppingBasket,
  SyncAltRounded,
  FavoriteBorderRounded,
  Search
} from "@mui/icons-material";
import Navigation from "./NavigationHeader";
import { useDebounce } from "../hooks/debounce";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { productSlicer } from "../store/reducers/productSlicer";
import { Link } from "react-router-dom";

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
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
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
  backgroundColor: theme.palette.primary.main,
  display: "flex"
  // width: "100vw"
}));

export default function Header() {
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuHandlerOpen = Boolean(anchorEl);
  const debounced = useDebounce(search);
  const { products: compProducts } = useAppSelector(
    (state) => state.comparisonReducer
  );
  const { products: cartProducts } = useAppSelector(
    (state) => state.productCartReducer
  );
  const { products: likedProducts } = useAppSelector(
    (state) => state.productLikedReducer
  );
  const { changeSearchState } = productSlicer.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeSearchState(debounced));
  }, [debounced, changeSearchState, dispatch]);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const menuHandlerClose = () => {
    setAnchorEl(null);
  };
  const hendlerOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
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
              sx={{ color: "white" }}
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
          <SearchInput sx={{ flexGrow: 1 }} onChange={hendlerOnChange}>
            <SearchIconWrapper sx={{ color: "white" }}>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ width: "100%" }}
            />
          </SearchInput>
          <Link to="/productsComparison">
            <IconButton sx={{ color: "white" }}>
              <Badge badgeContent={compProducts.length} color="error">
                <SyncAltRounded />
              </Badge>
            </IconButton>
          </Link>
          <StyledDivider orientation="vertical" variant="middle" flexItem />
          <Link to="/productsLiked">
            <IconButton sx={{ color: "white" }}>
              <Badge badgeContent={likedProducts.length} color="error">
                <FavoriteBorderRounded />
              </Badge>
            </IconButton>
          </Link>
          <StyledDivider orientation="vertical" variant="middle" flexItem />
          <Link to="/productsCart">
            <IconButton sx={{ color: "white" }}>
              <Badge badgeContent={cartProducts.length} color="error">
                <ShoppingBasket />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
