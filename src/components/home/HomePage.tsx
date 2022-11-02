import CocktailLayoutManager from "../cocktails-viewer/cocktail-layout-manager/CocktailLayoutManager";
import Header from "../header/Header";

const HomePage: React.FC = () => {
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
