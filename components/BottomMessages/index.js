import { BottomNavigation } from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/InputMessage";
import styles from "./BottomMessages.module.css";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

const BottomMessages = () => {
  return (
    <BottomNavigation
      showLabels
      sx={{
        bgcolor: "#585886",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddinf: "0px 20px",
      }}
    >
      <div className={styles.contenedorEmoji}>
        <SentimentSatisfiedOutlinedIcon sx={{ color: "#DCDDF5" }} />
      </div>
      <div className={styles.ContenedorBarra}>
        <Search>
          <StyledInputBase
            placeholder="Escribe un mensaje aquí"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
    </BottomNavigation>
  );
};

export default BottomMessages;
