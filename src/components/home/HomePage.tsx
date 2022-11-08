import { Navigate } from "react-router-dom";
import { validateYears } from "../../utils/util";
import CocktailLayoutManager from "../cocktails-viewer/cocktail-layout-manager/CocktailLayoutManager";
import Header from "../header/Header";

const HomePage: React.FC = () => {
  if (!localStorage.getItem("birth-year") || !validateYears()) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      {" "}
      <div className="App">
        <Header menu={false} />
      </div>
      <CocktailLayoutManager />
    </>
  );
};

export default HomePage;
