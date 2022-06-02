import styles from "./BarraChat.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const BarraChat = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#585886", flex: "2", width: "100%" }}
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
          <h3 className={styles.Title}>Chats</h3>
        </div>
        <div className={styles.ContenedorInformacionAppBar}>
          <ChatBubbleOutlineIcon
            sx={{ color: "#EEEEF3", margin: "0px 15px", cursor: "pointer" }}
          />
          <MoreVertIcon
            sx={{ color: "#EEEEF3", margin: "0px  0px 0px 15px", cursor: "pointer" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default BarraChat;
