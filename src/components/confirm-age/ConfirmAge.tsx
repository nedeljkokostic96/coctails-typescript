import { Container, Grid } from "@mui/material";
import { useState } from "react";
import "./ConfirmAge.css";

const ConfirmAge: React.FC = () => {
  const [birthYear, setBirthYear] = useState("");
  const [expandYearList, setExpandYearList] = useState(false);

  return (
    <Container className="" maxWidth="md" sx={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Grid
          item
          container
          className="year-input-container"
          direction="row"
          columnSpacing={4}
          alignContent="center"
          justifyContent="center"
        >
          <Grid item>
            <h3 className="welcome-text">Confirm you're over 18 to access!</h3>
            <h3 className="welcome-text">Choose birth year!</h3>
            <div
              onClick={() => setExpandYearList(true)}
              className="number-input"
              style={{
                borderRadius: expandYearList ? "0.5rem 0.5rem 0 0" : "0.5rem",
              }}
            >
              {birthYear}
            </div>
            {expandYearList && (
              <div className="list-div" style={{ overflowY: "auto" }}>
                {generateBirthYears().map((year) => (
                  <p
                    onClick={() => {
                      setBirthYear(year + "");
                      setExpandYearList(false);
                    }}
                    className="list-item"
                    key={year}
                  >
                    {year}
                  </p>
                ))}
              </div>
            )}
          </Grid>
        </Grid>
        {!expandYearList && (
          <Grid
            className="proceed-button"
            item
            sx={{
              border: "1px solid white",
              marginTop: "2rem",
              width: "15rem",
              color: "#ee0df7",
              textAlign: "center",
              cursor: "pointer",
              height: "2.5rem",
              borderRadius: "0.5rem",
              borderColor: "#ee0df7",
              fontSize: "1.3rem",
              paddingTop: "0.1rem",
            }}
          >
            PROCEED
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

function validateYears(year: string) {
  const currentYear = new Date().getFullYear();
  if (currentYear - parseInt(year) >= 18) {
    localStorage.setItem("birth-year", year);
    return true;
  }
  return false;
}

function generateBirthYears() {
  const years = [];
  let currentYear: number = new Date().getFullYear();
  for (let i = currentYear; i > currentYear - 151; i--) {
    years.push(i);
  }
  return years;
}
export default ConfirmAge;
