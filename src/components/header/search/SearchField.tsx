import { TextField } from "@mui/material";
import { useRef } from "react";
import { useOutsideClick } from "../../../hooks/hook";
import "./SearchField.css";

interface Props {
  handleClose: any;
}

const SearchField: React.FC<Props> = ({ handleClose }) => {
  const ref = useRef();
  useOutsideClick(ref, () => {
    handleClose();
  });

  return (
    <TextField
      id="standard-basic"
      label="Search"
      variant="standard"
      sx={{
        width: { sm: 250, md: 350 },
        "& .MuiStandardInput-root:hover": {
          "& > fieldset": {
            borderColor: "red",
          },
        },
      }}
      inputProps={{
        style: { color: "#ee0df7", borderBottomColor: "white" },
      }}
    />
  );
};

export default SearchField;
