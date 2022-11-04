import { styled } from "@material-ui/core/styles";
import { Autocomplete, TextField } from "@mui/material";
import { useRef } from "react";
import { useOutsideClick } from "../../../hooks/hook";
import "./SearchField.css";

interface Props {
  handleClose: any;
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

const SearchField: React.FC<Props> = ({ handleClose }) => {
  const ref = useRef();
  useOutsideClick(ref, () => {
    handleClose();
  });

  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={options.map((option) => option)}
      renderInput={(params) => (
        <CustomTextField
          {...params}
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
  );
};

export default SearchField;
