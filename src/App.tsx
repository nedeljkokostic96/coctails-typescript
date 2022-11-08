import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { setMobileWidth } from "./redux/appSlice";
import { getWindowSize, validateYears } from "./utils/util";
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import MenuPage from "./components/menu/MenuPage";
import HomePage from "./components/home/HomePage";
import CocktailDetailsPage from "./components/cocktails-viewer/coktail-details/CocktailDetailsPage";
import NotFoundPage from "./components/NotFoundPage";
import ConfirmAge from "./components/confirm-age/ConfirmAge";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const menuOpen = useAppSelector((store) => store.app.menuOpen);
  const birthYear = useState(localStorage.getItem("birth-year"));
  const dispatch = useAppDispatch();

  // useEffect(() => {

  // }, [birthYear]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    dispatch(setMobileWidth(windowSize.innerWidth));
  }, [windowSize]);

  return (
    <>
      {menuOpen ? (
        <MenuPage />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<ConfirmAge />} />
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/cocktail/:strDrink"
                element={<CocktailDetailsPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
