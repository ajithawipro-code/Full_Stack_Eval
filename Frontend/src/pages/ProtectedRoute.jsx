import { useContext } from "react"
import { AccountContext } from "../context/AccountContext"
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({children}) =>{



    const {isAuth} = useContext(AccountContext);
    if(!isAuth)
    {
        return <Navigate to = "/login" replace />
    }

    else {
        return children;
    }

}