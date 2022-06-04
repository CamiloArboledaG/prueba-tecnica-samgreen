import BarraMessages from "../../components/BarraMessages";
import BottomMessages from "../../components/BottomMessages";
import styles from "./Messages.module.css";
import UserMessage from "../../components/UserMessage";
import OtherMessage from "../../components/OtherMessage";

const Messages = () => {
  return (
    <div className={styles.Contenedor}>
      <div className={styles.ContenedorBarra}>
        <BarraMessages />
      </div>
      <div className={styles.ContenedorMensajes}>
        <div className={styles.ContenedorMensajeOther}>
          <OtherMessage />
        </div>
        <div className={styles.ContenedorMensajepersonal}>
          <UserMessage />
        </div>
        <div className={styles.ContenedorMensajepersonal}>
          <UserMessage />
        </div>
      </div>
      <div className={styles.ContenedorBarra}>
        <BottomMessages />
      </div>
    </div>
  );
};

export default Messages;
