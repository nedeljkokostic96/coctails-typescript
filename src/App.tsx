import "./App.css";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { setMobileWidth } from "./redux/appSlice";
import { getWindowSize } from "./utils/util";
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import MenuPage from "./components/menu/MenuPage";
import CocktailLayoutManager from "./components/cocktails-viewer/cocktail-layout-manager/CocktailLayoutManager";
import HomePage from "./components/home/HomePage";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const menuOpen = useAppSelector((store) => store.app.menuOpen);
  const dispatch = useAppDispatch();

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
          <HomePage />
          <CocktailLayoutManager />
        </>
      )}
    </>
  );
}

export default App;
