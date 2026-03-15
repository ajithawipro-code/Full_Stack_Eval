import { createContext, useEffect, useState } from "react";
import { getBalanceAPI,getStatementAPI, doTransferAPI } from "../api/axios.api";



export const AccountContext = createContext();

export const AccountProvider = ({children}) =>{

    const [account, setAccount] = useState([]);

    const getBalance = async() =>{
        const res = await getBalanceAPI();

        setAccount(res.data.data);
    }

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token)
        {
            getBalance()
        }
    })

    const getStatement = async() =>{

        const res= await getStatementAPI();

       return res.data.data;
        
    }

    const dotransfer = async(data) =>{
        await doTransferAPI(data)

        getBalance(); 
    }


    return (

        <AccountContext.Provider value={{getBalance,getStatement,dotransfer}}>
            {children}
        </AccountContext.Provider>
    )
}