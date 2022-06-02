import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#30304A",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#33304A",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: '#3E3E5F',
    },
  },
});

module.exports = CssTextField;