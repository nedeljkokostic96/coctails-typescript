import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmAge.css";
import { validateYears } from "../../utils/util";
import { Navigate } from "react-router-dom";
import React from "react";
import { useOutsideClick } from "../../hooks/hook";
import { ToastContainer, toast } from "react-toastify";

const ConfirmAge: React.FC = () => {
  const [birthYear, setBirthYear] = useState("");
  const [expandYearList, setExpandYearList] = useState(false);
  const navigate = useNavigate();
  const useOutsideClickRef = useOutsideClick(() =>
    setExpandYearList(!expandYearList)
  );

  if (localStorage.getItem("birth-year") !== null && validateYears()) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      <Container className="" maxWidth="md" sx={{ height: "100vh" }}>
        <Grid
          sx={{ paddingTop: "6rem" }}
          container
          direction="column"
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
              <h3 className="welcome-text">
                Confirm you're over 18 to access!
              </h3>
              <h3 className="welcome-text">Choose birth year!</h3>
              <div
                ref={useOutsideClickRef}
                onClick={(event: any) => {
                  event.preventDefault();
                  setExpandYearList(true);
                }}
                className="number-input"
                style={{
                  borderRadius: expandYearList ? "0.5rem 0.5rem 0 0" : "0.5rem",
                }}
              >
                {birthYear}
              </div>
              {expandYearList && (
                <div
                  ref={useOutsideClickRef}
                  className="list-div"
                  style={{ overflowY: "auto" }}
                >
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
              item
              container
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: "2rem" }}
            >
              <div
                onClick={() => {
                  if (validateYearsInput(birthYear)) {
                    localStorage.setItem("birth-year", birthYear);
                    navigate("/home");
                  }
                }}
                className="proceed-button"
                style={{
                  border: "1px solid white",
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
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

function validateYearsInput(year: string) {
  const currentYear = new Date().getFullYear();
  if (currentYear - parseInt(year) >= 18) {
    localStorage.setItem("birth-year", year);
    return true;
  }
  alert("You're not allowed to access this website! You're under 18.");
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
