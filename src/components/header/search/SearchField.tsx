import { TextField } from "@mui/material";
import { useRef } from "react";
import { useOutsideClick } from "../../../hooks/hook";

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
      id="standard-name"
      label="Name"
      className=""
      value={"12312"}
      onChange={() => {}}
      margin="normal"
    />
  );
};

export default SearchField;
