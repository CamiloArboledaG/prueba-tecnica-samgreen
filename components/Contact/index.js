import { Avatar, Badge } from "@mui/material";
import styles from "./Contact.module.css";
import { purple } from "@mui/material/colors";

const Contact = () => {
  return (
    <div className={styles.ContenedorContact}>
      <Avatar
        sx={{
          bgcolor: "#CBCBD9",
          color: "#252538",
          fontWeight: "500",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        MM
      </Avatar>
      <div className={styles.ContenedorInfo}>
        <h4>Miracle Mango</h4>
        <h5>Lorem ipsum dolor sit amet, consectetur ...</h5>
      </div>
      <div  className={styles.ContenedorAdicional}>
        <h6 className={styles.Hora}>16:38PM</h6>
        <Badge
          badgeContent={10}
          sx={{
            "& .MuiBadge-badge": {
              color: "#FFFFFF",
              backgroundColor: "#8F8FAE",
              borderRadius: "10px",
              margin: "0px 10px ",
            },
          }}
        ></Badge>
      </div>
    </div>
  );
};

export default Contact;
