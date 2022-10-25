import { Container } from "@mui/material";
import { useAppSelector } from "../../hooks/hook";
import Header from "../header/Header";
import "./MenuPage.css";

const MenuPage: React.FC = () => {
  const menuOpen = useAppSelector((store) => store.app.menuOpen);
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
      </Container>
    </div>
  );
};

export default MenuPage;
