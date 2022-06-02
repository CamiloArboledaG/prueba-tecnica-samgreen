import styles from "./Chats.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Chat = () => {
  return (
    <div className={styles.Contenedor}>
      <AppBar position="static" sx={{ bgcolor: "#585886", flex: "2" }}>
        <Toolbar sx={{ display:"flex", justifyContent: "space-between" }}>
          <div className={styles.ContenedorInformacionAppBar}>
            <Avatar sx={{ bgcolor: "#EEEEF3", color:"#30304A", fontWeight:"500", fontSize:"16px" }}>AT</Avatar>
            <h3 className={styles.Title}>Chats</h3>
          </div>
          <div className={styles.ContenedorInformacionAppBar}>
            <ChatBubbleOutlineIcon sx={{ color: "#EEEEF3", margin:"0px 15px" }} />
            <MoreVertIcon sx={{ color: "#EEEEF3", margin:"0px  0px 0px 15px" }} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Chat;
