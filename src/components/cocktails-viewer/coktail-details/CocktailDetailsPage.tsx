import { Container, Grid } from "@mui/material";
import { useAppSelector } from "../../../hooks/hook";
import "./CocktailDetailsPage.css";

const CocktailDetailsPage: React.FC = () => {
  const { cocktail } = useAppSelector((store) => store.cockatils);
  console.log(cocktail.strDrink);
  return (
    <>
      <Container maxWidth="md" className="cocktail-details-page">
        <Grid
          container
          direction="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src={cocktail.strDrinkThumb} />
          <h1>{cocktail.strDrink}</h1>
        </Grid>
      </Container>
    </>
  );
};

export default CocktailDetailsPage;
