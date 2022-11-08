import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CocktailCardData } from "../../model/ICocktailCardData";
import "./CocktailCard.css";
import { useNavigate } from "react-router-dom";
import { createSlug } from "../../../utils/util";
import { useAppDispatch } from "../../../hooks/hook";
import { getCocktailByID } from "../../../redux/coctailSlice";

const CocktailCard: React.FC<CocktailCardData> = ({
  strDrink,
  idDrink,
  strDrinkThumb,
}: CocktailCardData) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getCardHeight = () => {
    if (window.innerWidth < 500) {
      return 218;
    }

    if (window.innerWidth < 530) {
      return 230;
    }

    if (window.innerWidth < 560) {
      return 250;
    }

    if (window.innerWidth < 580) {
      return 260;
    }

    if (window.innerWidth < 600) {
      return 280;
    }

    if (window.innerWidth < 680) {
      return 300;
    }

    if (window.innerWidth < 720) {
      return 320;
    }
    if (window.innerWidth < 750) {
      return 350;
    }

    if (window.innerWidth < 780) {
      return 360;
    }

    if (window.innerWidth < 820) {
      return 380;
    }

    if (window.innerWidth < 900) {
      return 420;
    }

    if (window.innerWidth < 950) {
      return 336;
    }
    if (window.innerWidth < 1060) {
      return 348;
    }

    if (window.innerWidth < 1100) {
      return 360;
    }

    if (window.innerWidth < 1220) {
      return 380;
    }

    if (window.innerWidth < 1250) {
      return 415;
    }
    return 450;
  };

  return (
    <Card
      className="card-style"
      sx={{
        maxWidth: 345,
        height: getCardHeight(), //window.innerWidth < 900 ? 240 : 418,
        backgroundColor: "transparent",
      }}
      style={{ marginRight: 0, paddingRight: 0, width: "auto" }}
    >
      <CardActionArea
        onClick={() => {
          dispatch(getCocktailByID(idDrink));
          navigate("/cocktail/" + createSlug(strDrink));
        }}
        sx={{ height: "inherit" }}
      >
        <CardMedia
          component="img"
          height="auto"
          width="auto"
          image={strDrinkThumb}
        />
        <CardContent
          sx={{
            textAlign: "center",
            backgroundColor: "transparent",
            borderTop: "1px solid #ee0df7",
            marginBottom: "2rem",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: window.innerWidth < 600 ? "1rem" : "1.5rem",
              backgroundColor: "transparent",
              color: "#ee0df7",
            }}
          >
            {strDrink}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CocktailCard;
