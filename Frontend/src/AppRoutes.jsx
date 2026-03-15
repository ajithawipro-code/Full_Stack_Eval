import { AccountList } from "./components/AccountList"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ProtectedRoute } from "./pages/ProtectedRoute"




export const AppRoutes =() =>{

    return (

        <BrowserRouter>
        <Routes>
            <Route path ="/" element = {<Signup />} />
            <Route path ="/login" element = {<Login />} />
            <Route path ="/account" element = {
                <ProtectedRoute>
                    <AccountList />
                </ProtectedRoute>
            } />
        </Routes>
        
        </BrowserRouter>
    )
}