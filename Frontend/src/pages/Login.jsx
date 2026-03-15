import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export const Login = () =>{

    const {login} = useContext(AuthContext);


    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () =>{

        login({email,password})

        navigate("/account")
    }




    return (

        <>

        <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={handleLogin}>Login</button>
        
        </>
    )
}