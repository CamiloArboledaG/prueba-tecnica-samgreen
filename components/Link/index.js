import { styled } from "@mui/material/styles";
import Link from '@mui/material/Link';
import { purple } from "@mui/material/colors";

const ColorLink = styled(Link)(({ theme }) => ({
    color: "#585886",
    textDecorationColor: "#585886",
    cursor: "pointer",
    margin: "10px 0px",
  "&:hover": {
    color: "#242438",
  },
}));

module.exports = ColorLink;