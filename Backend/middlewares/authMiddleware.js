import jwt from "jsonwebtoken"

export const authMiddleware = (req,res,next) =>{
    try{

    const authHeaders = req.headers.authorization;

    if(!authHeaders || !authHeaders.startsWith("Bearer "))
    {
        return res.status(400).json({message:"Token missing"});
    }

    const token = authHeaders.split(" ")[1];

    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        console.log("comes hgere-->", req.user);
        
        next();

    }

    catch(error)
    {
        return res.status(401).json({message:"Invalid token"});
    
    }

}