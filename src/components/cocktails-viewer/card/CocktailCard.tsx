import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CocktailCardData } from "../../model/ICocktailCardData";
import "./CocktailCard.css";

const CocktailCard: React.FC<CocktailCardData> = ({
  strDrink,
  idDrink,
  strDrinkThumb,
}: CocktailCardData) => {
  return (
    <Card
      className="card-style"
      sx={{
        maxWidth: 345,
        height: window.innerWidth < 600 ? 240 : 418,
        backgroundColor: "transparent",
      }}
      style={{ marginRight: 0, paddingRight: 0, width: "auto" }}
    >
      <CardActionArea sx={{ height: "inherit" }}>
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
