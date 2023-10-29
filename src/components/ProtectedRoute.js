import {useAuth} from "../context/authContext"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({children}) => {
  const {user,loading} = useAuth()

  if (loading) return <h1 style={{color:"cadetblue", textAlign:"center", fontFamily:'Roboto,sans-serif'}}>Cargando..</h1>;
  if (!user) return <Navigate to = '/login'/>

  return <>{children}</>
}
