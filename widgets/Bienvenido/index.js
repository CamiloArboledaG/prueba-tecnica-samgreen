import Image from "next/image";
import styles from "./Bienvenido.module.css";

const Bienvenido = () => {
  return (
    <div className={styles.BienvenidoContenedor}>
      <Image
        src="/images/NoMessages.png"
        width="250px"
        height="250px"
        alt="Imagen no mensajes"
      />
      <h1>Bienvenidos al chat</h1>
      <p>
        Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet,
        consecte. Lorem ipsum dolor sit amet, consecte.
      </p>
    </div>
  );
};

export default Bienvenido;
