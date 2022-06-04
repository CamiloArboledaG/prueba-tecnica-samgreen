import styles from "./UserMessage.module.css";

const UserMessage = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorMensaje}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
          male. 😂🤣
        </span>
      </div>
      <div className={styles.contenedorHora}>
        <h6 className={styles.Hora}>9:48 p. m.</h6>
      </div>
    </div>
  );
};

export default UserMessage;
