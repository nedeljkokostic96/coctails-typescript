import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { clickMenuOpen } from "../../redux/appSlice";
import {
  Category,
  getMenuData,
  MainMenuItems,
  fetchCocktailsByCategory,
} from "../../redux/coctailSlice";
import Header from "../header/Header";
import MenuItem from "./MenuItem";
import "./MenuPage.css";

const menuItems = ["category", "glasses", "ingridients", "alcohol"];

const MenuPage: React.FC = () => {
  const menuOpen = useAppSelector((store) => store.app.menuOpen);
  const [menuItemOvered, setMenuItemOvered] = useState("");
  const { mainMenuItems } = useAppSelector((store) => store.cockatils);
  const { feedback } = useAppSelector((store) => store.cockatils);

  const dispatch = useAppDispatch();

  useEffect(() => {
    menuItems.forEach((item) => dispatch(getMenuData(item)));
  }, []);

  console.log(feedback);

  const handleClickSubmenuItem = (item: Category) => {
    dispatch(
      fetchCocktailsByCategory({ type: menuItemOvered, value: item.title })
    );
    dispatch(clickMenuOpen());
    setTimeout(() => {
      document
        .getElementById("div-to-scroll")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  return (
    <div
      className="menu-page"
      style={{
        animation: menuOpen ? ".5s linear 0s slide 1" : "none",
        width: menuOpen ? "100vw" : "0vw",
      }}
    >
      <Container maxWidth="xl">
        <Header menu={true} />
        <Container>
          <Grid container direction="row" columnSpacing={4}>
            <Grid item marginRight={3}>
              {menuItems.sort().map((item, index) => (
                <MenuItem
                  key={index}
                  onMouseOver={() => setMenuItemOvered(item)}
                  menuItemTitle={item.toLocaleUpperCase()}
                />
              ))}
            </Grid>
            <div onMouseLeave={() => setMenuItemOvered("")}>
              <Grid item>
                {menuItemOvered &&
                  mainMenuItems[menuItemOvered as keyof MainMenuItems].map(
                    (item: Category, index: number) => (
                      <h4
                        onClick={() => handleClickSubmenuItem(item)}
                        className="sub-menu-item"
                        key={index}
                      >
                        {item["title"].toLocaleUpperCase()}
                      </h4>
                    )
                  )}
              </Grid>
            </div>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default MenuPage;
