import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

interface PrivateRoute{
    children: ReactNode
}
export default function PrivateRoute({ children}:PrivateRoute) {
    const isLoggedIn = localStorage.getItem("vms_user")
    
  return isLoggedIn ? children : <Navigate to='/login'/>
}
