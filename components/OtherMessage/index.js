import { Avatar } from "@mui/material";
import styles from "./OtherMessage.module.css";

const OtherMessage = () => {
  return (
    <div className={styles.contenedorOthers}>
      <Avatar
        sx={{
          bgcolor: "#DCDDF5",
          color: "#30304A",
          fontWeight: "500",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        AT
      </Avatar>
      <div className={styles.contenedor}>
        <div className={styles.contenedorMensaje}>
          <span className={styles.texto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
            malesuada sit.
          </span>
        </div>
        <div className={styles.contenedorHora}>
          <h6 className={styles.Hora}>9:48 p. m.</h6>
        </div>
      </div>
    </div>
  );
};

export default OtherMessage;
