import { Container, Grid, Box } from "@mui/material";
import CocktailCard from "../card/CocktailCard";
import { useAppSelector } from "../../../hooks/hook";
import React from "react";

const CocktailLayoutManager: React.FC = () => {
  const { cocktailArr } = useAppSelector((store) => store.cockatils);

  return cocktailArr && cocktailArr.length > 0 ? (
    <>
      <Container
        id="div-to-scroll"
        sx={{
          marginTop: "2rem",
          width: window.innerWidth < 1250 ? "84vw" : "auto",
          borderTop: "0.1rem solid #ee0df7",
        }}
        style={{
          padding: 0,
        }}
      >
        <Box sx={{ paddingRight: "" }}>
          <Grid
            container
            direction="row"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            {cocktailArr.map((item, index) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={index}
                style={{
                  paddingLeft: "2.7rem",
                  paddingRight: window.innerWidth < 820 ? "2rem" : 0,
                  paddingTop: "4rem",
                }}
              >
                <CocktailCard
                  idDrink={item.idDrink}
                  strDrink={item.strDrink}
                  strDrinkThumb={item.strDrinkThumb}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  ) : (
    <>No cocktails to show!</>
  );
};

export default CocktailLayoutManager;
