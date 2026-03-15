import { useContext } from "react"
import { AccountContext } from "../context/AccountContext"




export const AccountStatement =({acct2}) =>{

    const {getStatement} = useContext(AccountContext)




    return (

        <>
        <h3>Statement</h3>
        <p>{acct2.name}</p>
        <p>{acct2.balance}</p>

        <button onClick={()=>getStatement()}>See Statement</button>

        </>
    )

}