import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../../hooks/hook";

import SearchField from "./SearchField";

const SearchComponent: React.FC = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const ref = useOutsideClick(() => {
    setOpenSearchBar(false);
  });

  return (
    <>
      {openSearchBar ? (
        <SearchField
          innerRef={ref}
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
