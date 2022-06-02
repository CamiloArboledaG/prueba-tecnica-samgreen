import { Card, InputAdornment, TextField } from "@mui/material";
import Textfield from "../../components/Textfield";
import styles from "./Login.module.css";
import Button from "../../components/Button";
import Link from "../../components/Link";

const Login = () => {
  return (
    <Card
      style={{
        padding: "24px 32px",
        margin: "24px 32px",
        display: "flex",
        flexDirection: "column",
        flex: "1",
        maxWidth: "387px",
      }}
    >
      <h2 className={styles.title}>Bienvenido</h2>
      <Textfield
        placeholder="Usuario"
        label="Usuario"
        sx={{ margin: "13px 0px", width: "100%", fontSize: "820" }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      />
      <Textfield
        placeholder="********"
        type="password"
        label="Contraseña"
        sx={{ margin: "13px 0px", width: "100%", fontSize: "820" }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      />
      <Button variant="contained">INICIAR SESIÓN</Button>
      <hr className={styles.Divider}></hr>
      <div className={styles.LinkDiv}>
        <Link>No tengo una cuenta</Link>
        <Link>Recuperar contraseña</Link>
      </div>
    </Card>
  );
};

export default Login;
