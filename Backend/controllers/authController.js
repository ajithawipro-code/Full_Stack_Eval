import bcrypt from "bcrypt"
import { supabase } from "../configs/supabase.config.js";
import jwt from "jsonwebtoken"

export const signup = async(req,res) =>{

    const {name, email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const {data, error} = await supabase.from("user_acct")
                                        .insert({name, email, password:hashedPassword})
                                        .select();

    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    return res.status(201).json({message:"User account created",
                                   data: data.name});
}          

export const login = async(req,res) =>{

    const{email,password} = req.body;

    const{data:user} = await supabase.from("user_acct")
                                     .select()
                                     .eq("email", email)
                                     .single();
    if(!user)
    {
        return res.status(404).json({message: "User not found"});
    }

    const  match = await bcrypt.compare(password, user.password);
    if(!match)
    {
        return res.status(401).json({message: "Invalid credentials"})
    }

    const token = jwt.sign(
        { id: user.id, email:user.email },
        process.env.JWT_SECRET      

    )
    return res.status(200).json({token})
}