
import { createContext, useContext, useEffect, useState,useReducer } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail } from "firebase/auth";
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

    const signup = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };

  const login = async (email,password) => 
   signInWithEmailAndPassword(auth, email,password)

   const logout = () =>signOut(auth);

    useEffect(()=>{
       onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        setLoading(false)
       })
    },[])

    const resetPassword = (email) =>{
   sendPasswordResetEmail (auth,email)
    }

  const addTransaccion = (transaccion) =>{
   dispatch ({
    type: "ADD_TRANSACCION",
    payload: transaccion
   })
  }
  return (
    <authContext.Provider value={{ signup,login, user,logout,loading,transacciones:state.transaccion,addTransaccion,resetPassword }}>
      {children}
    </authContext.Provider>
  );
}
