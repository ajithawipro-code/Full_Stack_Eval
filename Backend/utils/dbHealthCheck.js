import { supabase } from "../configs/supabase.config.js"

export const dbHealthCheck=async(req,res) =>{

    const {error} = await supabase.from("user_acct").select().limit(1);
    if(error)
    {
        console.log("DB failed", error);
        process.exit(1);
    }

    console.log("DB Success");


}