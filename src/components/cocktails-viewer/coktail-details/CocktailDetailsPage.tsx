import { Container, Grid, CardMedia, Card } from "@mui/material";
import { useAppSelector } from "../../../hooks/hook";
import { getIngridientsArray, LOREM_IPSUM_TEXT } from "../../../utils/util";
import "./CocktailDetailsPage.css";

const CocktailDetailsPage: React.FC = () => {
  const { cocktail } = useAppSelector((store) => store.cockatils);
  return (
    <>
      <Container maxWidth="md" className="cocktail-details-page">
        <Grid
          container
          direction={window.innerWidth < 600 ? "column" : "row"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          columnSpacing={2}
          rowSpacing={2}
        >
          <Grid
            item
            direction="column"
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{
              maxWidth: window.innerWidth < 900 ? "30rem" : "auto",
              paddingBottom: 0,
              paddingLeft: window.innerWidth < 900 ? 1 : 0,
              marginTop: 0,
              marginLeft: 1,
            }}
          >
            <Card raised sx={{ maxWidth: 400 }}>
              <CardMedia
                height={500}
                component="img"
                image={cocktail.strDrinkThumb}
              />
            </Card>
          </Grid>
          <Grid
            className="ingridients-grid"
            item
            direction="column"
            display="flex"
            alignItems="center"
            style={{
              marginLeft: window.innerWidth < 901 ? "0.5rem" : "3rem",
              paddingLeft: 0,
              marginTop: "1rem",
              paddingTop: "0",
              borderLeft:
                window.innerWidth < 901 ? "none" : "2px solid #ee0df7",
            }}
          >
            <Grid item>
              <h2 className="cocktail-title">{cocktail.strDrink}</h2>
            </Grid>
            <Grid
              direction="column"
              display="flex"
              alignItems="center"
              item
              className="ingridients-list-grid"
              style={{
                overflowY: window.innerWidth < 900 ? "unset" : "auto",
                height: window.innerWidth < 900 ? "auto" : "48vh",
              }}
            >
              {getIngridientsArray(cocktail).map((ing, index) => (
                <p key={index}>
                  {ing.ingridient} {ing.measure}
                </p>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: "3rem" }}
        >
          <p className="cocktail-description">
            {cocktail.strInstructions && cocktail.strInstructions.length < 200
              ? LOREM_IPSUM_TEXT
              : cocktail.strInstructions}
          </p>
        </Grid>
      </Container>
    </>
  );
};

export default CocktailDetailsPage;
