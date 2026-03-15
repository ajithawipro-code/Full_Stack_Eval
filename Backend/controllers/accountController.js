import { supabase } from "../configs/supabase.config.js";


export const getBalance = async(req,res) =>{

    const {id} = req.user;

    console.log("entering here inside", id);

    const {amount} = req.body;

    console.log(amount);

    const {data :user, error : userError} = await supabase.from("user_acct")
                                        .select()
                                        .eq("id", id)

                                        console.log(userError)

    if(userError)
    {
        return res.status(500).json({error: error.message});
    }

    let new_balance = user[0].balance;

    let new_amount = new_balance+amount;

    console.log(new_balance)

    const {data : newdata,error:newError} = await supabase.from("user_acct")
                                       .update({balance : new_amount})
                                       .eq("id", id)
                                       .select()
                                       .maybeSingle();
    if(newError)
    {
        return res.status(500).json({error: error.message});
    }

    return res.status(200).json({message:"Balance is", newdata})

}

export const getStatement = async(req,res) =>{

    const {id} = req.user;

    const {data ,error} = await supabase.from("user_acct")
                                       .select("balance")
                                       .eq("id", id)
    
    if(error)
    {
        return res.status(500).json({error:error.message});
    }

    return res.status(200).json({message :"Statement fetched", data})
                                        



}

export const doTransfer = async(req,res) =>{

    const {id} = req.user;

    const {amount, transaction_type} = req.body;


    console.log("Amoutn is --->", amount);

    

    const {data, error:senderError} = await supabase.from("transaction")
                                       .insert({amount, transaction_type})
                                       .eq("id", id)
                                       .select()

    if(senderError)
    {
        return res.status(500).json({error: senderError.message});
    }

  

    return res.status(200).json({message:"Transfer Done", data});


}

export const getUsers = async(req,res) =>{

  

    const {data,error} = await supabase.from("user_acct")
                                       .select()
                                     

    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    return res.status(200).json({message:"All users fetched",
                                data })


}