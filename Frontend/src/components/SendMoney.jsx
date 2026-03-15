import { useContext } from "react"
import { AccountContext } from "../context/AccountContext"



export const SendMoney =({acct1}) =>{

    const {doTransfer} = useContext(AccountContext)




    return (

        <>
        <h3>Send Money</h3>
        <p>{acct1.name}</p>
        <p>{acct1.balance}</p>

        <button onClick={()=>doTransfer()}>Send Money</button>

        </>
    )

}