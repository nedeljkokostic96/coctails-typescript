import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { clickMenuOpen } from "../../redux/appSlice";
import { Props } from "../model/IHeader";
import SearchComponent from "./search/SearchComponent";
import LocalBarIcon from "@mui/icons-material/LocalBar";

const Header: React.FC<Props> = ({ menu }: Props) => {
  const mobileWindow = useAppSelector((store) => store.app.mobileOpen);
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        margin: "0rem 2rem",
      }}
    >
      <AppBar
        position="static"
        color="transparent"
        sx={{
          boxShadow: "none",
          color: menu ? "black" : "#ee0df7",
          maxWidth: mobileWindow ? "100%" : "60vw",
          borderBottom: menu ? "2px solid black" : "2px solid #ee0df7",
        }}
      >
        <Toolbar style={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            className="header-text"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            <LocalBarIcon />C
          </Typography>

          <SearchComponent />
          {!menu ? (
            <>
              <MenuIcon
                className="menu-icon"
                fontSize="large"
                onClick={() => dispatch(clickMenuOpen())}
              />
            </>
          ) : (
            <CloseIcon
              className="menu-icon"
              fontSize="large"
              onClick={() => dispatch(clickMenuOpen())}
            />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
