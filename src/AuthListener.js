import { useEffect } from "react";
import { auth } from "./FirebaseConfig.js";
import { useHistory } from "react-router-dom";

const AuthListener = () => {
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/"); // Usuario autenticado, redirige a la página de inicio
      } else {
        history.push("/login"); // Usuario no autenticado, redirige a la página de inicio de sesión
      }
    });

    return () => {
      unsubscribe();
    };
  }, [history]);

  return null;
}

export default AuthListener;
