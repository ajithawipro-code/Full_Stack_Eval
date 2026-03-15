import { useContext } from "react"
import { AccountContext } from "../context/AccountContext"
import { AccountItem } from "./AccountItem";
import { SendMoney } from "./SendMoney";
import { AccountStatement } from "./AccountStatement";



export const AccountList =()=>{

    const {account} = useContext(AccountContext);

    return (

        <div>
            {
                account.map((acct)=>(
                    <AccountItem key={acct.id}
                                 acct = {acct} />
                ))
            }
            {
                account.map((acct1)=>(
                    <SendMoney key={acct1.id}
                                 acct = {acct1} />
                ))
            }
            {
                account.map((acct2)=>(
                    <AccountStatement key={acct2.id}
                                 acct = {acct2} />
                ))
            }
        </div>
    )
}