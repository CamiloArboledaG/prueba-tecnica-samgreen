import styles from "./Chats.module.css";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import BarraChat from "../../components/BarraChat";
import Contact from "../../components/Contact";

const Chat = () => {
  return (
    <div className={styles.Contenedor}>
      <div className={styles.ContenedorBarra}>
        <BarraChat />
      </div>
      <div className={styles.ContenedorBarra}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar o empezar nuevo chat"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <div className={styles.ContenedorBarra}>
        <Contact />
        <div className={styles.ContenedorDivider}>
          <hr className={styles.Divider}></hr>
        </div>
        <Contact />
        <div className={styles.ContenedorDivider}>
          <hr className={styles.Divider}></hr>
        </div>
      </div>
    </div>
  );
};

export default Chat;
