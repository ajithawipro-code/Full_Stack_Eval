import { createContext, useState} from "react";
import { LoginAPI, SignupAPI } from "../api/axios.api";


export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [isAuth, setIsAuth] = useState(false);

    const signup = async(data) =>{
        await SignupAPI(data)
    }

    const login = async(data) =>{

        const res= await LoginAPI(data);
        localStorage.setItem("token", res.data.token);
        setIsAuth(true);
    }

    const logout = () =>{

        localStorage.removeItem("token");
        setIsAuth(false);
    }

    return (

        <AuthContext.Provider value = {{login,logout,signup,isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}