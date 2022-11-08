import { styled } from "@material-ui/core/styles";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hook";
import { getCocktailByName } from "../../../redux/coctailSlice";
import "./SearchField.css";

interface Props {
  handleClose: any;
  innerRef: React.MutableRefObject<any>;
}

const options = ["op1", "op2", "op3", "op4", "op5", "op6"];

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ee0df7",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ee0df7",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ee0df7",
    },
    "&:hover fieldset": {
      borderColor: "#ee0df7",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ee0df7",
    },
  },
});

const SearchField: React.FC<Props> = ({ handleClose, innerRef }) => {
  const [cocktailTitle, setCocktailTitle] = useState("");
  const cocktails = useAppSelector(
    (store) => store.cockatils.cocktailSearchList
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cocktailTitle.length >= 3) {
      dispatch(getCocktailByName(cocktailTitle));
    }
  }, [cocktailTitle]);

  return (
    <div ref={innerRef}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={cocktails.map((cocktail) => cocktail.strDrink)}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            onChange={(e) => setCocktailTitle(e.target.value)}
            value={cocktailTitle}
            label="Search cocktails"
            style={{
              width: "15rem",
              color: "#ee0df7",
            }}
            variant="standard"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchField;
