import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#3E3E5F",
  margin: "10px 0px",
  "&:hover": {
    backgroundColor: "#242438",
  },
}));

module.exports = ColorButton;