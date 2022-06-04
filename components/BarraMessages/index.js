import styles from "./BarraMessages.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from "@mui/icons-material/MoreVert";

const BarraChat = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#585886", flex: "2", width: "100%", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "60px",
        }}
      >
        <div className={styles.ContenedorInformacionAppBar}>
          <Avatar
            sx={{
              bgcolor: "#EEEEF3",
              color: "#30304A",
              fontWeight: "500",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            AT
          </Avatar>
          <div className={styles.ContenedorInfo}>
            <h4 className={styles.TextoTitle}>Miracle Mango</h4>
            <h5 className={styles.TextoSubTitle}>
              últ. vez hoy a la(s) 4:22 p. m.
            </h5>
          </div>
        </div>
        <div className={styles.ContenedorInformacionAppBar}>
          <SearchIcon
            sx={{ color: "#EEEEF3", margin: "0px 15px", cursor: "pointer" }}
          />
          <MoreVertIcon
            sx={{
              color: "#EEEEF3",
              margin: "0px  0px 0px 15px",
              cursor: "pointer",
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default BarraChat;
