import "./App.css";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { setMobileWidth } from "./redux/appSlice";
import { getWindowSize } from "./utils/util";
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import MenuPage from "./components/menu/MenuPage";
import { Container } from "@mui/system";
import { getCategories } from "./redux/coctailSlice";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const menuOpen = useAppSelector((store) => store.app.menuOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    dispatch(getCategories());

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
          <div className="App">
            <Header menu={false} />
          </div>
          <Container
            maxWidth="xl"
            style={{
              height: "100vh",
              border: "1px solid yellow",
            }}
          ></Container>
        </>
      )}
    </>
  );
}

export default App;
