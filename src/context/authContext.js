
import { createContext, useContext, useEffect, useState,useReducer } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import AppReducer from "./AppReducer";


export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

const initialState = {
  transacciones: []
}


export function AuthProvider({ children }) {

    const [user, setUser] =useState ()
    const [loading,setLoading] = useState(true)
    const [state,dispatch] = useReducer(AppReducer,initialState)

  const signup = async (email, password) => {
    // Realiza la validación de la dirección de correo electrónico antes de llamar a createUserWithEmailAndPassword
    if (!isValidEmail(email)) {
      console.error("Dirección de correo electrónico no válida");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
     alert('USUARIO REGISTRADO CORRECTAMENTE')
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
    }
  }
  const login = async (email,password) => 
   signInWithEmailAndPassword(auth, email,password)

   const logout = () =>signOut(auth);

    useEffect(()=>{
       onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        setLoading(false)
       })
    },[])

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };


  const addTransaccion = (transaccion) =>{
   dispatch ({
    type: "ADD_TRANSACCION",
    payload: transaccion
   })
  }
  return (
    <authContext.Provider value={{ signup,login, user,logout,loading,transacciones:state.transaccion,addTransaccion }}>
      {children}
    </authContext.Provider>
  );
}
