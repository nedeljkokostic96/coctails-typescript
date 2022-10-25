import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";

import SearchField from "./SearchField";

const SearchComponent: React.FC = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  
  return (
    <>
      {openSearchBar ? (
        <SearchField
          handleClose={() =>
            setOpenSearchBar((openSearchBar) => !openSearchBar)
          }
        />
      ) : (
                  <SearchIcon
                      className=""
          onClick={() => setOpenSearchBar(!openSearchBar)}
          fontSize="large"
          sx={{ marginRight: "0.5rem" }}
        />
      )}
    </>
  );
};

export default SearchComponent;
