import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export const Signup = () =>{

    const {signup} = useContext(AuthContext);
     const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const handleLogin = () =>{

        signup({name,email,password})

        navigate("/login")
    }




    return (

        <>
        <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={handleLogin}>Signup</button>
        
        </>
    )
}