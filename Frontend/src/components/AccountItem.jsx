import { useContext } from "react"
import { AccountContext } from "../context/AccountContext"



export const AccountItem =({acct}) =>{

    const {getBalance} = useContext(AccountContext)




    return (

        <>
        <h3>Dashboard</h3>
        <p>{acct.name}</p>
        <p>{acct.balance}</p>

        <button onClick={()=>getBalance()}>See Balance</button>

        </>
    )

}